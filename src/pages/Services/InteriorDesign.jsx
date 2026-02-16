import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import heroBG from "../../assets/Images/urbanmax/interior-banner.jpg"
// import WorkSlider from "../../components/common/slider/ourworkSlider";
// import img1 from "../../assets/Images/urbanmax/interior-work1.jpg";
// import img2 from "../../assets/Images/urbanmax/interior-work2.jpg";
// import img3 from "../../assets/Images/urbanmax/interior-work3.jpg";
// import img4 from "../../assets/Images/urbanmax/interior-work4.jpg";
import img5 from "../../assets/Images/urbanmax/cadmax-consultancy-img.jpg";
import img6 from "../../assets/Images/urbanmax/cadmax-project-img.jpg";
import img7 from "../../assets/Images/urbanmax/dipendra-ji-goner.jpg";
import img8 from "../../assets/Images/urbanmax/abhishek-ji-farmHouse.jpg";





export const InteriorDesign = () => {
  return (
   <>
   <Navbar/>
   <div
  className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${heroBG})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Text */}
  <div className="relative z-10 text-center">
    <h1 className="text-white font-['Playfair_Display'] font-bold tracking-[3px] text-4xl md:text-6xl">
      INTERIOR DESIGN
    </h1>
  </div>
</div>



      <div className="service1-grid  slide-in">
        <Link
          to="/Services/Engineering"
          className="service1-card-1 delay-1"
        >
          <img src={img5} alt="service" />
          <div className="card-text">CADMAX CONSULTANCY</div>
        </Link>

        <Link
          to="/Services/Architecture"
          className="service1-card-1 delay-2"
        >
          <img src={img6} alt="service" />
          <div className="card-text">CADMAX PROJECTS</div>
        </Link>

        <Link
          to="/Services/InteriorDesign"
          className="service1-card-1 delay-3"
        >
          <img src={img7} alt="service" />
          <div className="card-text">DIPENDRA JI GONER SITE</div>
        </Link>

         <Link
          to="/Services/infrastructure"
          className="service1-card-1 delay-3"
        >
          <img src={img8} alt="service" />
          <div className="card-text">ABHISHEK JI FARM HOUSE</div>
        </Link>

      </div>


      {/* <div className='py-10'>
 <WorkSlider
      prefix="electricity"
      slides={[
       
  { url: img1, title: "INDUSTRIAL POWER NETWORK " },
  { url: img2, title: "POWER SUBSTATION PROJECT" },
  { url: img3, title: "ELECTRICAL GRID INFRASTRUCTURE" },
  { url: img4, title: "ELECTRICITY DISTRIBUTION SYSTEM" },
  


      ]}
    />
</div> */}
    
   
   <Footer/>
   
   </>
  )
}

export default InteriorDesign;