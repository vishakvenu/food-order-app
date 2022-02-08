import React from 'react';
import './header.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {useStyles} from '../../styles/headerMuiStyles';

const Header = () => {
    const classes=useStyles()
  return (<>
    <div className='header'>
    <Container maxWidth="md" className={classes.Container}>
         <div className="container_inner_wrapper" >
         <Typography variant="h1" color="#fff" sx={{width:"300px",lineHeight:1}
         } className={classes.typography} >
            Best food in the city
         </Typography>
         <Typography variant="h5"color="rgb(110,112,114)" sx={{width:"250px",margin:"15px 0"}}>  
            Taste it now with our online order
         </Typography> 
        <button className="order_now">
            Order Now 
        </button>

         </div>
    
        </Container>
    </div>
         
  </>);
};

export default Header;
