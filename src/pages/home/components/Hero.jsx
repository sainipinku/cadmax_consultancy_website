import React from "react";
import Slider from "react-slick";
import "./Hero.css";

import img1 from "../../../assets/Images/header/Header-bg-img.png";
import img2 from "../../../assets/Images/header/slider1.jpg";
import img3 from "../../../assets/Images/header/slider2.png";
import img4 from "../../../assets/Images/header/slider3.jpg";


const Hero = () => {
  const sliderImages = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    cssEase: "ease-in-out",
  };

  return (
    <div className="hero-fluid">
      <div className="hero-slider-container">
        <Slider {...settings}>
          {sliderImages.map((img, i) => (
            <div key={i} className="hero-slide">
              <img src={img} alt="slider" className="hero-img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
