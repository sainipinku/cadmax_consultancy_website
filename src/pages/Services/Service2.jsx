import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import "./Service2.css";
import { Link } from "react-router-dom";

import heroBG from "../../../src/assets/Images/header/Header-bg-img.png";
import overlapImg from "../../../src/assets/Images/service-page-2/service2-img1.png";

import collage1 from "../../../src/assets/Images/service-page-2/service2-img2.png";
import collage2 from "../../../src/assets/Images/service-page-2/service2-img3.png";
import collage3 from "../../../src/assets/Images/service-page-2/service2-img4.png";
import collage4 from "../../../src/assets/Images/service-page-2/service2-img5.png";

const Service2 = () => {

 
  const collageImages = [
    { img: collage1, title: "MAINGATE AND BOUNDARY CONSTRUCTION" },
    { img: collage2, title: "ROAD NETWORK" },
    { img: collage3, title: "WATER SUPPLY" },
    { img: collage4, title: "ELECTRICITY" }
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div
        className="service1-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      ></div>

      {/* BLACK */}
      <div className="black-box">
        <h2>Engineering That Works on the Ground</h2>
        <p>
          CADMAX approaches engineering with one expectation: the design must perform exactly as executed on site. The team studies gradients, utilities, movement patterns and regulations before drawing the first line. Fifteen years of land-development experience shapes this process, producing layouts that fit the land instead of fighting it.
        </p>
      </div>

      {/* OVERLAP */}
      <div className="overlap-img-box">
        <img src={overlapImg} alt="" />
      </div>

      {/* HEADING */}
      <div className="flex-section">
        <h2>What We Offer</h2>
        <p>A focused set of engineering services that define how a site functions, connects and operates.</p>
      </div>

     {/* ⭐⭐ DYNAMIC COLLAGE ⭐⭐ */}
<div className="collage-wrapper">

  {/* ITEM 1 (BIG LEFT) */}
  <Link to="/Services/Service3" className="collage-item item-1">
      <img src={collageImages[0].img} alt="" />
      <h2>{collageImages[0].title}</h2>
  </Link>

  {/* ITEM 2 */}
  <Link to="/Services/Service3" className="collage-item item-2">
      <img src={collageImages[1].img} alt="" />
      <h2>{collageImages[1].title}</h2>
  </Link>

  {/* ITEM 3 */}
  <Link to="/Services/Service3" className="collage-item item-3">
      <img src={collageImages[2].img} alt="" />
      <h2>{collageImages[2].title}</h2>
  </Link>

  {/* ITEM 4 (BOTTOM FULL) */}
  <Link to="/Services/Service3" className="collage-item item-4">
      <img src={collageImages[3].img} alt="" />
      <h2>{collageImages[3].title}</h2>
  </Link>

</div>


      <Footer />
    </>
  );
};

export default Service2;
