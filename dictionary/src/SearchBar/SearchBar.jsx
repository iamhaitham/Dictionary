import { 
    CircularProgress,
    IconButton, 
    InputBase, 
    Paper 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Wrapper from '../shared/Wrapper/Wrapper';
import { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ errorNotification, setErrorNotification }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleInputKeyPress = async (e) => {
        const enterKey = 'Enter';
        if (e.key === enterKey) {
            e.preventDefault();
            await handleSearchClick();
        }
    }

    const handleSearchClick = async () => {
        if (!searchTerm)
            return;

        try {
            setIsLoading(true);
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
            console.log(response.data[0])
            setIsLoading(false);
            setErrorNotification({ 
                ...errorNotification, 
                isSearchTermNotFound: false
            });
        } catch (error) {
            setIsLoading(false);
            setErrorNotification({ 
                ...errorNotification, 
                isSearchTermNotFound: true,
                notificationContent: 'The search term is not found!',
                notificationSeverity: 'error',
                notificationWidth: '100%'
            });
        }
    }

    const determineIcon = () => {
        if (isLoading)
            return (
                <CircularProgress size={ 25 }/>
            );
        else 
            return (
                <SearchIcon/>
            );
    }

    return (
        <Wrapper>
            <Paper 
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 335, mt: '2rem' }}
            elevation={ 3 }
            >
                <InputBase 
                sx={{ ml: 1, flex: 1 }}
                placeholder='Search'
                inputProps={{ 'aria-label': 'search' }}
                onChange={ (e) => handleSearchTermChange(e) }
                onKeyPress={ async (e) => await handleInputKeyPress(e) }
                />
                <IconButton 
                type='button' 
                sx={{ p: '10px' }} 
                aria-label='search'
                color='primary'
                onClick={ async () => await handleSearchClick() }
                disabled={ isLoading }
                >
                    { determineIcon() }
                </IconButton>
            </Paper>
        </Wrapper>
    )
}

export default SearchBar;