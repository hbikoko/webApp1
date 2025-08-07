import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles/AboutUsPage.css';

function AboutUsPage() {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    // Force immediate scroll to top with instant behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Also scroll after a short delay to ensure it takes effect
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">{t('aboutUs.title', 'About Us')}</h1>
      
      <div className="about-us-content">
        <p className="about-us-paragraph">
          {t('aboutUs.mission', 'The African Heritage Education and Empowerment Community (AFRHEEC) is a nonprofit organization with a powerful mission: to serve as an Educational, Cultural, and Resource Center rooted in Afro-centric principles. AFRHEEC is committed to empowering Black diaspora, African, and African American communities—including immigrant and refugee families—through culturally grounded education, wellness practices, and access to essential resources.')}
        </p>

        <p className="about-us-paragraph">
          {t('aboutUs.history', 'Since its inception, AFRHEEC has prioritized early literacy, culturally specific community events, and family-centered programming in Laine, Marion, Multnomah, and Washington counties in Oregon. Our focus is on healing-centered engagement, traditional foodways, mental health support, and parenting education tailored for families navigating new cultural terrain in the United States.')}
        </p>

        <p className="about-us-paragraph">
          {t('aboutUs.approach', 'With an approach that is holistic and community-informed, AFRHEEC recognizes the unique challenges refugee and immigrant families face, especially in parenting across cultures, learning a new language, and adapting to a new environment and vastly different culture. We aim to fill gaps to support all black identifying families through programs that are accessible, nurturing, and culturally relevant.')}
        </p>
      </div>

      <div className="about-us-links">
        <Link to="/board-of-directors" className="board-link">
          {t('aboutUs.boardLink', 'Meet Our Board of Directors')}
        </Link>
      </div>
    </div>
  );
}

export default AboutUsPage; 