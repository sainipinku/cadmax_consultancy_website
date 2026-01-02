import React from "react";
import Navbar from "../../components/Layout/Header/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import "./Services.css";
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

               
                <Link to="/Services/ServiceCategory" className="service1-card-1 delay-1">
                    <img src={img1} alt="service" />
                    <div className="card-text">engineering</div>
                </Link>

               
                <Link to="/Services/ServiceCategory" className="service1-card-1 delay-2">
                    <img src={img2} alt="service" />
                    <div className="card-text">surveying</div>
                </Link>

                
                <Link to="/Services/ServiceCategory" className="service1-card-1 delay-3">
                    <img src={img3} alt="service" />
                    <div className="card-text">planning</div>
                </Link>

            </div>

            <Footer />
        </>
    );
};

export default Service1;



