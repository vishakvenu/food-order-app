import React from 'react';
import Carousel from './coarousel/Carousel';
import FeatureSection from './featureSctn/FeatureSection';
import Header from './Header/Header';
import Navbar from './NavBar/Navbar';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
import './index.css'


const HomePage = () => {
  const navigate=useNavigate()

  

  return (<div className="homePage">
      <Header />
      <button className="homepage_addBtn" onClick={()=>navigate("/items")}>
        <AddIcon className="homepage_icon"/>
      </button>
      <FeatureSection />
      <Carousel />
  </div>);
};

export default HomePage;
