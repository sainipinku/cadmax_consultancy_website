import React from "react";
import Slider from "react-slick";
import "./rating.css";   // <-- new css file name

const data = [
  {
    msg: "Reliable, fast and accurate. CADMAX resolves field issues without delay and maintains tight control over survey accuracy. They understand engineering intent and deliver data that supports correct execution.",
    img: "/images/user1.jpg",
    name: "— N. Ganpathy Subramaniam ",
    role: "CEO"
  },
  {
    msg: "The level of dedication and professionalism exhibited by the CADMAX team is unmatched. Their insights have been pivotal in streamlining our projects and enhancing overall efficiency.",
    img: "/images/user2.jpg",
    name: "— A. Stevens ",
    role: "Project Manager"
  },
  {
    msg: "With CADMAX's innovative solutions, we have significantly reduced our turnaround time for critical projects. Their expertise is a game-changer in our workflow.",
    img: "/images/user3.jpg",
    name: "— L. Johnson",
    role: "Operations Director"
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="review-bg">
      <div className="review-wrapper">

        <h2 className="review-title">Proof of Performance</h2>
        <p className="review-subtitle">
         Each discipline is handled by teams trained to convert field conditions into design-ready data.
        </p>

        <Slider {...settings}>
          {data.map((t, i) => (
            <div key={i}>
              <div className="review-card">
                <p className="review-msg">{t.msg}</p>

                <div className="review-client">
                  <img src={t.img} alt="" />
                  <div>
                    <h4 className="review-name">{t.name}</h4>
                    <p className="review-role">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
      </div>
    </div>
  );
};

export default Testimonial;
