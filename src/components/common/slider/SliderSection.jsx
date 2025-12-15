import React, { useState, useEffect, useRef } from "react";
import "./SliderSection.css";

import img1 from '../../../assets/Images/service-page-3/slider-img1.png';
import img2 from '../../../assets/Images/service-page-3/slider-img2.jpg';
import img3 from '../../../assets/Images/service-page-3/slider-img3.jpg';

const images = [
  { url: img1, title: "MODERN MINIMALIST APARTMENT – INDRANAGAR" },
  { url: img2, title: "LUXURY VILLA INTERIORS – WHITEFIELD" },
  { url: img3, title: "CONTEMPORARY OFFICE DESIGN – KORAMANGALA" }
];

const WorkSlider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(next, 1500);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <div
      className="work-slider-bg"
      style={{ backgroundImage: `url(${images[index].url})` }}
    >
      <h2 className="work-title">OUR WORK</h2>

      {/* CENTER CARD */}
      <div className="work-card">
        <img src={images[index].url} className="work-card-img" alt="slide" />
        <p className="work-card-text">{images[index].title}</p>
      </div>

      {/* ARROWS */}
      <button
        className="arrow left"
        onClick={prev}
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        ❮
      </button>

      <button
        className="arrow right"
        onClick={next}
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default WorkSlider;
