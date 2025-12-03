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

  // 👉 Tum jitni images chahe add kar sakte ho
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
      <div className="collage">

        {/* LEFT BIG IMAGE (index 0) */}
        <div className="left">
          <Link to="/Services/Service3">
            <div className="imgBox">
              <img src={collageImages[0].img} />
              <p>{collageImages[0].title}</p>
            </div>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">

          {/* TOP TWO (index 1 + index 2) */}
          <div className="top">
            {collageImages.slice(1, 3).map((item, i) => (
              <Link to="/Services/Service3" key={i}>
                <div className="imgBox">
                  <img src={item.img} />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* BOTTOM (index 3) */}
          <div className="bottom">
            <div className="imgBox">
              <img src={collageImages[3].img} />
              <p>{collageImages[3].title}</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Service2;
