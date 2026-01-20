import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer"
import { motion } from "framer-motion";


import heroBGCareer from "../../../src/assets/Images/careerpath/HERO-BG.png";
import img1 from "../../../src/assets/Images/careerpath/development-img.jpg";
import img2 from "../../../src/assets/Images/careerpath/environment-img.jpg";
import img3 from "../../../src/assets/Images/careerpath/learning-and-development.jpeg"


const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

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
             1.	Leadership - At CADMAX Consultancy, teamwork is our greatest strength. By combining diverse expertise, creative thinking, and coordinated collaboration, our team transforms ideas into well-planned, high-quality architectural solutions. Every project reflects our shared commitment to precision, efficiency, and excellence—proving that strong teamwork builds stronger designs and lasting success. We’re committed to creating an equitable      workplace. An inclusive environment improves our teams, our firm, and our community, while also enriching and challenging our thinking about design
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
            Learning & Development at CADMAX Consultancy is the driving force behind our creativity and innovation. We nurture a culture where ideas grow, skills evolve, and knowledge is constantly redefined. By investing in continuous learning, hands-on training, and the latest architectural tools and technologies, we empower our team to think beyond boundaries. This dedication to development allows us to craft intelligent, sustainable, and future-focused design solutions that add lasting value for our clients and the built environment.
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
            CADMAX Consultancy provides a positive and inspiring work environment where creativity, collaboration, and professionalism thrive. We believe that a supportive workplace encourages innovation and excellence, allowing our team to perform at their best. Open communication, mutual respect, and teamwork form the core of our culture, while modern tools and well-structured processes ensure efficiency and growth. By fostering a healthy balance between learning and work, CADMAX Consultancy creates an environment where talent is valued, ideas are encouraged, and individuals grow along with the organization.
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
      <Footer/>
    </>
  );
};

export default CareerPath;
