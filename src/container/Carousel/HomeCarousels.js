import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { images } from "../../Constansts";
import "./HomeCarousels.scss";
const HomeCarousels = () => {
  return (
    <div className="container">
      <Carousel
        autoPlay
        showArrows={true}
         showStatus={false}
         //swipeable={true}
         showThumbs={false}
         animationHandler={'fade'}
         infiniteLoop={true}
         transitionTime={3000}
      >
        <div className="App__carousel">
          <img src={images.slide1} alt="Yared Yacob" className="app__img"  />
        </div>
        <div className="App__carousel">
          <img src={images.slide2} alt="Yared Yacob" className="app__img" />
        </div>
        <div className="App__carousel">
          <img src={images.slide3} alt="Yared Yacob" className="app__img" />
        </div>
      </Carousel>
    </div>
  );
};
export default HomeCarousels;
