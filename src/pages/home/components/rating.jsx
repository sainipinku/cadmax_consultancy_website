import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./rating.css";



const data = [
  {
    img: "/images/profile1.jpg",
    name: "— N. Ganpathy Subramaniam, CEO",
    desc: "Reliable, fast and accurate. CADMAX resolves field issues without delay and maintains tight control over survey accuracy. They understand engineering intent and deliver data that supports correct execution.CADMAX delivers precise surveying and reliable engineering support, ensuring every project runs smoothly with zero delays and trusted results."
  },
    {
    img: "/images/profile2.jpg",
    name: "— A. Stevens, Project Manager",
    desc:"“The level of dedication and professionalism exhibited by the CADMAX team is unmatched. Their insights have been pivotal in streamlining our projects and enhancing overall efficiency.CADMAX specializes in detailed surveying, fast field solutions, and quality execution, helping engineers maintain accuracy, save time, and build confidently.”"
  },
  {
    img: "/images/profile3.jpg",
    name: "— L. Johnson, Operations Director",
   desc:"“With CADMAX's innovative solutions, we have significantly reduced our turnaround time for critical projects. Their expertise is a game-changer in our workflow.CADMAX provides reliable surveying services, sharp data accuracy, professional execution, and quick response, ensuring seamless project workflow without errors or unnecessary delays.”"
  },
{
    img: "/images/profile1.jpg",
    name: "— N. Ganpathy Subramaniam, CEO",
 desc: "Reliable, fast and accurate. CADMAX resolves field issues without delay and maintains tight control over survey accuracy. They understand engineering intent and deliver data that supports correct execution.CADMAX delivers precise surveying and reliable engineering support, ensuring every project runs smoothly with zero delays and trusted results."
  },
  {
    img: "/images/profile3.jpg",
    name: "— L. Johnson, Operations Director",
      desc:"“The level of dedication and professionalism exhibited by the CADMAX team is unmatched. Their insights have been pivotal in streamlining our projects and enhancing overall efficiency.CADMAX specializes in detailed surveying, fast field solutions, and quality execution, helping engineers maintain accuracy, save time, and build confidently.”"
   },
    {
    img: "/images/profile3.jpg",
    name: "— L. Johnson, Operations Director",
   desc:"“With CADMAX's innovative solutions, we have significantly reduced our turnaround time for critical projects. Their expertise is a game-changer in our workflow.CADMAX provides reliable surveying services, sharp data accuracy, professional execution, and quick response, ensuring seamless project workflow without errors or unnecessary delays.”"
  },
];
const Testimonial = () => {
  return (
    <div className="testimonial-bg">
      <div className="testimonial-wrapper">
        <h2 className="testimonial-title">Proof of Performance</h2>
        <p className="testimonial-subtitle">
          Each discipline is handled by teams trained to convert field conditions into design-ready data.
        </p>

        <div className="testimonial-slider-container">
          {/* LEFT BUTTON */}
          <div className="swiper-button-prev custom-prev"></div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={25}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              900: { slidesPerView: 3 },
              600: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {data.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card">
                  <p className="testimonial-msg">{t.desc}</p>

                  <div className="testimonial-client">
                    <img src={t.img} alt="" />
                    <div>
                      <p className="client-name">{t.name}</p>
                      <p className="client-role">Client</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT BUTTON */}
          <div className="swiper-button-next custom-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
