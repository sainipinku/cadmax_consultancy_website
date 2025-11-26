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
            setOpenDropdown(null); // close if same dropdown clicked
        } else {
            setOpenDropdown(name); // open clicked dropdown
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

                {/* SERVICES DROPDOWN */}
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

                {/* PROJECT DROPDOWN */}
                <div 
                    className="dropdown"
                    onClick={() => handleDropdown("projects")}
                >
                    <button className="dropbtn">
                        PROJECT <i className="fa fa-caret-down"></i>
                    </button>

                    <div className={`dropdown-content ${openDropdown === "projects" ? "show" : ""}`}>
                        <Link to="/projects/project1" className="dropdown-link">Project 1</Link>
                        <Link to="/projects/project2" className="dropdown-link">Project 2</Link>
                        <Link to="/projects/project3" className="dropdown-link">Project 3</Link>
                    </div>
                </div>

                {/* ABOUT DROPDOWN */}
                <div 
                    className="dropdown"
                    onClick={() => handleDropdown("about")}
                >
                    <button className="dropbtn">
                        ABOUT <i className="fa fa-caret-down"></i>
                    </button>

                    <div className={`dropdown-content ${openDropdown === "about" ? "show" : ""}`}>
                        <Link to="/about/company" className="dropdown-link">Company</Link>
                        <Link to="/about/team" className="dropdown-link">Team</Link>
                        <Link to="/about/mission" className="dropdown-link">Mission</Link>
                    </div>
                </div>

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
