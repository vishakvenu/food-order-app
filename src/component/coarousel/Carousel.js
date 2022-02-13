import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Typography } from "@mui/material";
import { carouselData } from "../../data/data";
import { useStyles } from "../../styles/carouselMuiSTyles";
export default function Carousel() {
  const [innerWidth, setInnerWidth] = useState(780);
  const [view, setView] = useState(3);
  const classes = useStyles();

  useEffect(()=>{
    if(window.innerWidth<=766){
      setView(1)
    }else if(window.innerWidth>768){
      setView(3)
    }
  },[])

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <768) {
        setInnerWidth(window.innerWidth)
        setView(1)
        console.log("changed to smaller")
      } else {
        setInnerWidth(window.innerWidth)
        setView(3)
        console.log("changed to larger")
      }
    })

  }, [innerWidth])

  console.log(innerWidth)
  return (
    <>
      <Swiper
        slidesPerView={view}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carouselData.map(item => (
          <SwiperSlide key={item.id}>
            <div className="carousel_slider_wrapper">
              <img src={item.src} alt="biriyani" />
              <Typography variant="h4"
               className="typography"
               >{item.text}</Typography>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
        <div className="carousel_slider_wrapper">
        <img src={Biriyani}  alt="biriyani"/>
        <Typography variant="h4" color="#fff" sx={{position:"absolute",top:"30px",
        left:"20px",transfrom:"translate(-50%,-50%)"}}>Biriyani</Typography>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="carousel_slider_wrapper">
        <img src={Meencurry}  alt="biriyani"/>
        <Typography variant="h4" color="#fff" sx={{position:"absolute",top:"30px",
        left:"20px",transfrom:"translate(-50%,-50%)"}}>MeenCurry</Typography>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="carousel_slider_wrapper">
        <img src={Porottabeef}  alt="biriyani"/>
        <Typography variant="h4" color="#fff" sx={{position:"absolute",top:"30px",
        left:"20px",transfrom:"translate(-50%,-50%)"}}>Porotta Beef</Typography>
        </div>
        
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
