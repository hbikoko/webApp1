import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-section">
        <h4>Partners</h4>
        <p>We are grateful for the collaboration of our community and organizational partners.</p>
      </div>
      <div className="footer-section">
        <h4>Donors</h4>
        <p>Thank you to all our generous donors for supporting our mission.</p>
      </div>
      <div className="footer-section">
        <h4>Grants</h4>
        <p>Special thanks to the grant organizations that make our work possible.</p>
      </div>
    </footer>
  );
}

export default Footer; 