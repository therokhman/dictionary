import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import {Stack, Typography, IconButton, Divider, Box, CircularProgress, useTheme, Button} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, Fragment } from 'react';
import axios from "axios";

const Definition = () => {
    const { word } = useParams();
    const navigate = useNavigate();
    const [definitions, setDefs] = useState([]);
    const [loading, setLoad] = useState(true);
    const [exist, setExist] = useState(true);
    const theme = useTheme();

    useEffect(() => {
        const fetchDef = async () => {
            try {
                const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                setDefs(response.data);
                setLoad(false);
            } catch(err) {
                console.log('error');
                setExist(false);
            }
        }

        fetchDef();

    }, []);

    if (!exist) return <Box sx={{ ...theme.mixins.centerAlign }}>
        <Typography>Not Found</Typography>
        <Button variant="contained" sx={{ my: 2 }} onClick={() => navigate('/')}>Return to Home page</Button>
    </Box>

    if (loading) return <Box sx={{ ...theme.mixins.centerAlign }}><CircularProgress /></Box>;

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

            {definitions.map((def, index) =>
                <Fragment key={index}>
                    <Divider sx={{ display: index === 0 ? 'none' : 'block', my: 4}}/>
                    {def.meanings.map(meaning =>
                        <Box key={meaning.partOfSpeech} sx={{
                            backgroundColor: 'white',
                            borderRadius: 3,
                            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.05)',
                            mt: 3,
                            p: 2
                        }}>
                            <Typography sx={{ textTransform: 'capitalize'}} color="GrayText" variant="subtitle1">{meaning.partOfSpeech}</Typography>
                            {meaning.definitions.map((definition, index) => <Typography sx={{ my: 1}} color="GrayText" key={definition}>{meaning.definitions.length > 1 && `${index + 1}. `}{definition.definition}</Typography>)}

                        </Box>
                    )}

                </Fragment>
                    )}
        </>
    )
}

export default Definition
