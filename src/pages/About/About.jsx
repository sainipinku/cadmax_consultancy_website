import React from 'react';
import './About.css';
import Navbar from '../../components/Layout/Header/Navbar';
import Footer from '../../components/Layout/Footer/Footer';

import heroBG from "../../../src/assets/Images/about/about-hero-img.png";
import storyImage from "../../../src/assets/Images/about/cover-img.png";

import cap1 from "../../../src/assets/Images/about/Rectangle 70.png";
import cap2 from "../../../src/assets/Images/about/Rectangle 71.png";
import cap3 from "../../../src/assets/Images/about/Rectangle 72.png";
import cap4 from "../../../src/assets/Images/about/Rectangle 73.png";
import cap5 from "../../../src/assets/Images/about/Rectangle 74.png";


import methodImg from "../../../src/assets/Images/about/Rectangle 67.png";

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
      <div style={{background:"black"}}>
      <div className="story-section">
        <h2>OUR STORY</h2>
        <p>
          CADMAX began as a response to a gap in the industry; engineering firms produced drawings,
          but contractors still had to reinterpret them. The founders built CADMAX to eliminate that gap.
          The company was structured around field-driven data, rigorous drafting discipline and a commitment
          to produce engineering that moves straight into execution. Over the years, the operation expanded 
          from basic surveying to complete engineering and planning units powered by upgraded instruments, 
          automated workflows and specialised personnel trained for accuracy under pressure.
        </p>

        <img src={storyImage} alt="our story" className="story-image" />
      </div>
      </div>

      {/* MISSION & VISION */}
      <div className="mission-vision">
        <div className="mv-card">
          <div className="mv-icon"><i className="bi bi-bullseye"></i></div>
          <h3>OUR MISSION</h3>
          <p>
            Deliver technically precise, construction-ready surveys and engineering outputs using disciplined
            processes and modern measurement technology.
          </p>
        </div>

        <div className="mv-card">
          <div className="mv-icon"><i className="bi bi-eye"></i></div>
          <h3>OUR VISION</h3>
          <p>
            Set the benchmark for reliability in engineering, surveying and planning, where every CADMAX
            package is recognised as buildable without reinterpretation.
          </p>
        </div>
      </div>
{/* CAPABILITIES SECTION */}
<div className="cap-section">

  <div className="cap-header">
    <h2>CAPABILITIES THAT HOLD UP IN THE FIELD</h2>
    <p>Systems, tools and methods built to reduce ambiguity, stabilise decisions 
      and keep engineering aligned with real site conditions.</p>
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
      <div className="method-section">
        <div className="method-text">
          <h2>METHODOLOGY THAT REMOVES GUESSWORK</h2>
          <p>
            CADMAX operates on a system-first model. Field data is collected with calibrated instruments,
            validated against known benchmarks and transferred into controlled digital environments without
            manual interpretation. Each dataset moves through predefined checks for consistency, error
            margins, engineering compliance and cross-discipline alignment. Drawings, levels and networks are 
            generated only after the underlying logic is verified, referenced and traceable.
          </p>
        </div>

        <div className="method-image">
          <img src={methodImg} alt="methodology" />
        </div>
      </div>


      <div className="values-section">
        <div style={{display:"flex" , justifyContent:"space-between"}}>
  <div className="values-left">
    <h2>OPERATIONAL VALUES THAT ANCHOR<br/>EVERY DELIVERABLE</h2>
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
      <img src={svg1} className="value-icon" />
      <h5>INNOVATION</h5>
      <p>Methods upgraded deliberately to remove inefficiency.</p>
    </div>

    <div className="value-box">
      <img src={svg2} className="value-icon" />
      <h5>EXCELLENCE</h5>
      <p>Accuracy treated as a requirement, not a target.</p>
    </div>

    <div className="value-box">
      <img src={svg3} className="value-icon" />
      <h5>INTEGRITY</h5>
      <p>Documentation built to withstand scrutiny.</p>
    </div>

    <div className="value-box">
      <img src={svg4} className="value-icon" />
      <h5>RESPONSIBILITY</h5>
      <p>Ownership applied from data capture to final output.</p>
    </div>

  </div>
</div>


      <Footer />
    </>
  );
};

export default About;
