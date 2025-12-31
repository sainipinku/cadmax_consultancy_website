import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import "./Service1.css";
import { Link } from "react-router-dom";


import heroBG from "../../../src/assets/Images/service-page-1/service-banner.jpg";
import img1 from "../../assets/Images/service-page-1/engineer-img.jpg";
import img2 from "../../assets/Images/service-page-1/service2.png";
import img3 from "../../assets/Images/service-page-1/service3.png";

const Service1 = () => {
    return (
        <> 
            <Navbar />

           
            <div
                className="service1-hero"
                style={{ backgroundImage: `url(${heroBG})` }}
            >
            </div>

           
            <div className="service1-grid slide-in">

               
                <Link to="/Services/Service2" className="service1-card-1 delay-1">
                    <img src={img1} alt="service" />
                    <div className="card-text">engineering</div>
                </Link>

               
                <Link to="/Services/Service2" className="service1-card-1 delay-2">
                    <img src={img2} alt="service" />
                    <div className="card-text">surveying</div>
                </Link>

                
                <Link to="/Services/Service2" className="service1-card-1 delay-3">
                    <img src={img3} alt="service" />
                    <div className="card-text">planning</div>
                </Link>

            </div>

            <Footer />
        </>
    );
};

export default Service1;







// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Layout/Header/Navbar";
// import Footer from "../../components/Layout/Footer/Footer";
// import "./Service1.css";
// import { Link } from "react-router-dom";
// import API from "../../api/axios";

// import heroBG from "../../../src/assets/Images/header/Header-bg-img.png";

// const Service1 = () => {
//   const [services, setServices] = useState([]);

//   // FETCH SERVICE1 DATA
//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const res = await API.get("/services/page/service1");
//         setServices(res.data);
//       } catch (error) {
//         console.error("Service1 fetch error:", error);
//       }
//     };

//     fetchServices();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       {/* HERO SECTION */}
//       <div
//         className="service1-hero"
//         style={{ backgroundImage: `url(${heroBG})` }}
//       />

//       {/* SERVICE GRID */}
//       <div className="service1-grid slide-in">
//         {services.length === 0 ? (
//           <p style={{ textAlign: "center" }}>No services found</p>
//         ) : (
//           services.map((item, index) => (
//             <Link
//               key={item._id}
//               to="/Services/Service2"
//               className={`service1-card-1 delay-${index + 1}`}
//             >
//               <img
//                 src={`http://localhost:5000/uploads/services/${item.image}`}
//                 alt={item.title}
//               />

//               <div className="card-text">{item.title}</div>
//             </Link>
//           ))
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Service1;
