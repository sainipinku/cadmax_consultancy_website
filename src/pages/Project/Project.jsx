import React from 'react'
import './Project.css'
import Navbar from '../../components/Layout/Header/Navbar';
import Footer from '../../components/Layout/Footer/Footer';

import heroBG from "../../../src/assets/Images/project/project-hero-img.png";

import image1 from '../../assets/Images/project/Rectangle 66.png';
import image2 from '../../assets/Images/project/Rectangle 66 (1).png';
import image3 from '../../assets/Images/project/Rectangle 66 (2).png';
import image4 from '../../assets/Images/project/Rectangle 66 (3).png';
import image5 from '../../assets/Images/project/Rectangle 66 (4).png';
import image6 from '../../assets/Images/project/Rectangle 66 (5).png';
import image7 from '../../assets/Images/project/Rectangle 66 (6).png';
import image8 from '../../assets/Images/project/Rectangle 66 (7).png';
import image9 from '../../assets/Images/project/image9.png';



const Project = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="project-hero"
        style={{ backgroundImage: `url(${heroBG})` }}
      >
        <h1>PROJECT</h1>
        
      </div>

      <div className="project-wrapper">
        {/* TOP HEADING */}
        <h2 className="project-title">EXPLORE OUR BEST WORKS SO FAR</h2>

        {/* CATEGORY TABS */}
        <div className="project-tabs">
          <button className="tab active">MANORATE AND BOUNDARY CONSTRUCTION</button>
          <button className="tab">ROAD NETWORK</button>
          <button className="tab">WATER SUPPLY</button>
          <button className="tab">ELECTRICITY</button>
        </div>

        {/* GRID WRAPPER */}
        <div className="project-grid">

          {[
            { img: image1, title: "MOTIONS TOWNSHIP", desc: "Located at Aryer Road, client Moti Son's Jewelers area 900 Hect." },
            { img: image2, title: "SUNSET VALLEY", desc: "Located in the heart of the desert, a tranquil retreat with 151 Hect. for outdoor activities." },
            { img: image3, title: "GREENWOOD ESTATES", desc: "A serene community surrounded by lush forests, offering 210 Hect. of green space." },
            { img: image4, title: "SILVER OAKS", desc: "An upscale neighborhood on the outskirts of the city featuring 340 Hect. of premium real estate." },
            { img: image5, title: "HARMONY FIELDS", desc: "A picturesque area known for rolling hills and vibrant wildlife, encompassing 120 Hect." },
            { img: image6, title: "CRYSTAL LAKE", desc: "A beautiful lakeside area perfect for fishing and boating. Covering 150 Hect." },
            { img: image7, title: "MAPLE GROVE", desc: "A community famous for its autumn foliage, with 220 Hect dedicated to parks and recreation." },
            { img: image8, title: "CEDAR RIDGE", desc: "A mountain enclave offering stunning views, covering 180 Hect." },
            {img:  image9,title:"VERDANT RESIDENTIAL ENCLAVE" , desc:"A beautifully planned residential township featuring mid-rise apartment blocks surrounded by lush green landscapes."}
          ].map((item, index) => (
            <div className="project-card" key={index}>
              
              <div className="img-box">
                <img src={item.img} alt="" className="project-img" />
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

        {/* LOAD MORE BUTTON */}
        <button className="load-more">LOAD MORE</button>

      </div>

      <Footer />
    </>
  );
};

export default Project;
