import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "./styles/ServicesPage.css";
import sankofa from "../assets/sankofa.png";
import africa from "../assets/africaMap.png";
import baobab from "../assets/baobabTree.png";
import adin from "../assets/adin.png";

function FlipCard({ frontContent, backContent }) {
  const isTouchDevice = window.matchMedia && window.matchMedia("(hover: none)").matches;
  const [flipped, setFlipped] = React.useState(false);

  const handleClick = () => {
    if (isTouchDevice) {
      setFlipped(prev => !prev);
    }
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="services-page">
      <div className="services-container">
        
        {/* Card 1: Heritage & History */}
        <div className="service-item">
          <FlipCard
            frontContent={
              <>
                <img src={africa} alt={t('services.heritageAlt', 'Heritage & History')} />
                <h2>{t('services.heritageTitle', 'Heritage & History')}</h2>
              </>
            }
            backContent={
              <>
                <div className="flip-card-back-content">
                  <p>
                    {t(
                      'services.heritageText',
                      'AFRHEEC, the African Heritage Education and Empowerment Community, is dedicated to exploring the rich history and cultural heritage of Africa and its enduring impact on the Black American experience.'
                    )}
                  </p>
                  <p>
                    {t(
                      'services.heritageText2',
                      'By exploring the historical journey of brutalized Africans terrorized into becoming Americans, AFRHEEC aims to foster a deeper understanding of the challenges and triumphs faced by Black communities today.'
                    )}
                  </p>
                  <p>
                    {t(
                      'services.heritageText3',
                      'Through initiatives focused on retracing ancestral roots, restoring cultural practices, building strong communities, and reclaiming authentic identities, AFRHEEC empowers individuals to connect with their African heritage. No matter their geographical displacement spurred by the African Diaspora.'
                    )}
                  </p>
                </div>
                <div className="flip-card-back-logo">
                  <Link to="/services/heritage-and-history">
                    <img src={africa} alt={t('services.heritageLogoAlt', 'Logo for Heritage & History')} />
                  </Link>
                </div>
              </>
            }
          />
        </div>

        {/* Card 2: Community */}
        <div className="service-item">
          <FlipCard
            frontContent={
              <>
                <img src={baobab} alt={t('services.communityAlt', 'Community')} />
                <h2>{t('services.communityTitle', 'Community')}</h2>
              </>
            }
            backContent={
              <>
                <div className="flip-card-back-content">
                  <p>
                    {t(
                      'services.communityText',
                      'AFRHEEC fosters strong communities by creating supportive environments for children and families, free from fear and discrimination.'
                    )}
                  </p>
                </div>
                <div className="flip-card-back-logo">
                  <Link to="/services/community">
                    <img src={baobab} alt={t('services.communityLogoAlt', 'Logo for Community')} />
                  </Link>
                </div>
              </>
            }
          />
        </div>

        {/* Card 3: Current Projects */}
        <div className="service-item">
          <FlipCard
            frontContent={
              <>
                <img src={adin} alt={t('services.currentProjectsAlt', 'Current Projects')} />
                <h2>{t('services.currentProjectsTitle', 'Current Projects')}</h2>
              </>
            }
            backContent={
              <>
                <div className="flip-card-back-content">
                  <p>
                    {t(
                      'services.currentProjectsText',
                      'AFRHEEC is dedicated to uplifting the Black community through education, culture, and empowerment. Learn more about our current initiatives.'
                    )}
                  </p>
                </div>
                <div className="flip-card-back-logo">
                  <Link to="/services/current-projects">
                    <img src={adin} alt={t('services.currentProjectsLogoAlt', 'Logo for Current Projects')} />
                  </Link>
                </div>
              </>
            }
          />
        </div>

        {/* Card 4: Policy & Positions */}
        <div className="service-item">
          <FlipCard
            frontContent={
              <>
                <img src={sankofa} alt={t('services.policyAlt', 'Policy & Positions')} />
                <h2>{t('services.policyTitle', 'Policy & Positions')}</h2>
              </>
            }
            backContent={
              <>
                <div className="flip-card-back-content">
                  <p>
                    {t(
                      'services.policyText.p1',
                      'AFRHEEC is committed to advocating for policies that promote justice, equity, and empowerment for the Black community.'
                    )}
                  </p>
                  <p>
                    {t(
                      'services.policyText.p2',
                      'To learn more about our stance on critical issues such as '
                    )}
                    <Link to="/services/policy-and-positions/immigration-reform">
                      {t('services.policyText.immigration', 'immigration reform')}
                    </Link>,{" "}
                    <Link to="/services/policy-and-positions/black-civil-rights">
                      {t('services.policyText.blackCivilRights', 'Black civil rights')}
                    </Link>,{" "}
                    <Link to="/services/policy-and-positions/voter-rights">
                      {t('services.policyText.voterRights', 'voter rights')}
                    </Link>, {t('services.policyText.andMore', 'and more, click the icon below to explore our policy positions and advocacy efforts.')}
                  </p>
                </div>
                <div className="flip-card-back-logo">
                  <Link to="/services/policy-and-positions">
                    <img src={sankofa} alt={t('services.policyLogoAlt', 'Logo for Policy & Positions')} />
                  </Link>
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
