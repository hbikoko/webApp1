import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/SupportPage.css';

function SupportPage() {
  const { t } = useTranslation();

  return (
    <div className="support-container">
      <h1 className="support-title">{t('support.title', 'Support AFRHEEC')}</h1>
      
      <div className="support-intro">
        <p>{t('support.intro', 'AFRHEEC\'s work is made possible through the generous support of our partners, donors, and grant organizations. We are deeply grateful for their commitment to our mission of empowering African heritage communities through education and cultural preservation.')}</p>
      </div>

      <div className="support-sections">
        {/* Partners Section */}
        <div className="support-section">
          <h2 className="section-title">{t('support.partners.title', 'Partners')}</h2>
          <div className="section-content">
            <p>{t('support.partners.description', 'We are grateful for the collaboration of our community and organizational partners who work alongside us to create meaningful change in our communities.')}</p>
            <div className="partners-list">
              <div className="partner-item">
                <h3>{t('support.partners.community.title', 'Community Partners')}</h3>
                <p>{t('support.partners.community.description', 'Local organizations and community groups that help us reach and serve families effectively.')}</p>
              </div>
              <div className="partner-item">
                <h3>{t('support.partners.educational.title', 'Educational Partners')}</h3>
                <p>{t('support.partners.educational.description', 'Schools, libraries, and educational institutions that support our literacy and cultural programs.')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Donors Section */}
        <div className="support-section">
          <h2 className="section-title">{t('support.donors.title', 'Donors')}</h2>
          <div className="section-content">
            <p>{t('support.donors.description', 'Thank you to all our generous donors for supporting our mission. Your contributions directly impact the lives of families and children in our community.')}</p>
            <div className="donors-info">
              <h3>{t('support.donors.ways.title', 'Ways to Support')}</h3>
              <ul>
                <li>{t('support.donors.ways.monthly', 'Monthly recurring donations')}</li>
                <li>{t('support.donors.ways.oneTime', 'One-time gifts')}</li>
                <li>{t('support.donors.ways.memorial', 'Memorial and tribute gifts')}</li>
                <li>{t('support.donors.ways.legacy', 'Legacy giving')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grants Section */}
        <div className="support-section">
          <h2 className="section-title">{t('support.grants.title', 'Grants')}</h2>
          <div className="section-content">
            <p>{t('support.grants.description', 'Special thanks to the grant organizations that make our work possible. These partnerships enable us to develop and sustain our programs.')}</p>
            <div className="grants-info">
              <h3>{t('support.grants.current.title', 'Current Grant Support')}</h3>
              <p>{t('support.grants.current.description', 'We gratefully acknowledge the support of our grant partners who make these projects possible.')}</p>
              <div className="grant-programs">
                <div className="grant-program">
                  <h4>{t('support.grants.programs.reading.title', 'Summer Reading Program')}</h4>
                  <p>{t('support.grants.programs.reading.description', 'Supported by grants focused on early literacy and educational equity.')}</p>
                </div>
                <div className="grant-program">
                  <h4>{t('support.grants.programs.cultural.title', 'Cultural Heritage Programs')}</h4>
                  <p>{t('support.grants.programs.cultural.description', 'Funded through grants supporting cultural preservation and community engagement.')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="support-cta">
        <h2>{t('support.cta.title', 'Join Us in Making a Difference')}</h2>
        <p>{t('support.cta.description', 'Your support helps us continue our vital work in the community. Together, we can create lasting positive change.')}</p>
        <div className="cta-buttons">
          <a href="/donate" className="cta-button primary">{t('support.cta.donate', 'Donate Now')}</a>
          <a href="/contact" className="cta-button secondary">{t('support.cta.contact', 'Contact Us')}</a>
        </div>
      </div>
    </div>
  );
}

export default SupportPage; 