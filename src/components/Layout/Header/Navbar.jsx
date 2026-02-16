import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/Images/cadmax-logo/Cadmax-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      
      {/* Logo */}
      <Link to="/" className="cadmax">
        <img src={logo} alt="Logo" className="footer-logo" />
      </Link>

      {/* Hamburger / Close Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Navbar Menu */}
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>

        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
          onClick={toggleMenu}
          end
        >
          HOME
        </NavLink>

        <NavLink 
          to="/Services" 
          className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
          onClick={toggleMenu}
        >
          SERVICES
        </NavLink>

        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
          onClick={toggleMenu}
        >
          PROJECT
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
          onClick={toggleMenu}
        >
          ABOUT
        </NavLink>

        <NavLink 
          to="/careerpath" 
          className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
          onClick={toggleMenu}
        >
          CAREER
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
          onClick={toggleMenu}
        >
          CONTACT
        </NavLink>

      </nav>

      {/* Header Button */}
      <button className="header-button">
        <Link to="/contact">ENQUIRE TODAY</Link>
      </button>
    </header>
  );
};

export default Navbar;
