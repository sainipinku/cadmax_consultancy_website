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

                {/* SERVICES (No Dropdown) */}
                <Link to="/Services/Service1" className="dropbtn">
                    SERVICES
                </Link>


                {/* PROJECT - NO DROPDOWN */}
                <Link to="/projects" className="nav-link">PROJECT</Link>

                {/* ABOUT - NO DROPDOWN */}
                <Link to="/about" className="nav-link">ABOUT</Link>

                <Link to="/contact" className="nav-link">CONTACT</Link>
            </nav>

            {/* Header Button */}
            <button className="header-button">
                <Link to="/contact">ENQUIRE TODAY</Link>
            </button>

        </header>
    );
};

export default Navbar;
