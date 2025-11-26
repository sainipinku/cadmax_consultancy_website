import React, { useEffect, useState } from "react";
import "./collage.css";

import image1 from "../../../assets/Images/slide-image/1st-img.png";
import image2 from "../../../assets/Images/slide-image/middle-img.png";
import image3 from "../../../assets/Images/slide-image/3rd-img.png";

const Collage2 = () => {
  const images = [image1, image2, image3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Left, Middle, Right arrangement
  const leftImg = images[index];
  const middleImg = images[(index + 1) % 3];
  const rightImg = images[(index + 2) % 3];

  return (
    <div className="hero-fluid">
      <div className="content-wrapper">

        <div className="heading-row">
          <h4 className="left-heading">Work That Demonstrates Capability</h4>
          <p className="right-heading">
            Each discipline is handled by teams trained to convert field conditions into design-ready data.
          </p>
        </div>

        <div className="image-row auto-rotate">
          <div className="img-box small left swap">
            <img src={leftImg} alt="Left Collage" />
          </div>

          <div className="img-box big middle swap">
            <img src={middleImg} alt="Middle Collage" />
          </div>

          <div className="img-box small right swap">
            <img src={rightImg} alt="Right Collage" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Collage2;
