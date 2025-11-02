import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Ishani Singh</h1>
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <motion.li whileHover={{scale: 1.2, color: '#066255', textDecoration: 'underline', textDecorationColor: '#066255'}}onClick={() => scrollToSection("about")}>About</motion.li>
        <motion.li whileHover={{scale: 1.2, color: '#066255', textDecoration: 'underline', textDecorationColor: '#066255' }}onClick={() => scrollToSection("leadership")}>Leadership</motion.li>
        <motion.li whileHover={{scale: 1.2, color: '#066255', textDecoration: 'underline', textDecorationColor: '#066255' }}onClick={() => scrollToSection("media")}>Media</motion.li>
        <motion.li whileHover={{scale: 1.2, color: '#066255', textDecoration: 'underline', textDecorationColor: '#066255' }}onClick={() => scrollToSection("projects")}>Projects</motion.li>
        <motion.li whileHover={{scale: 1.2, color: '#066255', textDecoration: 'underline', textDecorationColor: '#066255' }}onClick={() => scrollToSection("contact")}>Contact</motion.li>
      </ul>
    </nav>
  );
}

export default Navbar;