import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles/CommunityPage.css';

function CommunityPage() {
  const { t } = useTranslation();

  return (
    <div className="community-container">
      <h1 className="community-title">{t('community.title', 'Community')}</h1>
      
      <div className="services-grid">
        {/* Education Section */}
        <div className="service-card">
          <h2 className="service-card-title">{t('community.education.title', 'Education')}</h2>
          <p className="service-card-description">
            {t('community.education.description', 'Culturally responsive educational programs that support early literacy development and academic success for children and families.')}
          </p>
          <Link to="/services/education" className="service-card-link">
            {t('community.education.link', 'Learn More About Education Programs')}
          </Link>
        </div>

        {/* Cultural Section */}
        <div className="service-card">
          <h2 className="service-card-title">{t('community.cultural.title', 'Cultural')}</h2>
          <p className="service-card-description">
            {t('community.cultural.description', 'Programs and events that celebrate and preserve African heritage, traditions, and cultural practices.')}
          </p>
          <Link to="/services/cultural" className="service-card-link">
            {t('community.cultural.link', 'Explore Cultural Programs')}
          </Link>
        </div>

        {/* Wellness Section */}
        <div className="service-card">
          <h2 className="service-card-title">{t('community.wellness.title', 'Wellness')}</h2>
          <p className="service-card-description">
            {t('community.wellness.description', 'Mental health support, wellness practices, and holistic approaches to community health and healing.')}
          </p>
          <Link to="/services/wellness" className="service-card-link">
            {t('community.wellness.link', 'Discover Wellness Services')}
          </Link>
        </div>

        {/* Resources Section */}
        <div className="service-card">
          <h2 className="service-card-title">{t('community.resources.title', 'Resources')}</h2>
          <p className="service-card-description">
            {t('community.resources.description', 'Access to essential resources, support services, and community connections for families and individuals.')}
          </p>
          <Link to="/services/resources" className="service-card-link">
            {t('community.resources.link', 'Access Resources')}
          </Link>
        </div>
      </div>

      {/* Community Events Section */}
      <div className="community-events-preview">
        <h2 className="section-title">{t('community.events.title', 'Community Events')}</h2>
        <p className="section-description">
          {t('community.events.description', 'Join us for cultural celebrations, educational workshops, and community gatherings that strengthen our bonds and honor our shared heritage.')}
        </p>
        <div className="events-cta">
          <Link to="/community-events" className="events-button">
            {t('community.events.link', 'View All Community Events')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;