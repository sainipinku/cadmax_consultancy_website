import React, { useState } from "react";
import "./Project.css";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";

import heroBG from "../../../src/assets/Images/project/hero-project-banner.jpg";

import image1 from "../../assets/Images/project/img-1.jpg";
import image2 from "../../assets/Images/project/img-2.jpg";
import image3 from "../../assets/Images/project/img-3.jpg";
import image4 from "../../assets/Images/project/img-4.jpg";
import image5 from "../../assets/Images/project/img-5.jpg";
import image6 from "../../assets/Images/project/img-6.jpg";
import image7 from "../../assets/Images/project/img-7.jpg";
import image8 from "../../assets/Images/project/img-8.jpg";
import image9 from "../../assets/Images/project/img-9.jpg";
import image10 from "../../assets/Images/project/img-10.jpg";
import image11 from "../../assets/Images/project/img-11.jpg";
import image12 from "../../assets/Images/project/img-12.jpg";
import image13 from "../../assets/Images/project/img-13.jpg";

const Project = () => {
  const projects = [
    {
      img: image1,
      title: "HOMELAND GROUP – KESHAV VATSALYA",
      desc: "Located at Aryer Road, client Moti Son's Jewelers area 900 Hect.",
    },
    {
      img: image2,
      title: "HAPPY HOMES – ALWAR SCHEME",
      desc: "Located in the heart of the desert, a tranquil retreat with 151 Hect. for outdoor activities.",
    },
    {
      img: image3,
      title: "MADHAV MARKET - KALWAR ROAD",
      desc: "A serene community surrounded by lush forests, offering 210 Hect. of green space.",
    },
    {
      img: image4,
      title: "NATURE HOME TULSI",
      desc: "An upscale neighborhood on the outskirts of the city featuring 340 Hect. of premium real estate.",
    },
    {
      img: image5,
      title: "SONAMATI FARMS",
      desc: "A picturesque area known for rolling hills and vibrant wildlife, encompassing 120 Hect.",
    },
    {
      img: image6,
      title: "MUKUNDAM HOMELAND",
      desc: "A beautiful lakeside area perfect for fishing and boating. Covering 150 Hect.",
    },
    {
      img: image7,
      title: "NAIWALA SCHEME",
      desc: "A community famous for its autumn foliage, with 220 Hect dedicated to parks and recreation.",
    },
    {
      img: image8,
      title: "SANDEEP PRABHAKER VILLA",
      desc: "A mountain enclave offering stunning views, covering 180 Hect.",
    },
    {
      img: image9,
      title: "SUNRISE APARTMENT",
      desc: "A beautifully planned residential township featuring mid-rise apartment blocks surrounded by lush green landscapes.",
    },
    {
      img: image10,
      title: "SWASTIK RESIDENCY - PAWALIYA",
      desc: "A beautifully planned residential township featuring mid-rise apartment blocks surrounded by lush green landscapes.",
    },
    {
      img: image11,
      title: "YADURAJ ENCLAVE JAICHANDPURA",
      desc: "A beautifully planned residential township featuring mid-rise apartment blocks surrounded by lush green landscapes.",
    },
    {
      img: image12,
      title: "HOLIDAY FARMS",
      desc: "A beautifully planned residential township featuring mid-rise apartment blocks surrounded by lush green landscapes.",
    },
    {
      img: image13,
      title: "RIYASAT OFFICE SPACE",
      desc: "A beautifully planned residential township featuring mid-rise apartment blocks surrounded by lush green landscapes.",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(12);

  return (
    <>
      <Navbar />

      
      <div
        className="project-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      >
        <h1>PROJECT</h1>
      </div>

      <div className="project-wrapper">
       
        <h2 className="project-title uppercase">Projects That Inspire.</h2>

       
        <div className="project-tabs">
          <button className="tab active">
            MANORATE AND BOUNDARY CONSTRUCTION
          </button>
          <button className="tab">ROAD NETWORK</button>
          <button className="tab">WATER SUPPLY</button>
          <button className="tab">ELECTRICITY</button>
        </div>

      
        <div className="project-grid">
          {projects.slice(0, visibleCount).map((item, index) => (
            <div className="project-card" key={index}>
              <div className="img-box">
                <img src={item.img} alt={item.title} className="project-img" />
                <div className="download-icon">
                  <i className="bi bi-download"></i>
                </div>
              </div>

              <div className="project-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        
        {visibleCount < projects.length && (
          <button
            className="load-more"
            onClick={() => setVisibleCount(projects.length)}
          >
            LOAD MORE
          </button>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Project;





// import React, { useEffect, useState } from "react";
// import "./Project.css";
// import Navbar from "../../components/Layout/Header/Navbar";
// import Footer from "../../components/Layout/Footer/Footer";
// import API from "../../api/axios";

// import heroBG from "../../../src/assets/Images/project/hero-project-banner.jpg";

// const CATEGORIES = [
//   "MANORATE AND BOUNDARY CONSTRUCTION",
//   "ROAD NETWORK",
//   "WATER SUPPLY",
//   "ELECTRICITY",
// ];

// const Project = () => {
//   const [projects, setProjects] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(12);
//   const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

//   /* ================= FETCH PROJECTS ================= */
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await API.get("/projects");
//         setProjects(res.data || []);
//       } catch (error) {
//         console.error("Project fetch error", error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   /* ================= RESET LOAD MORE ON TAB CHANGE ================= */
//   useEffect(() => {
//     setVisibleCount(12);
//   }, [activeTab]);

//   /* ================= FILTER PROJECTS ================= */
//   const filteredProjects = projects.filter(
//     (item) => item.category?.toUpperCase() === activeTab
//   );

//   return (
//     <>
//       <Navbar />

//       {/* HERO */}
//       <div
//         className="project-hero"
//         style={{ backgroundImage: `url(${heroBG})` }}
//       >
//         <h1>PROJECT</h1>
//       </div>

//       <div className="project-wrapper">
//         <h2 className="project-title uppercase">Projects That Inspire.</h2>

//         {/* TABS */}
//         <div className="project-tabs">
//           {CATEGORIES.map((cat) => (
//             <button
//               key={cat}
//               className={`tab ${activeTab === cat ? "active" : ""}`}
//               onClick={() => setActiveTab(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* GRID */}
//         <div className="project-grid">
//           {filteredProjects.length === 0 && (
//             <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>
//               No projects found in this category.
//             </p>
//           )}

//           {filteredProjects.slice(0, visibleCount).map((item) => (
//             <div className="project-card" key={item._id}>
//               <div className="img-box">
//                 <img
//                   src={item.image}  
//                   alt={item.title}
//                   className="project-img"
//                 />

//                 <div className="download-icon">
//                   <i className="bi bi-download"></i>
//                 </div>
//               </div>

//               <div className="project-content">
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* LOAD MORE */}
//         {visibleCount < filteredProjects.length && (
//           <button
//             className="load-more"
//             onClick={() => setVisibleCount((prev) => prev + 12)}
//           >
//             LOAD MORE
//           </button>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Project;
