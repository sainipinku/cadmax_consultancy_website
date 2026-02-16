import React from 'react'
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import heroBG from "../../assets/Images/urbanmax/interior-banner.jpg"
import WorkSlider from "../../components/common/slider/ourworkSlider";
import img1 from "../../assets/Images/urbanmax/interior-work1.jpg";
import img2 from "../../assets/Images/urbanmax/interior-work2.jpg";
import img3 from "../../assets/Images/urbanmax/interior-work3.jpg";
import img4 from "../../assets/Images/urbanmax/interior-work4.jpg";
import img5 from "../../assets/Images/urbanmax/cadmax-consultancy-img.jpg";
import img6 from "../../assets/Images/urbanmax/cadmax-project-img.jpg";
import img7 from "../../assets/Images/urbanmax/dipendra-ji-goner.jpg";
import img8 from "../../assets/Images/urbanmax/abhishek-ji-farmHouse.jpg";





export const InteriorDesign = () => {
  return (
   <>
   <Navbar/>
   <div
  className="w-full h-[500px] bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBG})` }}
></div>


<section className="relative pt-5  ">

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
          src={img5}
          alt=""
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition duration-500"></div>

        {/* Text */}
        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-2xl md:text-3xl text-white font-light tracking-wide">
            CADMAX CONSULTANCY
          </h3>
        </div>
      </div>

      {/* Top Right */}
      <div className="relative group overflow-hidden rounded-2xl">

        <img
          src={img7}
          alt=""
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition duration-500"></div>

        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-lg md:text-xl text-white font-light tracking-wide">
           DIPENDRA JI GONER SITE
          </h3>
        </div>
      </div>

      {/* Bottom Right */}
      <div className="relative group overflow-hidden rounded-2xl">

        <img
          src={img8}
          alt=""
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition duration-500"></div>

        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-lg md:text-xl text-white font-light tracking-wide">
            ABHISHEK JI FARM HOUSE
          </h3>
        </div>
      </div>

      {/* Bottom Wide */}
      <div className="relative md:col-span-2 group overflow-hidden rounded-2xl">

        <img
          src={img6}
          alt=""
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition duration-500"></div>

        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-xl md:text-2xl text-white font-light tracking-wide">
           CADMAX PROJECTS
          </h3>
        </div>
      </div>

    </div>
     </div>
     </section>


      <div className='py-10'>
 <WorkSlider
      prefix="electricity"
      slides={[
       
  { url: img1, title: "INDUSTRIAL POWER NETWORK " },
  { url: img2, title: "POWER SUBSTATION PROJECT" },
  { url: img3, title: "ELECTRICAL GRID INFRASTRUCTURE" },
  { url: img4, title: "ELECTRICITY DISTRIBUTION SYSTEM" },
  


      ]}
    />
</div>
    
   
   <Footer/>
   
   </>
  )
}

export default InteriorDesign;