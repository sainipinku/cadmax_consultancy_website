import React from 'react'
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import heroBG from "../../assets/Images/urbanmax/Infra-banner.jpg";
import img1 from "../../assets/Images/urbanmax/road-design.jpg";
import img2 from "../../assets/Images/urbanmax/sewar-image.jpeg";
import img3 from "../../assets/Images/urbanmax/water-supply.jpg";
import img4 from "../../assets/Images/urbanmax/rain-water.jpeg";
import img5 from "../../assets/Images/urbanmax/eletrical.jpg";



const Infrastructure = () => {
  return (
   <>
   <Navbar/>
    
   <div
  className="w-full h-[500px] bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBG})` }}
></div>
 <section className="py-12  md:py-15 bg-white">
  <div className="max-w-full mx-auto px-4 md:px-6">

    {/* Heading */}
   <div className="text-center mb-10 md:mb-15 overflow-hidden">
  <h1 className="text-3xl md:text-5xl font-light tracking-[6px] text-gray-900 rtl-animate">
    WHAT WE OFFER
  </h1>

  <div className="w-24 h-[2px] bg-gray-900 mx-auto mt-4 rtl-animate-delay"></div>
</div>


    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-2 md:gap-6 md:h-[550px]">

      {[
        { img: img1, title: "ROAD DESIGN", span: "md:col-span-3 md:row-span-2" },
        { img: img2, title: "SEWER NETWORK DESIGN", span: "md:col-span-6" },
        { img: img5, title: "ELECTRICAL", span: "md:col-span-3 md:row-span-2" },
        { img: img3, title: "WATER SUPPLY SYSTEM ", span: "md:col-span-3" },
        { img: img4, title: "RAIN WATER COLLECT DESIGN", span: "md:col-span-3" },
      ].map((item, index) => (
        <div
          key={index}
          className={`${item.span} relative rounded-xl overflow-hidden group cursor-pointer h-[260px] md:h-auto`}
        >

          {/* Image */}
          <img
            src={item.img}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/40 group-hover:via-black/20"></div>

          {/* Text */}
          <div className="absolute bottom-0 left-0 p-6 z-10">

            <div className="transition-all duration-500 group-hover:-translate-y-2">

              <h2 className="text-white text-sm md:text-lg font-semibold tracking-wide mb-2 drop-shadow-lg">
                {item.title}
              </h2>

              <div className="w-12 h-[2px] bg-white transition-all duration-500 group-hover:w-20"></div>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>



    <Footer/>
   </>
  )
}

export default Infrastructure