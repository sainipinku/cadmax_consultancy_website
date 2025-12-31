import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import "./Service2.css";
import { Link } from "react-router-dom";

import heroBG from "../../../src/assets/Images/service-page-2/engineer-banner.jpg";
import overlapImg from "../../../src/assets/Images/service-page-2/survey-img.jpg";

import collage1 from "../../../src/assets/Images/service-page-2/service2-img2.png";
import collage2 from "../../../src/assets/Images/service-page-2/service2-img3.png";
import collage3 from "../../../src/assets/Images/service-page-2/service2-img4.png";
import collage4 from "../../../src/assets/Images/service-page-2/service2-img5.png";

const Service2 = () => {


  const collageImages = [
    { img: collage1, title: "MAINGATE AND BOUNDARY CONSTRUCTION" },
    { img: collage2, title: "ROAD NETWORK" },
    { img: collage3, title: "WATER SUPPLY" },
    { img: collage4, title: "ELECTRICITY" }
  ];

  return (
    <>
      <Navbar />

   
      <div
        className="service1-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      ></div>

      
      <div className="black-box">
        <h2> Where imagination meets structure</h2>
        <p>
         Turning concepts into concrete reality, our engineering team works hand in hand with architectural vision to design, plan, and build spaces that are strong,         functional, and timeless. Every detail reflects precision, collaboration, and a commitment to quality that shapes structures built to serve generations.
        </p>
      </div>

      
      <div className="overlap-img-box">
        <img src={overlapImg} alt="" />
      </div>

      
      <div className="flex-section">
        <h2>What We Offer</h2>
        <p>An architectural and engineering company plays a vital role in planning and designing essential infrastructure such as water supply systems, road networks, and electricity distribution. Engineers in the company analyze site conditions, safety standards, and community needs to design reliable water supply systems that ensure clean and efficient delivery. They also plan and develop road networks that support smooth transportation, proper drainage, and long-term durability. In addition, electrical engineers design and coordinate electricity layouts to ensure safe, efficient, and sustainable power distribution. Together, these services contribute to well-organized, functional, and sustainable built environments.</p>
      </div>

      
      <div className="collage-wrapper">

        
        <Link to="/Services/Service3" className="collage-item item-1">
          <img src={collageImages[0].img} alt="" />
          <h2>{collageImages[0].title}</h2>
        </Link>

        
        <Link to="/Services/Service3" className="collage-item item-2">
          <img src={collageImages[1].img} alt="" />
          <h2>{collageImages[1].title}</h2>
        </Link>

        
        <Link to="/Services/Service3" className="collage-item item-3">
          <img src={collageImages[2].img} alt="" />
          <h2>{collageImages[2].title}</h2>
        </Link>

        
        <Link to="/Services/Service3" className="collage-item item-4">
          <img src={collageImages[3].img} alt="" />
          <h2>{collageImages[3].title}</h2>
        </Link>

      </div>


      <Footer />
    </>
  );
};

export default Service2;







// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Layout/Header/Navbar";
// import Footer from "../../components/Layout/Footer/Footer";
// import "./Service2.css";
// import { Link } from "react-router-dom";
// import API from "../../api/axios";

// import heroBG from "../../../src/assets/Images/header/Header-bg-img.png";

// const Service2 = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchService2 = async () => {
//       try {
//         const res = await API.get("/services/service2");
//         setData(res.data);
//       } catch (error) {
//         console.error("Service2 fetch error", error);
//       }
//     };

//     fetchService2();
//   }, []);

//   if (!data) return null;

//   return (
//     <>
//       <Navbar />

//       {/* HERO */}
//       <div
//         className="service1-hero"
//         style={{ backgroundImage: `url(${heroBG})` }}
//       ></div>

//       {/* BLACK BOX */}
//       <div className="black-box">
//         <h2>{data.blackBox.title}</h2>
//         <p>{data.blackBox.description}</p>
//       </div>

//       {/* OVERLAP IMAGE */}
//       <div className="overlap-img-box">
//         <img
//           src={`http://localhost:5000${data.overlapImage}`}
//           alt=""
//         />
//       </div>

//       {/* FLEX TEXT */}
//       <div className="flex-section">
//         <h2>What We Offer</h2>
//         <p>
//           A focused set of engineering services that define how a site functions,
//           connects and operates.
//         </p>
//       </div>

//       {/* COLLAGE – REFERENCE IMAGE PART */}
//       <div className="collage-wrapper">
//         {data.collage.map((item, index) => (
//           <Link
//             key={item._id}
//             to="/Services/Service3"
//             className={`collage-item item-${index + 1}`}
//           >
//             <img
//               src={`http://localhost:5000${item.image}`}
//               alt={item.title}
//             />
//             <h2>{item.title}</h2>
//           </Link>
//         ))}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Service2;
