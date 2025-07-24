// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Get in touch with us to learn more about our programs and how you can get involved.</p>
        <div className="contact-details">
          <p>Email: <a href="mailto:info@afrheec.org">info@afrheec.org</a></p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: PO Box 2291 Salem, Oregon 97301</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;