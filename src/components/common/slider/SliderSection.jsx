import React, { useState, useEffect, useRef, useCallback } from "react";
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

  const next = useCallback(() => {
    setIndex(i => (i + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + images.length) % images.length);
  }, []);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    intervalRef.current = setInterval(next, 1500);
  }, [next, stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  return (
    <div
      className="work-slider-bg"
      style={{ backgroundImage: `url(${images[index].url})` }}
    >
      <h2 className="work-title">OUR WORK</h2>

      <div className="work-card">
        <img src={images[index].url} className="work-card-img" alt="slide" />
        <p className="work-card-text">{images[index].title}</p>
      </div>

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
