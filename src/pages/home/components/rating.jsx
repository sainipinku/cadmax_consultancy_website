import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./rating.css";
// import img1 from "../../../assets/Images/Other/img1.jpg"


const data = [
  {
    // img: img1,
    name: "— RAVI KUMAWAT ",
    desc: "A professional architectural practice with strong design expertise and excellent project coordination. Their commitment to quality, clear communication, and client satisfaction is evident in their work." ,
  Role :"SHREE RAM GROUP"
  },
  {
    // img: img1,
    name: "— MUKESH SHARMA ",
    desc: "We were highly satisfied with the firm’s design approach and attention to detail. The architects balanced creativity with practicality, delivering a solution that was both visually strong and highly functional. Their thoughtful planning and technical knowledge were evident at every stage of the project.",
    Role :" HOMELAND GROUP"
  },
  {
    // img: img1,
    name: "— SANWAR MAM ",
    desc: "Working with the cadmax group  architects was a positive experience. They listened carefully to our requirements, responded thoughtfully to feedback, and provided clear guidance at every stage. Their collaborative approach contributed greatly to the success of the project.",
    Role :" ASHIANA"
  },
  {
    // img: img1,
    name: "— CHARAN KHANGAROAT",
    desc: "The firm managed the project efficiently, maintaining agreed timelines and delivering high-quality documentation. Their reliability and organized workflow gave us confidence throughout the design and development process.",
    Role :" FS REALITY"
  },
  {
    // img: img1,
    name: "— Manish  ",
    desc: "CADMAX GROUP made our dream home a reality with their exceptional design and support. We were particularly impressed by their collaborative approach and willingness to listen to our feedback, making us feel like valued partners in the process.",
    Role :" KGK Group"
  },
  {

    // img: img1,
    name: "— Sandeep Sharma",
    desc: "We were particularly impressed by their collaborative approach and willingness to listen to our feedback, making us feel like valued partners in the process. Their thoughtful planning and technical knowledge were evident at every stage of the project." ,
 Role :"Udaygajraj Group"
  },


    {

    // img: img1,
    name: "— Ashish Kumar",
    desc: "The strength of our company lies in its people—professionals whose knowledge, discipline, and passion add distinction and prestige to every project we deliver." ,
 Role :"Ashish Group"
  },
    {

    // img: img1,
    name: "— Ram Chandra Yadav",
    desc: "Their team was professional, highly responsive, and guided us seamlessly through every stage of the project. We would not hesitate to recommend their services to anyone looking for a truly collaborative and talented architectural partner." ,
 Role :"Aryan Landmark"
  },
    {

    // img: img1,
    name: "— Abhishek Kumawat",
    desc: "We are absolutely delighted with the work of CADMAX CONSULTANCY They took our initial ideas and transformed them into a beautiful, functional design that exceeded our expectations." ,
 Role :"Mahima Group"
  },
    {

    // img: img1,
    name: "— Babu Lal  Kulariya",
    desc: "The firm proved to be a reliable and capable partner. They adhered to agreed timelines and budgets while maintaining a high standard of design and documentation. Their structured approach and attention to detail gave us confidence throughout the project." ,
 Role :"SHYAMASHISH GROUP"
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
              1000: { slidesPerView: 3 },
              600: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {data.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card">
                  <p className="testimonial-msg">{t.desc}</p>

                  <div className="testimonial-client">
                    {/* <img src={t.img} alt="" /> */}
                    <div>
                      <p className="client-name">{t.name}</p>
                      <p className="client-role">{t.Role}</p>
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
