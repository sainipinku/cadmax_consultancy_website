import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import "./Service1.css";

// IMAGES IMPORT
import heroBG from "../../../src/assets/Images/header/Header-bg-img.png";
import img1 from "../../assets/Images/service-page-1/service1.png";
import img2 from "../../assets/Images/service-page-1/service2.png";
import img3 from "../../assets/Images/service-page-1/service3.png";

const Service1 = () => {
    return (
        <>
            <Navbar />

            {/* HERO SECTION */}
            <div
                className="service1-hero"
                style={{ backgroundImage: `url(${heroBG})` }}
            >

            </div>

            {/* IMAGE GRID SECTION */}
            <div className="service1-grid">
                <div className="service1-card">
                    <img src={img1} alt="service" />
                    <div className="card-text">engineering </div>
                </div>

                <div className="service1-card">
                    <img src={img2} alt="service" />
                    <div className="card-text">surveying </div>
                </div>

                <div className="service1-card">
                    <img src={img3} alt="service" />
                    <div className="card-text">planning</div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Service1;
