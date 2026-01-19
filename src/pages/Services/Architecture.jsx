import React from 'react'
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import heroBG from "../../assets/Images/urbanmax/urbanmax-banner.jpg"
import img1 from "../../assets/Images/urbanmax/image-1.jpg"
import img2 from "../../assets/Images/urbanmax/image-2.jpg"
import img3 from "../../assets/Images/urbanmax/image-3.jpg"

const Architecture = () => {
     
  return (
    <>
    <Navbar />
    

 <div
  className="w-full h-[420px] bg-cover bg-center"
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





    <Footer />
    </>
  )
}

export default Architecture