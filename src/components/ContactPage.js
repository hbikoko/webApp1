
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/ContactPage.css';

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <div className="contact-section">
        <h1>{t('contact.title', 'Contact Us')}</h1>
        <p>{t('contact.description', 'Get in touch with us to learn more about our programs and how you can get involved.')}</p>
        <div className="contact-details">
          <p>{t('contact.email', 'Email')}: <a href="mailto:info@afrheec.org">info@afrheec.org</a></p>
          <p>{t('contact.address', 'Address')}: P.O. Box 2291 Salem, OR 97301</p>
        </div>
        <div className="contact-links">
          <Link to="/services/current-projects">{t('contact.ourPrograms', 'Our Programs')}</Link>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;