import { Box, Typography, FilledInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [word, setWord] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const trimWord = word.trim();
        if (trimWord.split(' ').length > 1 || !trimWord) return;
        navigate(`/search/${word}`)
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Typography color="primary" sx={{ mb: 7 }} variant="h3">Dictionary</Typography>
            <img style={{ marginBottom: '50px' }} src={`${process.env.PUBLIC_URL}/assets/dictionary.png`} alt="Словарь"/>
            <Box sx={{
                width: '500px'
            }}>
                <form onSubmit={handleSubmit}>
                    <FilledInput value={word} onChange={event => setWord(event.target.value)}
                        fullWidth
                        disableUnderline
                        placeholder="Введите слово"
                        startAdornment={<SearchIcon color={"disabled"}/>}
                             sx={{
                                 backgroundColor: 'white',
                                 borderRadius: 3,
                                 boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.05)',
                                 '& .MuiFilledInput-input': {
                                     p: 3,
                                 }
                    }}/>
                </form>
            </Box>
        </Box>
    )
}

export default Home
