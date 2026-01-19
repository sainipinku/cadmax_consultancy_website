import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/cadmax-logo/Cadmax-logo.png"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className="header">

            {/* Logo */}
            <Link to="/" className="cadmax"><img
          src={logo}
          alt="Logo"
          className="footer-logo"
        /></Link>

            {/* Hamburger / Close Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"}
            </div>

            {/* Navbar Menu */}
            <nav className={`navbar ${menuOpen ? "active" : ""}`}>

                <Link to="/" className="nav-link" onClick={toggleMenu}>HOME</Link>
                <Link to="/Services" className="nav-link" onClick={toggleMenu}>SERVICES</Link>
                <Link to="/projects" className="nav-link" onClick={toggleMenu}>PROJECT</Link>
                <Link to="/about" className="nav-link" onClick={toggleMenu}>ABOUT</Link>
                <Link to="/careerpath" className="nav-link" onClick={toggleMenu}>CAREER</Link>
                <Link to="/contact" className="nav-link" onClick={toggleMenu}>CONTACT</Link>

            </nav>

            {/* Header Button */}
            <button className="header-button">
                <Link to="/contact">ENQUIRE TODAY</Link>
            </button>

        </header>
    );
};

export default Navbar;
