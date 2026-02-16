import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import "./Services.css";
import { Link } from "react-router-dom";

import heroBG from "../../../src/assets/Images/service-page-1/service-banner.jpg";
import img1 from "../../assets/Images/service-page-1/engineer-img.jpeg";
import img2 from "../../assets/Images/service-page-1/service-architech-front.jpeg";
import img3 from "../../assets/Images/service-page-1/interior-img.jpeg";
import img4 from "../../assets/Images/service-page-1/infastructure-img.jpeg";

const Service1 = () => {
  return (
    <>
      <Navbar />

      <div
  className="service1-hero"
  style={{ backgroundImage: `url(${heroBG})` }}
>
  <div className="hero-overlay text-white">
    <h1>Designing Dreams Building Reality</h1>
  </div>
</div>


      <div className="service1-grid slide-in">
        <Link
          to="/Services/Engineering"
          className="service1-card-1 delay-1"
        >
          <img src={img1} alt="service" />
          <div className="card-text">engineering</div>
        </Link>

        <Link
          to="/Services/Architecture"
          className="service1-card-1 delay-2"
        >
          <img src={img2} alt="service" />
          <div className="card-text">architectural</div>
        </Link>

        <Link
          to="/Services/InteriorDesign"
          className="service1-card-1 delay-3"
        >
          <img src={img3} alt="service" />
          <div className="card-text">INTERIOR DESIGNING</div>
        </Link>

         <Link
          to="/Services/infrastructure"
          className="service1-card-1 delay-3"
        >
          <img src={img4} alt="service" />
          <div className="card-text">infrastructure</div>
        </Link>

      </div>

      <Footer />
    </>
  );
};

export default Service1;




  //  dynamic page here ====>  //


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Layout/Header/Navbar";
// import Footer from "../../components/Layout/Footer/Footer";
// import API from "../../api/axios";

// import heroBG from "../../../src/assets/Images/service-page-1/service-banner.jpg";

// const Service1 = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await API.get("/categories");

//         // ✅ SIRF PEHLE 3 CATEGORIES
//         setCategories(res.data.slice(0, 3));
//       } catch (error) {
//         console.error("Failed to load services", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       {/* HERO */}
//       <div
//         className="w-full h-[400px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroBG})` }}
//       />

//       {/* GRID */}
//       <div className="max-w-[1300px] mx-auto px-5 py-12">
//         {loading ? (
//           <p className="text-center text-lg">Loading services...</p>
//         ) : (
//           <div className="flex justify-between gap-6">

//             {categories.map((item, index) => (
//               <Link
//                 key={item._id}
//     to={
//       item.slug === "engineering"
//         ? "/services/engineering"
//         : "#"
//     }
//                 className="group relative w-full 
//                            md:w-[32%] 
//                            h-[420px] 
//                            overflow-hidden rounded-lg 
//                            animate-slideIn"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 {/* IMAGE */}
//                 <img
//                   src={item.image?.url}
//                   alt={item.name}
//                   className="w-full h-full object-cover transition-transform
//                              duration-500 group-hover:scale-110"
//                 />

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-black/45
//                                 group-hover:bg-black/10 transition-all duration-300" />

//                 {/* TEXT */}
//                 <div className="absolute inset-0 flex items-center justify-center z-10">
//                   <h2 className="text-white text-2xl md:text-3xl font-extrabold uppercase text-center drop-shadow-lg">
//                     {item.name}
//                   </h2>
//                 </div>
//               </Link>
//             ))}

//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Service1;
