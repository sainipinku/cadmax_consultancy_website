import React from "react";
import Slider from "react-slick";
import "./Hero.css";

import img1 from "../../../assets/Images/header/home-banner.jpg";
import img2 from "../../../assets/Images/header/home-slider1.jpg";
import img3 from "../../../assets/Images/header/home-slider2.jpg";
import img4 from "../../../assets/Images/header/home-banner-img.jpg";



const Hero = () => {
  const sliderImages = [img1, img2, img3, img4];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
              <img src={img} alt={`slide-${i}`} className="hero-image"
              
              
              />
              {/* <div className="hero-center-btn">
  <button className="header-button">
    <Link to="/contact">ENQUIRE TODAY</Link>
  </button>
</div> */}

            </div>
            
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
