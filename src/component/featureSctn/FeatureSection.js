import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './feature.css';
import {useStyles} from '../../styles/featureMuiSTyles';
import FeatureItem from './featureItem/FeatureItem';
import { Button } from '@mui/material';

const FeatureSection = () => {
    const classes=useStyles()
  return <div className="feature_container">
  <Container maxWidth="md" sx={{py:"40px"}}>
<Typography variant="h2" color="#fff" className={classes.typography}>Featured Product</Typography>
<Grid container spacing={3}>
<Grid item xs={12} sm={6} md={4} lg={4}>
<FeatureItem />
</Grid>
<Grid item  xs={12}  sm={6} md={4} lg={4}>
<FeatureItem />
</Grid>
<Grid item  xs={12}  sm={6} md={4} lg={4}>
<FeatureItem />
</Grid>
</Grid>

<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  height="100px"
>
  <Button variant="outlined" size="large" sx={{padding:"20 30px",background:"rgb(88,173,183)",color:"#fff"}}>View more</Button>
</Box>


  </Container>

  </div>;
};

export default FeatureSection;
