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

  const leftImg = images[index];
  const middleImg = images[(index + 1) % 3];
  const rightImg = images[(index + 2) % 3];

  return (
    <div className="collage2-hero">
      <div className="collage2-wrapper">

        <div className="collage2-heading-row">
          <h4 className="collage2-left-heading">Work That Demonstrates Capability</h4>
          <p className="collage2-right-heading">
            Each discipline is handled by teams trained to convert field conditions into design-ready data.
          </p>
        </div>

        <div className="collage2-row collage2-auto">
          <div className="collage2-box collage2-small collage2-left collage2-swap">
            <img src={leftImg} alt="Left Collage" />
          </div>

          <div className="collage2-box collage2-big collage2-middle collage2-swap">
            <img src={middleImg} alt="Middle Collage" />
          </div>

          <div className="collage2-box collage2-small collage2-right collage2-swap">
            <img src={rightImg} alt="Right Collage" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Collage2;
