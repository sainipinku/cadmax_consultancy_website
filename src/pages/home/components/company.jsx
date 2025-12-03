import React, { useEffect, useState, useRef } from "react";
import "./company.css";

import img1 from "../../../assets/Images/company logo/image 1.png";
import img2 from "../../../assets/Images/company logo/image 2.png";
import img3 from "../../../assets/Images/company logo/image 3.png";
import img4 from "../../../assets/Images/company logo/image 4.png";

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

const CompanyShowcase = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [centerIndex, setCenterIndex] = useState(1);

  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(false);
            setTimeout(() => setVisible(true), 50);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="company-fluid">

      {/* HEADINGS */}
      <div
        className={`company-heading-row ${visible ? "visible" : ""}`}
        ref={sectionRef}
      >
        <h2 className="company-left-heading slide-text">
          Aligned Technology Partners
        </h2>

        <h3 className="company-right-heading slide-text">
          Each discipline is handled by teams trained to convert field conditions into design-ready data.
        </h3>
      </div>

      {/* ===========================
          UPDATED 3 IMAGE SLIDER
      ============================ */}
      <div className="company-slider-wrapper">

        <h1 className="nav-btn left" onClick={prevSlide}>←</h1>

        <div className="company-slider">
          {images.map((img, index) => {
            let positionClass = "";

            if (index === centerIndex) {
              positionClass = "center-img";
            } else if (index === (centerIndex - 1 + images.length) % images.length) {
              positionClass = "left-img";
            } else if (index === (centerIndex + 1) % images.length) {
              positionClass = "right-img";
            } else {
              positionClass = "hidden-img";
            }

            return (
              <div
                key={index}
                className={`company-slide-item ${positionClass}`}
                onClick={() => setCenterIndex(index)}
              >
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>

        <h1 className="nav-btn right" onClick={nextSlide}>→</h1>
      </div>

    </div>
  );
};

export default CompanyShowcase;
