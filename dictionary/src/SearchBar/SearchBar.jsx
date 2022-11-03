import { 
    IconButton, 
    InputBase, 
    Paper 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Wrapper from '../shared/Wrapper/Wrapper';
import { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

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
        try {
            if (!searchTerm)
                return;

            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
            console.log(response.data[0])
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Wrapper>
            <Paper 
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 335, mt: '2rem' }}
            elevation={3}
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
                >
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </Wrapper>
    )
}

export default SearchBar