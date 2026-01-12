import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import "./Engineering.css";
import { Link } from "react-router-dom";

import heroBG from "../../../src/assets/Images/service-page-2/engineer-banner.jpg";
import overlapImg from "../../../src/assets/Images/service-page-2/survey-img.jpg";

import collage1 from "../../../src/assets/Images/service-page-2/main-gate.jpg";
import collage2 from "../../../src/assets/Images/service-page-2/road-network.jpg";
import collage3 from "../../../src/assets/Images/service-page-2/water-supply.jpg";
import collage4 from "../../../src/assets/Images/service-page-2/ELECTRICITY.jpg";
import collage5 from "../../../src/assets/Images/service-page-2/rainwater-harvesting.jpg";

const Engineering = () => {


  const collageImages = [
    { img: collage1, title: "MAINGATE AND BOUNDARY CONSTRUCTION" },
    { img: collage2, title: "ROAD NETWORK" },
    { img: collage3, title: "WATER SUPPLY" },
    { img: collage4, title: "ELECTRICITY" },
     { img: collage5, title: "SEWER AND RAIN WATER HARVESTING" }
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

        
        <Link to="/Services/maingate" className="collage-item item-1">
          <img src={collageImages[0].img} alt="" />
          <h2>{collageImages[0].title}</h2>
        </Link>

        
        <Link to="/Services/roadNetwork" className="collage-item item-2">
          <img src={collageImages[1].img} alt="" />
          <h2>{collageImages[1].title}</h2>
        </Link>

        
        <Link to="/Services/waterSupply" className="collage-item item-3">
          <img src={collageImages[2].img} alt="" />
          <h2>{collageImages[2].title}</h2>
        </Link>

        
        <Link to="/Services/electricity" className="collage-item item-4">
          <img src={collageImages[3].img} alt="" />
          <h2>{collageImages[3].title}</h2>
        </Link>

        <Link to="/Services/Sewer" className="collage-item item-4">
          <img src={collageImages[4].img} alt="" />
          <h2>{collageImages[4].title}</h2>
        </Link>

      </div>


      <Footer />
    </>
  );
};

export default Engineering;







// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../../api/axios";

// import Navbar from "../../components/Layout/Header/Navbar";
// import Footer from "../../components/Layout/Footer/Footer";
// import "./Engineering.css";

// const Engineering = () => {
//   const [hero, setHero] = useState(null);
//   const [overlap, setOverlap] = useState(null);
//   const [collage, setCollage] = useState([]);


//    const collageLinks = [
//     "/Services/maingate",
//     "/Services/roadNetwork",
//     "/Services/waterSupply",
//     "/Services/electricity",
//   ];

//   const loadData = async () => {
//     try {
//       const res = await API.get(
//         "/subcategories?service=engineering&status=true"
//       );

//       const data = res.data.data; // ⚠️ important

//       setHero(data.find((i) => i.sectionType === "hero"));
//       setOverlap(data.find((i) => i.sectionType === "overlap"));
//       setCollage(data.filter((i) => i.sectionType === "collage"));
//     } catch (err) {
//       console.error("ENGINEERING LOAD ERROR:", err);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       {/* HERO IMAGE (DYNAMIC) */}
//       {hero && (
//         <div
//           className="service1-hero"
//           style={{ backgroundImage: `url(${hero.image.url})` }}
//         />
//       )}

//       {/* STATIC TEXT */}
//       <div className="black-box">
//         <h2>Where imagination meets structure</h2>
//         <p>
//           Turning concepts into concrete reality, our engineering team works hand
//           in hand with architectural vision to design, plan, and build spaces
//           that are strong, functional, and timeless. Every detail reflects
//           precision, collaboration, and a commitment to quality that shapes
//           structures built to serve generations.
//         </p>
//       </div>

//       {/* OVERLAP IMAGE (DYNAMIC) */}
//       {overlap && (
//         <div className="overlap-img-box">
//           <img src={overlap.image.url} alt="" />
//         </div>
//       )}

//       {/* STATIC TEXT */}
//       <div className="flex-section">
//         <h2>What We Offer</h2>
//         <p>
//           An architectural and engineering company plays a vital role in planning
//           and designing essential infrastructure such as water supply systems,
//           road networks, and electricity distribution. Engineers in the company
//           analyze site conditions, safety standards, and community needs to
//           design reliable water supply systems that ensure clean and efficient
//           delivery. They also plan and develop road networks that support smooth
//           transportation, proper drainage, and long-term durability. In addition,
//           electrical engineers design and coordinate electricity layouts to
//           ensure safe, efficient, and sustainable power distribution. Together,
//           these services contribute to well-organized, functional, and
//           sustainable built environments.
//         </p>
//       </div>

//       {/* COLLAGE (DYNAMIC) */}
//       <div className="collage-wrapper">
//         {collage.map((item, index) => (
//           <Link
//             key={item._id}
//             to={collageLinks[index]}   // ✅ STATIC LINK
//             className={`collage-item item-${index + 1}`}
//           >
//             <img src={item.image.url} alt={item.title} />
//             <h2>{item.title}</h2>
//           </Link>
//         ))}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Engineering;
