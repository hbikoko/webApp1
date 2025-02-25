import React, { useState } from 'react';
import './styles/Navbar.css';
import logo from '../assets/thandiwe4.png'; // Update with your actual logo path

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <div className="nav-brand">
        <img src={logo} alt="AFRHEEC Logo" className="nav-logo" />
      </div>

      {/* Hamburger Icon */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        &#9776; {/* Simple “three bars” icon */}
      </button>

      {/* Nav Links */}
      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#support">Support</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;



