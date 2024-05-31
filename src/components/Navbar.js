import React from 'react';
import './styles/Navbar.css'; // Import your CSS
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <div className="nav-brand"><Link to ="/">AFRHEEC</Link></div>
      <ul>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/our-story">Our Story</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
