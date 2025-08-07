import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles/CommunityPage.css';

function CommunityPage() {
  const { t, i18n, ready } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // Debug: Log current language and translations
  useEffect(() => {
    console.log('=== COMMUNITY PAGE DEBUG ===');
    console.log('Current language:', i18n.language);
    console.log('Translation ready:', ready);
    console.log('Community title translation:', t('community.title'));
    console.log('Education title translation:', t('community.education.title'));
    console.log('Cultural title translation:', t('community.cultural.title'));
    console.log('Available languages:', i18n.languages);
    console.log('All community translations:', {
      title: t('community.title'),
      education: t('community.education.title'),
      cultural: t('community.cultural.title'),
      wellness: t('community.wellness.title'),
      resources: t('community.resources.title'),
      events: t('community.events.title')
    });
    console.log('=== END DEBUG ===');
    
    // Update current language state to force re-render
    setCurrentLang(i18n.language);
  }, [i18n.language, t, ready]);

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

  // Don't render until translations are ready
  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="community-container" key={currentLang}>
      <h1 className="community-title">
        {t('community.title', 'Community')} - Current Language: {currentLang}
      </h1>
      
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