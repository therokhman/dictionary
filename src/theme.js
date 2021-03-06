import { createTheme } from '@mui/material/styles';

export default createTheme({
    palette: {
        background: {
            default: '#daf5a9'
        }
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h3: {
            fontWeight: 700
        },
        subtitle1: {
            fontWeight: 700
        }
    },
    mixins: {
        centerAlign: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }
    }
})
