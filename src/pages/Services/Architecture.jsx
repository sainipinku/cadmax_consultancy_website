import React from 'react'
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import heroBG from "../../assets/Images/urbanmax/banner-img.png"
import img1 from "../../assets/Images/urbanmax/image-1.jpg"
import img2 from "../../assets/Images/urbanmax/image-2.jpg"
import img3 from "../../assets/Images/urbanmax/image-3.jpg"
import img4 from "../../assets/Images/urbanmax/mahadev-market.jpg"
import img5 from "../../assets/Images/urbanmax/offer-img1.jpg"
import img6 from "../../assets/Images/urbanmax/offer-img2.jpg"
import img7 from "../../assets/Images/urbanmax/offer-img3.jpg"
import img8 from "../../assets/Images/urbanmax/offer-img4.jpg"




const Architecture = () => {
     
  return (
    <>
    <Navbar />
    

 <div
  className="w-full h-[500px] bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBG})` }}
></div>

    <div className="max-w-6xl mx-auto px-4 py-14">
      {/* SECTION HEADING */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Architectural Projects
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          A glimpse of our premium residential and commercial architecture
          designs crafted with precision and creativity.
        </p>
      </div>

      {/* COLLAGE GRID */}
      <div className="grid grid-rows-2 gap-4">

        {/* TOP BIG IMAGE */}
        <div className="relative w-full h-[260px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg group">
          <img
            src={img1}
            alt="Modern Villa"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          {/* TEXT OVERLAY */}
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-xl md:text-2xl font-semibold">
              URBAN PLANNING 
            </h3>
            
          </div>
        </div>

        {/* BOTTOM 2 IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* IMAGE 2 */}
          <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={img2}
              alt="Commercial Building"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold">
               ARCHITECHURAL
              </h3>
              
            </div>
          </div>

          {/* IMAGE 3 */}
          <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={img3}
              alt="Interior Design"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold">
                INTERIOR
              </h3>
              
            </div>
          </div>

        </div>
      </div>
    </div>
   <div className="relative pb-5 bg-gradient-to-b from-white to-gray-100">

  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-light tracking-wide text-gray-800 leading-snug">
      An architect who transforms the old into 
      <span className="block font-semibold text-gray-900 mt-2">
        timeless new designs
      </span>
    </h2>

    {/* Decorative Line */}
    <div className="w-24 h-[2px] bg-gray-900 mx-auto mt-6 mb-12"></div>

    {/* Image Card */}
    <div className="relative group overflow-hidden rounded-2xl shadow-2xl">

      <img 
        src={img4} 
        alt="mahadev market"
        className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>

    </div>

  </div>

</div>
<section className="relative py-24 ">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">

      <h1 className="text-3xl md:text-5xl font-light tracking-wide text-gray-900">
        WHAT WE OFFER
      </h1>

      <p className="mt-6 md:mt-0 text-sm md:text-base tracking-[3px] text-gray-500 uppercase">
        Residential • Commercial • Industrial Planning
      </p>

    </div>

    {/* UNIQUE COLLAGE */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">

      {/* Large Left Image */}
      <div className="relative md:col-span-2 md:row-span-2 group overflow-hidden rounded-2xl">

        <img
          src={img8}
          alt=""
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition duration-500"></div>

        {/* Text */}
        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-2xl md:text-3xl text-white font-light tracking-wide">
            Cadmax
          </h3>
        </div>
      </div>

      {/* Top Right */}
      <div className="relative group overflow-hidden rounded-2xl">

        <img
          src={img6}
          alt=""
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition duration-500"></div>

        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-lg md:text-xl text-white font-light tracking-wide">
            Turnkey Construction
          </h3>
        </div>
      </div>

      {/* Bottom Right */}
      <div className="relative group overflow-hidden rounded-2xl">

        <img
          src={img7}
          alt=""
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition duration-500"></div>

        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-lg md:text-xl text-white font-light tracking-wide">
            Renovation
          </h3>
        </div>
      </div>

      {/* Bottom Wide */}
      <div className="relative md:col-span-2 group overflow-hidden rounded-2xl">

        <img
          src={img5}
          alt=""
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition duration-500"></div>

        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-xl md:text-2xl text-white font-light tracking-wide">
            3D Elevation
          </h3>
        </div>
      </div>

    </div>

  </div>

</section>






    <Footer />
    </>
  )
}

export default Architecture