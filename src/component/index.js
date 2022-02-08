import React from 'react';
import Carousel from './coarousel/Carousel';
import FeatureSection from './featureSctn/FeatureSection';
import Header from './Header/Header';
import Navbar from './NavBar/Navbar';
import AddIcon from '@mui/icons-material/Add';

import './index.css'

const HomePage = () => {
  return (<div className="homePage">
      <Navbar />
      <Header />
      <button className="homepage_addBtn">
        <AddIcon className="homepage_icon"/>
      </button>
      <FeatureSection />
      <Carousel />
      <h1>iugsdib8vguyi8fyugvyuf</h1>
  </div>);
};

export default HomePage;
