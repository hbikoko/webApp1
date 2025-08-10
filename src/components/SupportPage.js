import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/SupportPage.css';
import mmm2Logo from '../assets/mmm2Logo.png';
import VolunteerForm from './VolunteerForm';

function SupportPage() {
  const { t } = useTranslation();

  return (
    <div className="support-container">
      <h1 className="support-title">{t('support.title', 'Support')}</h1>
      
      <div className="support-intro">
        <p>{t('support.intro', 'Your support helps us continue our mission of empowering African heritage communities through education, cultural programs, and essential resources.')}</p>
      </div>

      <div className="support-sections">
        {/* Grants Awarded Section */}
        <div className="support-section">
          <h2 className="section-title">{t('support.grantsAwarded.title', 'Grants Awarded')}</h2>
          <div className="section-content">
            <p>{t('support.grantsAwarded.description', 'We are grateful for the generous support of our grant partners who help make our programs possible.')}</p>
            
            <div className="grants-list">
              <div className="grant-item">
                <img src={mmm2Logo} alt="Meyer Memorial Trust Logo" className="grant-logo" />
                <div className="grant-info">
                  <h3>{t('support.grantsAwarded.meyerTrust.name', 'Meyer Memorial Trust')}</h3>
                  <p>{t('support.grantsAwarded.meyerTrust.description', 'Grant support for our Summer Reading Program, enabling culturally responsive literacy development for children in grades 1-3.')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Partners Section */}
        <div className="support-section">
          <h2 className="section-title">{t('support.communityPartners.title', 'Community Partners')}</h2>
          <div className="section-content">
            <p>{t('support.communityPartners.description', 'We collaborate with community organizations, schools, and local partners to deliver our programs and services effectively.')}</p>
            
            <div className="partners-list">
              <div className="partner-item">
                <h3>{t('support.communityPartners.schools.name', 'Local Schools')}</h3>
                <p>{t('support.communityPartners.schools.description', 'Partnerships with schools across the Willamette Valley to support student success and family engagement.')}</p>
              </div>
              
              <div className="partner-item">
                <h3>{t('support.communityPartners.community.name', 'Community Organizations')}</h3>
                <p>{t('support.communityPartners.community.description', 'Collaborations with local organizations to provide comprehensive support services and cultural programming.')}</p>
              </div>
              
              <div className="partner-item">
                <h3>{t('support.communityPartners.families.name', 'Family Networks')}</h3>
                <p>{t('support.communityPartners.families.description', 'Strong connections with family networks to ensure our programs meet the real needs of our community.')}</p>
              </div>
              
              <div className="partner-item">
                <h3>{t('support.communityPartners.volunteers.name', 'Volunteer Network')}</h3>
                <p>{t('support.communityPartners.volunteers.description', 'Dedicated volunteers who contribute their time and expertise to support our mission and programs.')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer Form Section */}
        <div className="support-section volunteer-section">
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
}

export default SupportPage; 