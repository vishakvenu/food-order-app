import { makeStyles } from '@mui/styles';

export const useStyles=makeStyles({
    typography:{
        marginBottom:"30px !important",
        color:"#fff",
        '@media(max-width:780px)':{
            width:"100px",
            lineHeight:1,
            fontFamily: `Roboto,sans-serif`,
            marginBottom:"10px !important"
           
        } 
    }
})