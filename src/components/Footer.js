// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-section">
        <h4>{t('footer.contactUs', 'Contact Us')}</h4>
        <p>{t('footer.contactDescription', 'Get in touch with us to learn more about our programs and how you can get involved.')}</p>
        <div className="contact-details">
          <p>{t('footer.email', 'Email')}: <a href="mailto:info@afrheec.org">info@afrheec.org</a></p>
          <p>{t('footer.address', 'Address')}: P.O. Box 2291 Salem, OR 97301</p>
        </div>
        <div className="footer-links">
          <Link to="/services/current-projects">{t('footer.ourPrograms', 'Our Programs')}</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;