import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/Images/cadmax-logo/Cadmax-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      h-[77px]
      flex items-center justify-between px-4 md:px-6
      bg-white/20 backdrop-blur-[28px]
    ">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="
            h-[45px] 
            sm:h-[50px] 
            md:h-[60px] 
            lg:h-[70px] 
            object-contain
          "
        />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-5">

        {["/", "/about", "/Services", "/projects", "/careerpath", "/contact"].map((path, i) => {
          const names = ["HOME", "ABOUT", "SERVICES", "PROJECT", "CAREER", "CONTACT"];
          return (
            <NavLink
              key={i}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `relative text-[14px] font-bold px-3 py-2 transition
                ${isActive ? "text-[#0F2C59] scale-110 font-extrabold" : "text-[#171717]"}
                
                after:content-[''] after:absolute after:left-0 after:bottom-[6px]
                after:h-[2px] after:bg-[#1B3C73] after:w-0
                hover:after:w-full after:transition-all`
              }
            >
              {names[i]}
            </NavLink>
          );
        })}

      </nav>

      {/* Desktop Button */}
      <Link
        to="/contact"
        className="hidden lg:block bg-[#171717] text-white px-6 py-3 rounded-md text-[14px] font-bold"
      >
        ENQUIRE TODAY
      </Link>

      {/* Modern Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
      >
        <span className={`block h-[2px] w-6 bg-black transition ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
        <span className={`block h-[2px] w-6 bg-black transition ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block h-[2px] w-6 bg-black transition ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`
        md:hidden absolute top-[77px] left-0 w-full
        bg-white/95 backdrop-blur-lg
        flex flex-col px-5 py-4 gap-3
        transition-all duration-300
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}>

        {["/", "/about", "/Services", "/projects", "/careerpath", "/contact"].map((path, i) => {
          const names = ["HOME", "ABOUT", "SERVICES", "PROJECT", "CAREER", "CONTACT"];
          return (
            <NavLink
              key={i}
              to={path}
              end={path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-[14px] font-semibold border-b pb-2
                ${isActive ? "text-[#0F2C59] font-bold" : "text-black"}`
              }
            >
              {names[i]}
            </NavLink>
          );
        })}

      </div>

    </header>
  );
};

export default Navbar;