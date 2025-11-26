import React from "react";
import "./image.css";

import img1 from "../../../assets/Images/collage/Rectangle 47.png";
import img2 from "../../../assets/Images/collage/Rectangle 48.png";
import img3 from "../../../assets/Images/collage/Rectangle 49.png";
import img4 from "../../../assets/Images/collage/Rectangle 50.png";
import img5 from "../../../assets/Images/collage/Rectangle 51.png";
import img6 from "../../../assets/Images/collage/Rectangle 52.png";
import img7 from "../../../assets/Images/collage/Rectangle 53.png";
import img8 from "../../../assets/Images/collage/Rectangle 54.png";
import img9 from "../../../assets/Images/collage/Rectangle 55.png";
import img10 from "../../../assets/Images/collage/Rectangle 56.png";

const Collage = () => {
  return (
    <div className="collage-wrapper">
      <div className="collage">

        <div className="block img1">
          <img src={img1} alt="High-Accuracy DGPS Survey" />
          <p className="txt">HIGH-ACCURACY DGPS SURVEY</p>
        </div>

        <div className="block img2">
          <img src={img2} alt="Engineering Survey Execution" />
          <p className="txt">ENGINEERING SURVEY EXECUTION</p>
        </div>

        <div className="block img3">
          <img src={img3} alt="Mobile Mapping" />
          <p className="txt">MOBILE MAPPING + GIS PRODUCTION</p>
        </div>

        <div className="block img4">
          <img src={img4} alt="Topographic" />
          <p className="txt">TOPOGRAPHIC GROUND MODELLING</p>
        </div>

        <div className="block img5">
          <img src={img5} alt="MEP Design" />
          <p className="txt">MEP DESIGN ENGINEERING</p>
        </div>

        <div className="block img6">
          <img src={img6} alt="Land Boundary" />
          <p className="txt">LAND BOUNDARY AND CONDITION SURVEYING</p>
        </div>

        <div className="block img7">
          <img src={img7} alt="Urban Planning" />
          <p className="txt">URBAN AND SUBDIVISION PLANNING</p>
        </div>

        <div className="block img8">
          <img src={img8} alt="On-site Layout" />
          <p className="txt">ON-SITE LAYOUT MARKING</p>
        </div>

        <div className="block img9">
          <img src={img9} alt="Geodetic" />
          <p className="txt">GEODETIC AND ADVANCED POSITIONING</p>
        </div>

        <div className="block img10">
          <img src={img10} alt="Infrastructure" />
          <p className="txt">INFRASTRUCTURE SURVEY SYSTEMS</p>
        </div>

      </div>
    </div>
  );
};

export default Collage;
