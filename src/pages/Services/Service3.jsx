import React from 'react'
import './Service3.css';
import heroBG from "../../../src/assets/Images/header/Header-bg-img.png";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import WorkSlider from '../../components/common/slider/SliderSection';
import img1 from "../../../src/assets/Images/service-page-3/collage-img.png";
const Service3 = () => {
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <div
        className="service1-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      ></div>

      <div className="collage-img">
        <div className="img-box">
          <img src={img1} alt="" />
          <p>Maingate and boundary <br /> construction</p>
        </div>
        <div className="img-box">
          <img src={img1} alt="" />
          <p>Road network</p>
        </div>

        <div className="img-box">
          <img src={img1} alt="" />
          <p>Water supply</p>
        </div>

        <div className="img-box">
          <img src={img1} alt="" />
          <p>Electricity</p>
        </div>


      </div>
      <WorkSlider />

      <Footer />
    </>
  )
}

export default Service3;
