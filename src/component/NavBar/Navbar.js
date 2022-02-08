import './navbar.css';
import HotelLogo from '../../assets/logo.png'
import Typography  from '@mui/material/Typography';
import { useStyles } from '../../styles/navBarMuiSTyles';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const classes=useStyles()
  return <div className='navbar'>
    <div className="logo">
    <div className='logo-wrapper'>
    <img src={HotelLogo} alt="logo"/> 
    </div>
      <Typography variant="h4" className={classes.typography}sx={{ml:"-4px"}}>
      <span>NM </span><span className='block'>Foods</span> </Typography> 
    </div>
    <div className="cartIcon" style={{marginRight:"15px"}}>
    <Badge badgeContent={4} sx={{backgroundColor:"rgb(110,112,114)"}} color="primary" >
  <ShoppingCartIcon classes={{root:classes.cartIcon}} />
</Badge> 
    </div>
   

  </div>; 
};

export default Navbar;
