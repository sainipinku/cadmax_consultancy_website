import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer"
import { motion } from "framer-motion";


import heroBGCareer from "../../../src/assets/Images/careerpath/HERO-BG.png";
import img1 from "../../../src/assets/Images/careerpath/development-img.jpg";
import img2 from "../../../src/assets/Images/careerpath/environment-img.jpg";
import img3 from "../../../src/assets/Images/careerpath/mid-img.jpeg"


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
  style={{ backgroundImage: `url(${heroBGCareer})` }}
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
            “We encourage a culture of learning where our team continuously develops new skills, explores fresh ideas, and grows together. This commitment to development strengthens both our people and our projects.”
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
             A supportive Managing Director and a positive work culture make this company a place where teamwork, learning, and mutual respect are valued. The environment motivates employees to deliver their best work every day.”.
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
