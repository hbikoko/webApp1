import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles/EducationPage.css';
import mmm2Logo from '../assets/mmm2Logo.png';
import sr1 from '../assets/sr1.jpg';
import sr2 from '../assets/sr2.jpg';
import sr3 from '../assets/sr3.jpg';
import sr4 from '../assets/sr4.jpg';
import sr5 from '../assets/sr5.jpg';

function EducationPage() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const summerReadingImages = [
    { src: sr1, alt: 'Summer Reading Program 2024 - Photo 1' },
    { src: sr2, alt: 'Summer Reading Program 2024 - Photo 2' },
    { src: sr3, alt: 'Summer Reading Program 2024 - Photo 3' },
    { src: sr4, alt: 'Summer Reading Program 2024 - Photo 4' },
    { src: sr5, alt: 'Summer Reading Program 2024 - Photo 5' },
  ];

  return (
    <div className="education-container">
      <h1 className="education-title">{t('education.title', 'Education')}</h1>
      
      <div className="education-content">
        <div className="summer-reading-section">
          <div className="grant-acknowledgment">
            <img src={mmm2Logo} alt="Meyer Memorial Trust Logo" className="grant-logo" />
            <span className="grant-text">
              {t('education.grantText', 'Grant provided by Meyer Memorial Trust')}
            </span>
          </div>
          
          <h2 className="program-title">
            {t('education.srpTitle', 'AFRHEEC Summer Reading Program – Program Overview')}
          </h2>
          
          <p className="program-description">
            {t('education.srpDescription1', 'AFRHEEC\'s')} 
            <Link to="/summer-reading-program-registration-2025" className="program-link">
              <strong>{t('education.srpLink', 'Summer Reading Program')}</strong>
            </Link> 
            {t('education.srpDescription2', 'is a culturally responsive, community-rooted initiative designed to support early literacy development for students in grades 1–3. Centered on the belief that every child deserves access to joyful, affirming, and effective learning, this program provides')} 
            <strong>{t('education.highDosage', 'high-dosage tutoring')}</strong> 
            {t('education.srpDescription3', 'rooted in the')} 
            <strong>{t('education.scienceOfReading', 'Science of Reading and Writing')}</strong>, 
            {t('education.srpDescription4', 'with a strong focus on multilingual learners and children from historically underserved communities.')}
          </p>
          
          <p className="program-description">
            {t('education.srpDescription5', 'Through small group instruction (no more than four students per group), students receive')} 
            <strong>{t('education.targetedSupport', 'targeted literacy support')}</strong> 
            {t('education.srpDescription6', 'in decoding, fluency, vocabulary, and comprehension. Sessions are led by trained tutors who reflect the cultural and linguistic backgrounds of the students they serve. Learning is supported by engaging, culturally relevant materials and reinforced with storytelling, games, and family-focused literacy activities.')}
          </p>
          
          <p className="program-description">
            {t('education.srpDescription7', 'The program is designed to reduce summer learning loss and build foundational reading skills that prepare students for the upcoming school year—while also affirming students\' identities, home languages, and community histories.')}
          </p>
          
          <h3 className="features-title">{t('education.keyFeatures', 'Key features include:')}</h3>
          <ul className="features-list">
            <li><strong>{t('education.feature1', 'Twice-weekly tutoring sessions for 10 weeks')}</strong></li>
            <li><strong>{t('education.feature2', 'Individualized progress tracking and literacy assessments')}</strong></li>
            <li><strong>{t('education.feature3', 'Culturally and linguistically responsive curriculum')}</strong></li>
            <li><strong>{t('education.feature4', 'Family engagement events, workshops, and take-home materials')}</strong></li>
            <li><strong>{t('education.feature5', 'Snacks, transportation assistance, and bilingual communication for families')}</strong></li>
          </ul>
          
          <p className="program-description location-info">
            {t('education.locationInfo', 'Held in trusted neighborhood spaces across the Willamette Valley—including Salem and Eugene—the program is')} 
            <strong>{t('education.freeOfCharge', 'free of charge')}</strong> 
            {t('education.locationInfo2', 'and open to families in our service area.')}
          </p>
          
          {/* Summer Reading Program 2024 Album */}
          <div className="summer-reading-album">
            <h3 className="album-title">{t('education.srp2024', 'Summer Reading Program 2024')}</h3>
            <div className="album-grid">
              {summerReadingImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className="album-photo"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className="album-cta">
              <a
                href="https://forms.gle/FZcNL2ipoRudFn1b6"
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                {t('education.register2025', 'Register for the 2025 Summer Reading Program')}
              </a>
            </div>
          </div>
          
          {/* Modal for album images */}
          {selectedImage && (
            <div className="image-modal" onClick={() => setSelectedImage(null)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="modal-image"
                />
                <p className="modal-caption">{selectedImage.alt}</p>
              </div>
            </div>
          )}
          
          <div className="cta-section">
            <Link to="/summer-reading-program-registration-2025" className="register-button">
              {t('education.registerChild', 'Register Your Child Today')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationPage; 