import React, { useState } from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import webAppLogo from "../assets/thandiwe4.png";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <nav>
      <div className="nav-brand">
      <Link to="/" className="nav-logo-container">
        <img 
          src={webAppLogo} 
          alt="Web App Logo" 
          className="nav-logo" 
        />
        <span className="tooltip-text">African Heritage Education And Empowerment Community</span>
      </Link>
      </div>
      <ul>
        <li>
          <Link to="/our-story">About Us</Link>
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/services">Services</Link>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/heritage-history">Heritage &amp; History</Link>
              </li>
              <li>
                <Link to="/services/community">Community</Link>
              </li>
              <li>
                <Link to="/services/current-projects">Current Projects</Link>
              </li>
              <li>
                <Link to="/services/policy-positions">Policy and Positions</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


