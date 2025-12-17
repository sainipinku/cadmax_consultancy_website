import React, { useEffect, useState, useRef } from "react";
import "./company.css";

// import img1 from "../../../assets/Images/company logo/image 1.png";
// import img2 from "../../../assets/Images/company logo/image 2.png";
// import img3 from "../../../assets/Images/company logo/image 3.png";
// import img4 from "../../../assets/Images/company logo/image 4.png";
import img5 from "../../../assets/Images/company logo/ANUKAMPA LOGO.jpg";
import img6 from "../../../assets/Images/company logo/FS REALITY COMPANY LOGO.jpg";
import img7 from "../../../assets/Images/company logo/HG INFRA.jpg";
import img8 from "../../../assets/Images/company logo/HOMELAND GROUP LOGO.jpg";
import img9 from "../../../assets/Images/company logo/JAIPUR DEVELOPMENT AUTHORITY LOGO.jpg";
import img10 from "../../../assets/Images/company logo/JECRC FOUNDATION LOGO.png";
import img11 from "../../../assets/Images/company logo/Shriram-Group-Logo.png";
import img12 from "../../../assets/Images/company logo/UDAY GAJRAJ logo.jpg";
import img13 from "../../../assets/Images/company logo/chiripal-logo.png";
import img14 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.21 AM.jpeg";
import img15 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.22 AM.jpeg";
import img16 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.23 AM (1).jpeg";
import img17 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.23 AM.jpeg";
import img18 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.24 AM (1).jpeg";
import img19 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.24 AM.jpeg";
import img20 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.25 AM (1).jpeg";
import img21 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.25 AM.jpeg";
import img22 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.26 AM.jpeg";
import img23 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.27 AM (1).jpeg";
import img24 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.27 AM.jpeg";
import img25 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.28 AM (1).jpeg";
import img26 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.28 AM.jpeg";
import img27 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.29 AM (1).jpeg";
import img28 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.29 AM.jpeg";
import img29 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.30 AM (1).jpeg";
import img30 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.30 AM (2).jpeg";
import img31 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.30 AM.jpeg";
import img32 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.31 AM (1).jpeg";
import img33 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.31 AM (2).jpeg";
import img34 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.31 AM.jpeg";
import img35 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.32 AM (1).jpeg";
import img36 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.32 AM.jpeg";
import img37 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.33 AM (1).jpeg";
import img38 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.33 AM (2).jpeg";
import img39 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.33 AM.jpeg";
import img40 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.34 AM (1).jpeg";
import img41 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.34 AM.jpeg";
import img42 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.35 AM (1).jpeg";
import img43 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.35 AM.jpeg";
import img44 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.36 AM (1).jpeg";
import img45 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.36 AM (2).jpeg";
import img46 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.36 AM.jpeg";
import img47 from "../../../assets/Images/company logo/WhatsApp Image 2025-12-17 at 11.35.37 AM.jpeg";




const images = [img5, img6, img7, img8, img9, img10, img11, img12 ,img13 ,img14 ,img15 ,img16 ,img17 , img18  ,img19 , img20 , img21 ,img22 , img23 , img24 ,img25 ,img26 , img27 ,img28 , img29 , img30 ,img31 ,img32 ,img33 ,img34 , img35 ,img36 ,img37 , img38 , img39 , img40 , img41 , img42 , img43 , img44 , img45 , img46 , img47     ];

const CompanyShowcase = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [centerIndex, setCenterIndex] = useState(1);

  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  // const prevSlide = () => {
  //   setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  // };

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

  /* ⭐⭐⭐ AUTO SLIDER — ONLY NEW CODE ⭐⭐⭐ */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500); // 2.5 sec

    return () => clearInterval(interval);
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

      {/* 3 IMAGE SLIDER */}
      <div className="company-slider-wrapper">

        {/* <h1 className="nav-btn left" onClick={prevSlide}>←</h1> */}

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

        {/* <h1 className="nav-btn right" onClick={nextSlide}>→</h1> */}
      </div>

    </div>
  );
};

export default CompanyShowcase;
