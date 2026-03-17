import { useRef, useState } from "react";
import "./Careerpath.css"
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer"
import { motion } from "framer-motion";


// import heroBGCareer from "../../../src/assets/Images/careerpath/HERO-BG.png";
import heroBGCareer from "../../../src/assets/Images/careerpath/banner-img.jpg";
import img1 from "../../../src/assets/Images/careerpath/development-img.jpg";
import img2 from "../../../src/assets/Images/careerpath/work-environment.jpg";
import img3 from "../../../src/assets/Images/careerpath/learning-and-development.jpeg"



// mamber image 

import m1 from "../../assets/Images/careerpath/member-1.jpg";
import m2 from "../../assets/Images/careerpath/member-2.jpg";
import m3 from "../../assets/Images/careerpath/member-3.jpg";
import m4 from "../../assets/Images/careerpath/member-4.jpg";
import m5 from "../../assets/Images/careerpath/member-5.jpg";
import m6 from "../../assets/Images/careerpath/member-6.jpg";
import m7 from "../../assets/Images/careerpath/member-7.jpg";
import m8 from "../../assets/Images/careerpath/member-8.jpg";
import m9 from "../../assets/Images/careerpath/member-9.jpg";
import m10 from "../../assets/Images/careerpath/member-10.jpg";
import m11 from "../../assets/Images/careerpath/member-11.jpg";




const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const members = [
 { img: m1, name: "HANUMAN SHARMA", role: "CHAIRMAN" },
 { img: m2, name: "KIRAN SHARMA", role: "DIRECTOR INTERIOR " },
 { img: m3, name: "RAMDAYAL SHARMA ", role: "MANAGER ADMIN" },
 { img: m4, name: "BABU LAL SHARMA ", role: "C.E.O " },
 { img: m5, name: "MUKESH SAINI", role: "PLANNING MANAGER" },
 { img: m6, name: "KUNDAN SHARMA ", role: "SURVEY MANAGER" },
 { img: m7, name: "NITESH SHARMA ", role: "ENGINEERING MANAGER" },
 { img: m8, name: "RICHHPAL SINGH ", role: "DRAWING MANAGER" },
 { img: m9, name: "RAMCHARAN SHARMA ", role: "ACCOUNTS MANAGER" },
 { img: m10, name: "RAKESH GUPTA ", role: "LEGAL ADVISIOR" },
 { img: m11, name: "JAGDISH MATHUR ", role: "LEGAL ADVISIOR" }
];


const CareerPath = () => {
  const sliderRef = useRef(null);
const [isDown, setIsDown] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);

const handleMouseDown = (e) => {
  setIsDown(true);
  setStartX(e.pageX - sliderRef.current.offsetLeft);
  setScrollLeft(sliderRef.current.scrollLeft);
};

const handleMouseLeave = () => setIsDown(false);
const handleMouseUp = () => setIsDown(false);

const handleMouseMove = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderRef.current.offsetLeft;
  const walk = (x - startX) * 2;
  sliderRef.current.scrollLeft = scrollLeft - walk;
};
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
  <div
  className="w-full h-[600px] xl:h-[650px] bg-cover bg-center flex items-center justify-center relative"
  style={{
    backgroundImage: `url(${heroBGCareer})`,
    filter: "brightness(1.8)", 
  }}
>


        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold tracking-wide">
          {/* Career Path at CADMAX */}
        </h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* SECTION 1 */}
        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="grid md:grid-cols-2 gap-10 items-center"
>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              1. Leadership & Teamwork
            </h2>
            <p className="text-gray-600 leading-relaxed">
             1.	Leadership - At Cadmax Consultancy, teamwork is our greatest strength. By combining diverse expertise, creative thinking, and coordinated collaboration, our team transforms ideas into well-planned, high-quality architectural solutions. Every project reflects our shared commitment to precision, efficiency, and excellence—proving that strong teamwork builds stronger designs and lasting success. We’re committed to creating an equitable      workplace. An inclusive environment improves our teams, our firm, and our community, while also enriching and challenging our thinking about design
            </p>
          </div>

         <motion.img
  src={img1}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="rounded-2xl h-auto shadow-lg"
/>

        </motion.div>

        
        {/* SECTION 2 */}
        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="grid md:grid-cols-2 gap-10 items-center"
>
    <motion.img
  src={img3}

  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="rounded-2xl h-auto shadow-lg"
/>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
             2. Learning & Development- 
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Learning & Development at Cadmax Consultancy is the driving force behind our creativity and innovation. We nurture a culture where ideas grow, skills evolve, and knowledge is constantly redefined. By investing in continuous learning, hands-on training, and the latest architectural tools and technologies, we empower our team to think beyond boundaries. This dedication to development allows us to craft intelligent, sustainable, and future-focused design solutions that add lasting value for our clients and the built environment.
            </p>
          </div>

     

        </motion.div>
        {/* SECTION 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              3. Work Environment
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Cadmax Consultancy provides a positive and inspiring work environment where creativity, collaboration, and professionalism thrive. We believe that a supportive workplace encourages innovation and excellence, allowing our team to perform at their best. Open communication, mutual respect, and teamwork form the core of our culture, while modern tools and well-structured processes ensure efficiency and growth. By fostering a healthy balance between learning and work, CADMAX Consultancy creates an environment where talent is valued, ideas are encouraged, and individuals grow along with the organization.
            </p>
          </div>


            <motion.img
  src={img2}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="rounded-2xl shadow-lg"
/>
        </motion.div>

      </div>

{/* out team */}


<div className="w-full py-20 bg-white overflow-hidden">

  <h2 className="text-center text-3xl font-bold mb-14">
    Our Team
  </h2>

  <div
    ref={sliderRef}
    className="flex gap-10 overflow-x-auto cursor-grab active:cursor-grabbing animate-scroll hover:[animation-play-state:paused]"
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
  >

    {[...members, ...members].map((member, index) => (
      <div
        key={index}
        className="w-[280px] bg-white rounded-xl overflow-hidden shadow-xl border group transition duration-500 hover:-translate-y-2"
      >

        <div className="h-[360px] overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="text-center py-4 px-3 bg-white">
          <h3 className="text-lg font-bold text-gray-800">
            {member.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {member.role}
          </p>
        </div>

      </div>
    ))}

  </div>

  </div>




      <Footer/>
    </>
  );
};

export default CareerPath;
