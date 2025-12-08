import React from "react";
import "./image.css";

const MasonryGallery = () => {
  return (
    <div className="gallery-wrapper">

      {/* ------------------ TOP COLLAGE ------------------ */}
      <div className="gallery-top">

        <div className="gallery-col">
          <div className="gallery-card tall">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg" />
            <div className="gallery-overlay" />
            <div className="gallery-title">HIGH-ACCURACY DGPS SURVEY</div>
          </div>
        </div>

        <div className="gallery-col">
          <div className="gallery-card big">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg" />
            <div className="gallery-overlay" />
            <div className="gallery-title">ENGINEERING SURVEY EXECUTION</div>
          </div>

          <div className="gallery-card small">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg" />
            <div className="gallery-overlay" />
            <div className="gallery-title">TOPOGRAPHIC GROUND MODELLING</div>
          </div>
        </div>

        <div className="gallery-col">
          <div className="gallery-card small">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Cadmax.jpg" />
            <div className="gallery-overlay" />
            <div className="gallery-title">LAND BOUNDARY AND CONDITION SURVEYING</div>
          </div>

          <div className="gallery-card big">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg" />
            <div className="gallery-overlay" />
            <div className="gallery-title">MOBILE MAPPING + GIS PRODUCTION</div>
          </div>
        </div>

        <div className="gallery-col">
          <div className="gallery-card big">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg" />
            <div className="gallery-overlay" />
            <div className="gallery-title">MEP DESIGN ENGINEERING</div>
          </div>

          <div className="gallery-card small">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg" />
            <div className="gallery-overlay" />
            <div className="gallery-title">URBAN AND SUBDIVISION PLANNING</div>
          </div>
        </div>

      </div>

      {/* ------------------ BOTTOM COLLAGE ------------------ */}
      <div className="gallery-bottom">

        <div className="gallery-card bottom-card">
          <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg" />
          <div className="gallery-overlay" />
          <div className="gallery-title">ON-SITE LAYOUT MARKING</div>
        </div>

        <div className="gallery-card bottom-card">
          <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg" />
          <div className="gallery-overlay" />
          <div className="gallery-title">GEODETIC AND ADVANCED POSITIONING</div>
        </div>

        <div className="gallery-card bottom-card">
          <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg" />
          <div className="gallery-overlay" />
          <div className="gallery-title">INFRASTRUCTURE SURVEY SYSTEMS</div>
        </div>

      </div>
    </div>
  );
};

export default MasonryGallery;
