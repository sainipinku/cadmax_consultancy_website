import React from 'react'
import './Service3.css';
import heroBG from "../../../src/assets/Images/header/Header-bg-img.png";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import WorkSlider from '../../components/common/slider/SliderSection';
import img1 from "../../../src/assets/Images/service-page-3/collage-img.png";
const Service3 = () => {
  return (
    <>
      <Navbar />
      
      <div
        className="service1-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      ></div>

      <div className="collage-img">
        <div className="img-box">
          <img src={img1} alt="" />
          <p>Maingate and boundary <br /> construction</p>
        </div>
        <div className="img-box">
          <img src={img1} alt="" />
          <p>Road network</p>
        </div>

        <div className="img-box">
          <img src={img1} alt="" />
          <p>Water supply</p>
        </div>

        <div className="img-box">
          <img src={img1} alt="" />
          <p>Electricity</p>
        </div>


      </div>
      <WorkSlider />

      <Footer />
    </>
  )
}

export default Service3;












// import React, { useEffect, useState } from "react";
// import "./Service3.css";
// import heroBG from "../../../src/assets/Images/header/Header-bg-img.png";
// import Navbar from "../../components/Layout/Header/Navbar";
// import Footer from "../../components/Layout/Footer/Footer";
// import WorkSlider from "../../components/common/slider/SliderSection";
// import API from "../../api/axios";

// const Service3 = () => {
//   const [collage, setCollage] = useState([]);

//   useEffect(() => {
//     const fetchService3 = async () => {
//       try {
//         const res = await API.get("/services/service3");
//         setCollage(res.data.collage);
//       } catch (error) {
//         console.error("Service3 fetch error", error);
//       }
//     };

//     fetchService3();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       {/* HERO */}
//       <div
//         className="service1-hero"
//         style={{ backgroundImage: `url(${heroBG})` }}
//       ></div>

//       {/* COLLAGE SECTION */}
//       <div className="collage-img">
//         {collage.map((item) => (
//           <div className="img-box" key={item._id}>
//             <img
//               src={`http://localhost:5000${item.image}`}
//               alt={item.title}
//             />
//             <p>
//               {item.title.split(" ").slice(0, 3).join(" ")}
//               <br />
//               {item.title.split(" ").slice(3).join(" ")}
//             </p>
//           </div>
//         ))}
//       </div>

//       <WorkSlider /> 

//       <Footer />
//     </>
//   );
// };

// export default Service3;
