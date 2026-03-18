import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import { Link } from "react-router-dom";

import heroBG from "../../../src/assets/Images/service-page-1/service-banner.jpg";
import img1 from "../../assets/Images/service-page-1/urban-plan.jpg";
import img2 from "../../assets/Images/urbanmax/mahadev-market.jpg";
import img3 from "../../assets/Images/service-page-1/interior-img.jpeg";
import img4 from "../../assets/Images/service-page-1/infastructure-img.jpeg";

const Service1 = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBG})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-3xl md:text-5xl font-bold tracking-[2px]">
            Designing Dreams Building Reality
          </h1>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="w-full max-w-[1400px] mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* CARD 1 */}
        <Link
          to="/Services/Engineering"
          className="group relative h-[400px] overflow-hidden"
        >
          <img
            src={img1}
            alt="service"
            className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300"></div>

         <div className="absolute bottom-4 left-4 text-white font-bold text-lg z-10 uppercase tracking-wider">
            Urban Planning
          </div>
        </Link>

        {/* CARD 2 */}
        <Link
          to="/Services/Architecture"
          className="group relative h-[400px] overflow-hidden"
        >
          <img
            src={img2}
            alt="service"
            className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300"></div>

          <div className="absolute bottom-4 left-4 text-white font-bold text-lg z-10 uppercase tracking-wider">
            Architecture
          </div>
        </Link>

        {/* CARD 3 */}
        <Link
          to="/Services/InteriorDesign"
          className="group relative h-[400px] overflow-hidden"
        >
          <img
            src={img3}
            alt="service"
            className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300"></div>

          <div className="absolute bottom-4 left-4 text-white font-bold text-lg z-10 uppercase tracking-wider">
            Interior Designing
          </div>
        </Link>

        {/* CARD 4 */}
        <Link
          to="/Services/infrastructure"
          className="group relative h-[400px] overflow-hidden"
        >
          <img
            src={img4}
            alt="service"
            className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300"></div>

          <div className="absolute bottom-4 left-4 text-white font-bold text-lg z-10 uppercase tracking-wider">
            Infrastructure
          </div>
        </Link>

      </div>

      <Footer />
    </>
  );
};

export default Service1;