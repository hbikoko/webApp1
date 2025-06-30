import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Get in touch with us to learn more about our programs and how you can get involved.</p>
        <Link to="/contact" className="footer-contact-link">Contact AFRHEEC</Link>
      </div>
    </footer>
  );
}

export default Footer; 