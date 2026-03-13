import React from "react";
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

import m1 from "../../assets/Images/careerpath/member-1.jpeg";
import m2 from "../../assets/Images/careerpath/member-2.jpeg";
import m3 from "../../assets/Images/careerpath/member-3.jpeg";
import m4 from "../../assets/Images/careerpath/member-4.jpeg";
// import m5 from "../../assets/Images/careerpath/member-5.jpeg";
import m6 from "../../assets/Images/careerpath/member-6.jpeg";
import m7 from "../../assets/Images/careerpath/member-7.jpeg";
import m8 from "../../assets/Images/careerpath/member-8.jpeg";




const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const members = [
 { img: m1, name: "name", role: "role" },
 { img: m2, name: "name", role: "role" },
 { img: m3, name: "name", role: "role" },
 { img: m4, name: "name", role: "role" },
//  { img: m5, name: "Neha Jain", role: "Site Engineer" },
 { img: m6, name: "name", role: "role" },
 { img: m7, name: "name", role: "role" },
 { img: m8, name: "name", role: "role" }
];
const CareerPath = () => {
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

  <div className="relative w-full overflow-hidden">

    <div className="flex gap-10 animate-scroll">

      {[...members, ...members].map((member, index) => (
        <div
          key={index}
          className="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-xl border group transition duration-500 hover:-translate-y-2"
        >

          {/* Image */}
          <div className="h-[360px] overflow-hidden">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          {/* Info */}
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
</div>



      <Footer/>
    </>
  );
};

export default CareerPath;
