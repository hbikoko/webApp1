import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles/ServicesPage.css';

function ServicesPage() {
  const { t, i18n } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Also scroll after a short delay to handle any dynamic content loading
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="services-title">{t('board.community.title', 'Community')}</h1>
        <p className="services-intro">
          {t('services.heritageText', 'Discover the comprehensive range of services AFRHEEC provides to empower African heritage communities through education, cultural programs, and essential resources.')}
        </p>
      </div>

      <div className="services-grid">
        {/* Education Section */}
        <div className="service-card">
          <h2 className="service-card-title">{t('board.community.education.title', 'Education')}</h2>
          <p className="service-card-description">
            {t('board.community.education.description', 'Culturally responsive educational programs that support early literacy development and academic success for children and families.')}
          </p>
          <Link to="/services/education" className="service-card-link">
            {t('board.community.education.link', 'Learn More About Education Programs')}
          </Link>
        </div>

        {/* Cultural Section */}
        <div className="service-card">
          <h2 className="service-card-title">{t('board.community.cultural.title', 'Cultural')}</h2>
          <p className="service-card-description">
            {t('board.community.cultural.description', 'Programs and events that celebrate and preserve African heritage, traditions, and cultural practices.')}
          </p>
          <Link to="/services/cultural" className="service-card-link">
            {t('board.community.cultural.link', 'Explore Cultural Programs')}
          </Link>
        </div>

        {/* Wellness Section */}
        <div className="service-card">
          <h2 className="service-card-title">{t('board.community.wellness.title', 'Wellness')}</h2>
          <p className="service-card-description">
            {t('board.community.wellness.description', 'Mental health support, wellness practices, and holistic approaches to community health and healing.')}
          </p>
          <Link to="/services/wellness" className="service-card-link">
            {t('board.community.wellness.link', 'Discover Wellness Services')}
          </Link>
        </div>

        {/* Resources Section */}
        <div className="service-card">
          <h2 className="service-card-title">{t('board.community.resources.title', 'Resources')}</h2>
          <p className="service-card-description">
            {t('board.community.resources.description', 'Access to essential resources, support services, and community connections for families and individuals.')}
          </p>
          <Link to="/services/resources" className="service-card-link">
            {t('board.community.resources.link', 'Access Resources')}
          </Link>
        </div>
      </div>

      {/* Community Events Section */}
      <div className="community-events-preview">
        <h2 className="section-title">{t('board.community.events.title', 'Community Events')}</h2>
        <p className="section-description">
          {t('board.community.events.description', 'Join us for cultural celebrations, educational workshops, and community gatherings that strengthen our bonds and honor our shared heritage.')}
        </p>
        <Link to="/community-events" className="events-link">
          {t('board.community.events.link', 'View All Community Events')}
        </Link>
      </div>
    </div>
  );
}

export default ServicesPage;