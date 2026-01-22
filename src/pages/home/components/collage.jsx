import React, { useEffect, useState } from "react";
import "./collage.css";

import image1 from "../../../assets/Images/slide-image/collage-slider1.jpg";
import image2 from "../../../assets/Images/slide-image/collage-slider2.jpg";
import image3 from "../../../assets/Images/slide-image/collage-slider3.jpg";
import image4 from "../../../assets/Images/slide-image/collage-silder4.jpg";
import image5 from "../../../assets/Images/slide-image/collage-slider5.jpg";

const Collage2 = () => {
  const slides = [
    {
      img: image1,
      desc: "SHYAMASHISH BRIJ VATIKA – VILLAGE GAJADHARPURA, KALWAR ROAD JAIPUR.",
    },
    {
      img: image2,
      desc: "CLUB HOUSE- BICHPADI, NEAR AJMER ROAD, JAIPUR",
    },
    {
      img: image3,
      desc: "DIPENDRA JI HOUSE- GONER ROAD, JAIPUR.",
    },
    {
      img: image4,
      desc: "SANDEEP SARASWAT JI – BEELWA TONK ROAD, JAIPUR.",
    },
    {
      img: image5,
      desc: "PARTH JI ELEVATION",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const left = slides[index];
  const middle = slides[(index + 1) % slides.length];
  const right = slides[(index + 2) % slides.length];

  return (
    <div
      className="collage2-hero"
      style={{ backgroundImage: `url(${middle.img})` }}
    >
      <div className="collage2-wrapper">

        {/* Heading Row */}
        <div className="collage2-heading-row">
          <h4 className="collage2-left-heading">
            Capability in Every Project
          </h4>
          <p className="collage2-right-heading">
            CADMAX provides comprehensive architectural, surveying, and planning
            services, supporting construction, infrastructure, industrial, and
            township projects with precise and reliable workflows.
          </p>
        </div>

        {/* Image Row */}
        <div className="collage2-row collage2-auto">
          {/* Left Image */}
          <div className="collage2-box collage2-small">
            <img src={left.img} alt="Left Collage" />
            <div className="collage2-descs">{left.desc}</div>
          </div>

          {/* Middle Image */}
          <div className="collage2-box collage2-big">
            <img src={middle.img} alt="Middle Collage" />
            <div className="collage2-desc">{middle.desc}</div>
          </div>

          {/* Right Image */}
          <div className="collage2-box collage2-small">
            <img src={right.img} alt="Right Collage" />
            <div className="collage2-descs">{right.desc}</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Collage2;
