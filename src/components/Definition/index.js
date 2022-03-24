import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { Stack, Typography, IconButton } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

const Definition = () => {
    const { word } = useParams();
    const navigate = useNavigate();
    const [defs, setDefs] = useState([])

    useEffect(() => {
        const fetchDef = async () => {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            setDefs(response.data)
        }

        fetchDef();

    }, []);

    return (
        <>
            <Stack alignItems="flex-start" sx={{mt: 3}}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIcon sx={{ fontSize: 70 }}/>
                </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{
                mt: 1,
                px: 4,
                py: 5,
                background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
                boxShadow: '0px 10px 20px rgba(19, 23, 71, 0.25)',
                color: 'black',
                borderRadius: 10,
            }}>
                <Typography variant="h3" sx={{ textTransform: 'capitalize'}}>{word}</Typography>
                <IconButton>
                    <PlayCircleFilledWhiteIcon sx={{ fontSize: 70 }}/>
                </IconButton>
            </Stack>
        </>
    )
}

export default Definition
