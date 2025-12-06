import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./rating.css";

export default function SimpleSlider() {
  const data = [
    {
      name: "— N. Ganpathy Subramaniam  ",
      role: "CEO",
      review:
        "Reliable, fast and accurate. CADMAX resolves field issues without delay and maintains tight control over survey accuracy. They understand engineering intent and deliver data that supports correct execution.",
     
    
      stars: 5,
      // img: "https://via.placeholder.com/90",
    },
    {
      name: "— A. Stevens ",
      role: "Project Manager",
      review:
        "“The level of dedication and professionalism exhibited by the CADMAX team is unmatched. Their insights have been pivotal in streamlining our projects and enhancing overall efficiency.”",
      
     
      stars: 5,
      // img: "https://via.placeholder.com/90",
    },
     {
      name: "— L. Johnson ",
      role: "Operations Director",
      review:
        "“With CADMAX's innovative solutions, we have significantly reduced our turnaround time for critical projects. Their expertise is a game-changer in our workflow.”",
      stars: 5,
      // img: "https://via.placeholder.com/90",
    },
  ];
var settings = {
  dots: true,
  infinite: true,
  speed: 600,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,

  // 👇 Desktop center show side cards
  centerMode: true,
  centerPadding: "160px",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
        arrows: true,
      },
    },
  ],
};



;

  return (
    <div className="slider-bg">
      <div className="slider-container">
          <div className="slider-header">
        <h4 className="header-title">Proof of Performance</h4>
        <p className="header-sub">Each discipline is handled by teams trained to convert field conditions into design-ready data.</p>
      </div>
        <Slider {...settings}>
  {data.map((d, i) => (
  <div key={i} className="slide-gap">
    <div className="review-card">

      <div className="left-box">
        <h3 className="name">{d.name}</h3>
        <p className="role">{d.role}</p>
        <div className="stars">
          {[...Array(d.stars)].map((_, s) => (
            <span key={s}>⭐</span>
          ))}
        </div>
      </div>

      <div className="right-box">
        <p className="quote">{d.review}</p>
        <hr className="divider" />
        <p className="summary">{d.summary}</p>
      </div>

    </div>
  </div>
))}

</Slider>

      </div>
    </div>
  );
}
