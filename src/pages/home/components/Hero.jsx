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
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="hero-wrapper">
      <div className="hero-slider-box">
        <Slider {...settings}>
          {sliderImages.map((img, i) => (
            <div key={i} className="hero-item">
              <img src={img} alt={`slide-${i}`} className="hero-image" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
