import React, { useState } from 'react';
import './styles/CommunityPage.css';
import mmm2Logo from '../assets/mmm2Logo.png';
import sr1 from '../assets/sr1.jpg';
import sr2 from '../assets/sr2.jpg';
import sr3 from '../assets/sr3.jpg';
import sr4 from '../assets/sr4.jpg';
import sr5 from '../assets/sr5.jpg';

function CommunityPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const summerReadingImages = [
    { src: sr1, alt: 'Summer Reading Program 2024 - Photo 1' },
    { src: sr2, alt: 'Summer Reading Program 2024 - Photo 2' },
    { src: sr3, alt: 'Summer Reading Program 2024 - Photo 3' },
    { src: sr4, alt: 'Summer Reading Program 2024 - Photo 4' },
    { src: sr5, alt: 'Summer Reading Program 2024 - Photo 5' },
  ];
  return (
    <div className="community-container">
      <h1 className="community-title">Community</h1>
      {/* Community Events Section */}
      <div className="community-events-preview">
        <h2 className="section-title">Community Events</h2>
        <p className="section-description">
          Join us for cultural celebrations, educational workshops, and community gatherings 
          that strengthen our bonds and honor our shared heritage.
        </p>
        <div className="events-cta">
          <a href="/community-events" className="events-button">
            View All Community Events
          </a>
        </div>
      </div>
      <div className="summer-reading-section">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <img src={mmm2Logo} alt="Meyer Memorial Trust Logo" style={{ height: 48, marginRight: 12 }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Sponsored by Meyer Memorial Trust</span>
        </div>
        <h2 className="program-title">AFRHEEC Summer Reading Program – Program Overview</h2>
        <p className="program-description">
          AFRHEEC's <a href="/summer-reading-program-registration-2025" className="program-link">
            <strong>Summer Reading Program</strong>
          </a> is a culturally responsive, community-rooted initiative designed to support early literacy development for students in grades 1–3. Centered on the belief that every child deserves access to joyful, affirming, and effective learning, this program provides <strong>high-dosage tutoring</strong> rooted in the <strong>Science of Reading and Writing</strong>, with a strong focus on multilingual learners and children from historically underserved communities.
        </p>
        <p className="program-description">
          Through small group instruction (no more than four students per group), students receive <strong>targeted literacy support</strong> in decoding, fluency, vocabulary, and comprehension. Sessions are led by trained tutors who reflect the cultural and linguistic backgrounds of the students they serve. Learning is supported by engaging, culturally relevant materials and reinforced with storytelling, games, and family-focused literacy activities.
        </p>
        <p className="program-description">
          The program is designed to reduce summer learning loss and build foundational reading skills that prepare students for the upcoming school year—while also affirming students' identities, home languages, and community histories.
        </p>
        <h3 className="features-title">Key features include:</h3>
        <ul className="features-list">
          <li><strong>Twice-weekly tutoring sessions for 10 weeks</strong></li>
          <li><strong>Individualized progress tracking and literacy assessments</strong></li>
          <li><strong>Culturally and linguistically responsive curriculum</strong></li>
          <li><strong>Family engagement events, workshops, and take-home materials</strong></li>
          <li><strong>Snacks, transportation assistance, and bilingual communication for families</strong></li>
        </ul>
        <p className="program-description location-info">
          Held in trusted neighborhood spaces across the Willamette Valley—including Salem and Eugene—the program is <strong>free of charge</strong> and open to families in our service area.
        </p>
        {/* Summer Reading Program 2024 Album */}
        <div className="summer-reading-album">
          <h3 style={{ marginTop: 40, marginBottom: 16, color: '#6a994e' }}>Summer Reading Program 2024</h3>
          <div className="album-grid">
            {summerReadingImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="album-photo"
                onClick={() => setSelectedImage(img)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          <div style={{ marginTop: 18, textAlign: 'center' }}>
            <a
              href="https://forms.gle/FZcNL2ipoRudFn1b6"
              target="_blank"
              rel="noopener noreferrer"
              className="register-button"
              style={{ display: 'inline-block', marginTop: 10 }}
            >
              Register for the 2024 Summer Reading Program
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
          <a href="/summer-reading-program-registration-2025" className="register-button">
            Register Your Child Today
          </a>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;