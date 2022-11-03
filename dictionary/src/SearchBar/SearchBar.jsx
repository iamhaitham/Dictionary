import { 
    IconButton, 
    InputBase, 
    Paper 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Wrapper from '../shared/Wrapper/Wrapper';

const SearchBar = () => {
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
                />
                <IconButton 
                type='button' 
                sx={{ p: '10px' }} 
                aria-label='search'
                color='primary'
                >
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </Wrapper>
    )
}

export default SearchBar