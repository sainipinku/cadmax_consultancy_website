import React from "react";
import "./image.css";
import image1 from "../../../assets/Images/collage/high-accuracy.jpeg"
import image2 from "../../../assets/Images/collage/engineer-survay.jpeg"
import image3 from "../../../assets/Images/collage/TOPOGRAPHIC-GROUND.jpg"
import image4 from "../../../assets/Images/collage/land-survay.jpeg"
import image5 from "../../../assets/Images/collage/mobile-mapping.jpeg"
import image6 from "../../../assets/Images/collage/urban-plan.jpg"
import image7 from "../../../assets/Images/collage/on-site-marking.jpeg"
import image8 from "../../../assets/Images/collage/geodetic-surveying.jpg"
import image9 from "../../../assets/Images/collage/insfructure-survay.jpeg"


const MasonryGallery = () => {
  return (
    <div className="gallery-wrapper">

      {/* ------------------ TOP COLLAGE ------------------ */}
      <div className="gallery-top">

        <div className="gallery-col">
          <div className="gallery-card tall">
            <img src={image1} alt=""/>
            <div className="gallery-overlay" />
            <div className="gallery-title">HIGH-ACCURACY DGPS SURVEY</div>
          </div>
        </div>

        <div className="gallery-col">
          <div className="gallery-card big">
            <img src={image2} alt=""/>
            <div className="gallery-overlay" />
            <div className="gallery-title">ENGINEERING SURVEY EXECUTION</div>
          </div>

          <div className="gallery-card small">
            <img src={image3} alt=""/>
            <div className="gallery-overlay" />
            <div className="gallery-title">TOPOGRAPHIC GROUND MODELLING</div>
          </div>
        </div>

        <div className="gallery-col">
          <div className="gallery-card small">
            <img src={image4} alt="" />
            <div className="gallery-overlay" />
            <div className="gallery-title">LAND BOUNDARY AND CONDITION SURVEYING</div>
          </div>

          <div className="gallery-card big">
            <img src={image5} alt=""/>
            <div className="gallery-overlay" />
            <div className="gallery-title">DRON SRUVEY + GIS PRODUCTION</div>
          </div>
        </div>

        <div className="gallery-col">
          <div className="gallery-card big">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg" alt=""/>
            <div className="gallery-overlay" />
            <div className="gallery-title">MEP DESIGN ENGINEERING</div>
          </div>

          <div className="gallery-card small">
            <img src={image6} alt=""/>
            <div className="gallery-overlay" />
            <div className="gallery-title">URBAN AND SUBDIVISION PLANNING</div>
          </div>
        </div>

      </div>

      {/* ------------------ BOTTOM COLLAGE ------------------ */}
      <div className="gallery-bottom">

        <div className="gallery-card bottom-card">
          <img src={image7} alt=""/>
          <div className="gallery-overlay" />
          <div className="gallery-title">ON-SITE LAYOUT MARKING</div>
        </div>

        <div className="gallery-card bottom-card">
          <img src={image8} alt=""/>
          <div className="gallery-overlay" />
          <div className="gallery-title">GEODETIC AND ADVANCED POSITIONING</div>
        </div>

        <div className="gallery-card bottom-card">
          <img src={image9} alt=""/>
          <div className="gallery-overlay" />
          <div className="gallery-title">INFRASTRUCTURE SURVEY SYSTEMS</div>
        </div>

      </div>
    </div>
  );
};

export default MasonryGallery;
