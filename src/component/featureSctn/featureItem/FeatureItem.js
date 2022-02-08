import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './featureItem.css';
import Biriyani from '../../../assets/biriyani.jpg'

const FeatureItem = () => {
  return ( <Card 
 
  >
    <CardMedia
      component="img"
      alt="green iguana"
      height="180"
      image={Biriyani}
    />
    <CardContent sx={{backgroundColor:"rgb(33,35,38)",padding:"10px 15px !important"}}>
      <Typography gutterBottom variant="h5" color="#fff" sx={{margin:"5px 0 !important"}}component="div">
        Biriyani
      </Typography>
      <Typography variant="body2" color="rgb(120,135,133)">
        Chicken, basumathi rice, onion, garam masala, pickle..
      </Typography>
    </CardContent>
    <div className='featureBtns'>
    <Typography sx={{width:"10px"}}>
    <span style={{fontSize:"12px",color:"grey"}}>from</span> 120rs</Typography>
    <button className="Addbtn">Add to cart</button>
    </div>
  </Card>);
};

export default FeatureItem;
