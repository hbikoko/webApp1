import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../assets/thandiwe4.png'; // Ensure this path is correct

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="AFRHEEC Logo" className="nav-logo" />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        &#9776;
      </button>

      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/our-story" onClick={handleLinkClick}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={handleLinkClick}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/support" onClick={handleLinkClick}>
            Support
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;




