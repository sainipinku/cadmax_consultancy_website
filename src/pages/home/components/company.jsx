import React, { useEffect, useState, useRef } from "react";
import "./company.css";

import img1 from "../../../assets/Images/company logo/image 1.png";
import img2 from "../../../assets/Images/company logo/image 2.png";
import img3 from "../../../assets/Images/company logo/image 3.png";
import img4 from "../../../assets/Images/company logo/image 4.png";

const CompanyShowcase = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // reset first (force restart)
            setVisible(false);
            setTimeout(() => setVisible(true), 50);
          } else {
            // when its out of screen = reset
            setVisible(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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

      {/* LOGO ROW */}
      <div className="company-logo-row">
        <div className="company-logo-box"><img src={img1} alt="" /></div>
        <div className="company-logo-box"><img src={img2} alt="" /></div>
        <div className="company-logo-box"><img src={img3} alt="" /></div>
        <div className="company-logo-box"><img src={img4} alt="" /></div>
      </div>

    </div>
  );
};

export default CompanyShowcase;
