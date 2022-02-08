import { makeStyles } from '@mui/styles';

export const useStyles=makeStyles({
    Container:{
        padding:'30px 0',
    },
    typography:{
        color:"#fff",
        '@media(max-width:780px)':{
            fontSize:"76px !important",
            fontFamily: `Roboto,sans-serif` 
           
        } 
    }
})