import { makeStyles } from '@mui/styles';

export const useStyles=makeStyles({
    typography:{
        color:"#fff",
        '@media(max-width:780px)':{
            fontSize:"16px !important",
           
        } 
    },
    cartIcon:{
        color:"#fff",
        height:"2rem !important",
        width:"2rem !important"
    }
})