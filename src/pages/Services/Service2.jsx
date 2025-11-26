import React from 'react';
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import "./Service2.css";

import heroBG from "../../../src/assets/Images/header/Header-bg-img.png";
import overlapImg from "../../../src/assets/Images/service-page-2/service2-img1.png";
import collage1 from "../../../src/assets/Images/service-page-2/service2-img2.png";
import collage2 from "../../../src/assets/Images/service-page-2/service2-img3.png";
import collage3 from "../../../src/assets/Images/service-page-2/service2-img4.png";
import collage4 from "../../../src/assets/Images/service-page-2/service2-img5.png";

const Service2 = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="service1-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      ></div>

      {/* BLACK SECTION */}

      
      <div className="black-box">

        <h2>Engineering That Works on the Ground</h2>

        <p>
          CADMAX approaches engineering with one expectation: the design must perform exactly
          as executed on site. The team studies gradients, utilities, movement patterns and
          regulations before drawing the first line. Fifteen years of land-development experience
          shapes this process, producing layouts that fit the land instead of fighting it.
        </p>
      </div>
{/* OVERLAP IMAGE ON BLACK SECTION */}
<div className="overlap-img-box">
  <img src={overlapImg} alt="overlap" />
</div>

{/* NEXT FLEX SECTION */}
<div className="flex-section">
  <h2>What We Offer</h2>
  <p>A focused set of engineering services that define how a site functions, connects and operates.</p>
</div>

  <div className="collage">

  <div className="left">
    <div className="imgBox">
      <img src={collage1} />
      <p>MAINGATE AND BOUNDARY CONSTRUCTION</p>
    </div>
  </div>

  <div className="right">

    <div className="top">
      <div className="imgBox">
        <img src={collage2} />
        <p>ROAD NETWORK</p>
      </div>

      <div className="imgBox">
        <img src={collage3} />
        <p>WATER SUPPLY</p>
      </div>
    </div>

    <div className="bottom">
      <div className="imgBox">
        <img src={collage4} />
        <p>ELECTRICITY</p>
      </div>
    </div>

  </div>
</div>


      <Footer />
    </>
  );
};

export default Service2;
