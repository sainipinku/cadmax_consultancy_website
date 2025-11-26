import React from "react";
import "./Footer.css";

import logo from "../../../assets/Images/company logo/image 5.png";
import facebook from '../../../assets/icons/Social_icon/Vector.png';
import instagram from '../../../assets/icons/Social_icon/mdi_instagram.png';
import linkdin from '../../../assets/icons/Social_icon/mdi_linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        
        {/* Left Logo */}
        <img
          src={logo}
          alt="Logo"
          className="footer-logo"
        />

        {/* Social PNG icons */}
        <div className="footer-social">
          <img src={facebook} alt="Instagram" className="social-icon" />
          <img src={instagram} alt="Facebook" className="social-icon" />
          <img src={linkdin} alt="LinkedIn" className="social-icon" />
        </div>

      </div>

      <div className="footer-line"></div>

      <div className="footer-links container">
        <p>ABOUT US</p>
        <p>CONTACT US</p>
        <p>SERVICES</p>
        <p>OUR PROJECTS</p>
        <p>NEWS AND ARTICLES</p>
        <p>CONTACT US</p>
      </div>

      <div className="footer-line"></div>
      <div className="copyright"><p>
        </p>Copyright © Dipen Gada & Associates. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
