import React from 'react';
import './About.css';
import Navbar from '../../components/Layout/Header/Navbar';
import Footer from '../../components/Layout/Footer/Footer';

import heroBG from "../../../src/assets/Images/about/About-hero-bg.jpg";
import storyImage from "../../../src/assets/Images/about/ourstory-img.jpg";

import cap1 from "../../../src/assets/Images/about/Rectangle 70.png";
import cap2 from "../../../src/assets/Images/about/Rectangle 71.png";
import cap3 from "../../../src/assets/Images/about/Rectangle 72.png";
import cap4 from "../../../src/assets/Images/about/Rectangle 73.png";
import cap5 from "../../../src/assets/Images/about/Rectangle 74.png";


import methodImg from "../../../src/assets/Images/about/METHODOLOGYy.jpg";

import svg1 from "../../../src/assets/Images/about/Frame 35.png";
import svg2 from "../../../src/assets/Images/about/Frame 35 (1).png";
import svg3 from "../../../src/assets/Images/about/Frame 35 (2).png";
import svg4 from "../../../src/assets/Images/about/Frame 35 (3).png";

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="about-hero" style={{ backgroundImage: `url(${heroBG})` }}></div>

      {/* OUR STORY */}
      <div style={{ background: "black" }}>
        <div className="story-section">
          <h2>OUR STORY</h2>
          <p>
            At CADMAX Consultancy, we specialize in architectural design, planning, and consultancy services for residential, commercial, and industrial projects. Our experienced team combines advanced CAD technology with thoughtful design to bring ideas to life. We build trust before we build structures. That’s the CadMax difference.Customers choose CadMax because we turn complex ideas into precise, buildable designs—on time, every time.CadMax: Where accuracy meets creativity. Trusted by clients who value quality, innovation, and flawless execution.We don’t just design spaces—CadMax designs solutions. That’s why clients trust us to deliver excellence from concept to completion.CadMax stands out for our attention to detail, advanced CAD technology, and commitment to client satisfaction.From 2D to 3D perfection—customers choose CadMax for designs that are accurate, clear, and construction-ready.
          </p>

          <img src={storyImage} alt="our story" className="story-image" />
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="mission-vision">
        <div className="mv-card">
          <div className="mv-icon ">
            <i class="fa-solid fa-handshake"></i>
          </div>
          <h3>OUR MISSION</h3>
          <p>
            Cadmax Consultancy’s mission is to deliver accurate, innovative, and reliable architectural solutions that meet client needs and industry standards. The firm is committed to quality design, strong teamwork, and efficient project execution while maintaining integrity and professionalism. Through continuous improvement and the use of advanced technology, Cadmax Consultancy aims to create sustainable and practical designs that add lasting value.
          </p>
        </div>

        <div className="mv-card">
          <div className="mv-icon">
            <i className="bi bi-eye"></i>
          </div>

          <h3>OUR VISION</h3>
          <p>
            To be a trusted leader in architectural and technical consultancy, delivering innovative, accurate, and design-ready solutions by seamlessly translating real-world site conditions into intelligent, sustainable, and future-focused outcomes that inspire confidence and long-term value
          </p>
        </div>
      </div>
      {/* CAPABILITIES SECTION */}
      <div className="cap-section">

        <div className="cap-header">
          <h2>CAPABILITIES THAT HOLD UP IN THE FIELD</h2>
          <p>Cadmax Consultancy’s capabilities stand strong in the field through its commitment to precision, innovation, and practical execution. With a skilled team, advanced design technology, and thorough on-site coordination, the firm successfully translates concepts into reliable, buildable solutions. Every project reflects a balance of technical accuracy, creative design, and real-world performance, ensuring quality from planning to completion. This dedication to excellence allows Cadmax Consultancy to deliver results that consistently meet professional standards and client expectations on the ground.</p>
        </div>

        <div className="cap-collage">

          {/* LEFT BIG IMAGE */}
          <div className="cap-big">
            <img src={cap1} alt="" />
            <h3>LAND DEVELOPMENT ENGINEERING ACROSS RESIDENTIAL AND COMMERCIAL SECTORS</h3>
          </div>

          {/* RIGHT 4 GRID IMAGES */}
          <div className="cap-right-grid">
            <div className="cap-small">
              <img src={cap2} alt="" />
              <h3>END-TO-END SURVEYING WITH MODERN EQUIPMENT AND GPS INTEGRATION</h3>
            </div>

            <div className="cap-small">
              <img src={cap3} alt="" />
              <h3>DATA-DRIVEN PLANNING WORKFLOWS ALIGNED WITH ON-SITE CONDITIONS</h3>
            </div>

            <div className="cap-small">
              <img src={cap4} alt="" />
              <h3>DRAFTING PIPELINES DESIGNED TO REDUCE REVISIONS AND APPROVAL DELAYS</h3>
            </div>

            <div className="cap-small">
              <img src={cap5} alt="" />
              <h3>INTEGRATED DESIGN — SURVEY COORDINATION FOR PREDICTABLE EXECUTION</h3>
            </div>
          </div>

        </div>

      </div>

      {/* METHODOLOGY SECTION */}
      <div className="method-section container-fluid">
        <div className="method-text col-6-md">
          <h2>METHODOLOGY THAT REMOVES GUESSWORK</h2>
          <p>
            Our architectural methodology removes guesswork by following a clear, structured, and data-driven design process. Each project is developed through detailed analysis, accurate planning, and precise documentation, supported by advanced design tools and regular reviews. This systematic approach ensures clarity, reduces errors, and delivers confident, reliable outcomes from concept to completion.
          </p>
        </div>

        <div className="method-image col-6-md">
          <img src={methodImg} alt="methodology" />
        </div>
      </div>


      <div className="values-section">
        <div className='value-texts'>
          <div className="values-left">
            <h2>OPERATIONAL VALUES THAT ANCHOR EVERY DELIVERABLE</h2>
          </div>

          <div className="values-right">
            <p>
              Clear principles applied as measurable behaviours across design,
              surveying and engineering.
            </p>
          </div>
        </div>

        <div className="values-grid">

          <div className="value-box">
            <img src={svg1} className="value-icon" alt=''/>
            <h5>INNOVATION</h5>
            <p>Innovation drives the architectural vision of CADMAX Consultancy. We integrate creative design thinking with advanced architectural technologies to produce functional, sustainable, and visually striking spaces</p>
          </div>

          <div className="value-box">
            <img src={svg2} className="value-icon" alt=''/>
            <h5>EXCELLENCE</h5>
            <p>Excellence is reflected in every stage of our architectural process—from concept development to project completion..</p>
          </div>

          <div className="value-box">
            <img src={svg3} className="value-icon" alt=''/>
            <h5>INTEGRITY</h5>
            <p>CADMAX Consultancy maintains clear communication, realistic commitments, and compliance with all regulatory standards. We build lasting relationships with clients, consultants, and contractors based on trust and mutual respect.</p>
          </div>

          <div className="value-box">
            <img src={svg4} className="value-icon" alt=''/>
            <h5>RESPONSIBILITY</h5>
            <p>Our responsibility extends to ensuring safety, regulatory compliance, cost efficiency, and timely project delivery while creating architecture that positively impacts communities.</p>
          </div>

        </div>
      </div>


      <Footer />
    </>
  );
};

export default About;
