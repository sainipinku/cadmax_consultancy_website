import React from 'react'
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import heroBG from "../../assets/Images/urbanmax/interior-banner.jpg"
import WorkSlider from "../../components/common/slider/ourworkSlider";
import img1 from "../../assets/Images/urbanmax/interior-work1.jpg";
import img2 from "../../assets/Images/urbanmax/interior-work2.jpg";
import img3 from "../../assets/Images/urbanmax/interior-work3.jpg";
import img4 from "../../assets/Images/urbanmax/interior-work4.jpg";


export const InteriorDesign = () => {
  return (
   <>
   <Navbar/>
   <div
  className="w-full h-[500px] bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBG})` }}
></div>

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