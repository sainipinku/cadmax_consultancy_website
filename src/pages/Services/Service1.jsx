import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import "./Service1.css";
import { Link } from "react-router-dom";

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

                {/* CARD 1 */}
                <Link to="/Services/Service2" className="service1-card-1">
                    <img src={img1} alt="service" />
                    <div className="card-text">engineering</div>
                </Link>

                {/* CARD 2 */}
                <Link to="/Services/Service2" className="service1-card-1">
                    <img src={img2} alt="service" />
                    <div className="card-text">surveying</div>
                </Link>

                {/* CARD 3 */}
                <Link to="/Services/Service2" className="service1-card-1">
                    <img src={img3} alt="service" />
                    <div className="card-text">planning</div>
                </Link>

            </div>

            <Footer />
        </>
    );
};

export default Service1;
