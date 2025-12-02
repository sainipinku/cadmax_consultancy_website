import React from "react";
import "./image.css"

const MasonryGallery = () => {
  return (
    <div className="collage-wrapper">

      {/* ------------------ TOP COLLAGE ------------------ */}
      <div className="top-collage">

        {/* COLUMN 1 */}
        <div className="col-3-md coll">
          <div className="box tall">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg" />
            <div className="overlay" />
            <div className="title">HIGH-ACCURACY DGPS SURVEY</div>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="col-3-md coll">
          <div className="box big">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg" />
            <div className="overlay" />
            <div className="title">ENGINEERING SURVEY EXECUTION</div>
          </div>

          <div className="box small">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg" />
            <div className="overlay" />
            <div className="title">TOPOGRAPHIC GROUND MODELLING</div>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="col-3-md coll">
          <div className="box small">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/work/Cadmax.jpg" />
            <div className="overlay" />
            <div className="title">LAND BOUNDARY AND CONDITION SURVEYING</div>
          </div>

          <div className="box big">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg" />
            <div className="overlay" />
            <div className="title">MOBILE MAPPING + GIS PRODUCTION</div>
          </div>
        </div>

        {/* COLUMN 4 */}
        <div className="col-3-md coll">
          <div className="box big">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg" />
            <div className="overlay" />
            <div className="title">MEP DESIGN ENGINEERING</div>
          </div>

          <div className="box small">
            <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg" />
            <div className="overlay" />
            <div className="title">URBAN AND SUBDIVISION PLANNING</div>
          </div>
        </div>

      </div>

      {/* ------------------ BOTTOM COLLAGE ------------------ */}
      <div className="bottom-collage">
        <div className="box bottom-box">
          <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/LANDMARK-001.jpg" />
          <div className="overlay" />
          <div className="title">ON-SITE LAYOUT MARKING</div>
        </div>

        <div className="box bottom-box">
          <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/services/ServicesPhoto.jpg" />
          <div className="overlay" />
          <div className="title">GEODETIC AND ADVANCED POSITIONING</div>
        </div>

        <div className="box bottom-box">
          <img src="https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/addnew.jpg" />
          <div className="overlay" />
          <div className="title">INFRASTRUCTURE SURVEY SYSTEMS</div>
        </div>
      </div>
    </div>
  );
};

export default MasonryGallery;
