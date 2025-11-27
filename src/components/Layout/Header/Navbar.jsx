import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleDropdown = (name) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    return (
        <header className="header">

            {/* Logo */}
            <Link to="/" className="cadmax">CADMAX</Link>

            {/* Hamburger Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>

            {/* Navbar Menu */}
            <nav className={`navbar ${menuOpen ? "active" : ""}`}>

                <Link to="/" className="nav-link">HOME</Link>

                {/* SERVICES DROPDOWN (Only this remains) */}
                <div 
                    className="dropdown" 
                    onClick={() => handleDropdown("services")}
                >
                    <button className="dropbtn">
                        SERVICES <i className="fa fa-caret-down"></i>
                    </button>

                    <div className={`dropdown-content ${openDropdown === "services" ? "show" : ""}`}>
                        <Link to="/Services/Service1" className="dropdown-link">Service 1</Link>
                        <Link to="/Services/Service2" className="dropdown-link">Service 2</Link>
                        <Link to="/Services/Service3" className="dropdown-link">Service 3</Link>
                    </div>
                </div>

                {/* PROJECT - NO DROPDOWN */}
                <Link to="/projects" className="nav-link">PROJECT</Link>

                {/* ABOUT - NO DROPDOWN */}
                <Link to="/about" className="nav-link">ABOUT</Link>

                <Link to="/contact" className="nav-link">CONTACT</Link>
            </nav>

            {/* Header Button */}
            <button className="header-button">
                <Link to="/enquire">ENQUIRE TODAY</Link>
            </button>

        </header>
    );
};

export default Navbar;
