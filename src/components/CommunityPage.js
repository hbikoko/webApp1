import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CommunityPage.css';

function CommunityPage() {
  return (
    <div className="community-container">
      <h1 className="community-title">Community</h1>
      
      <div className="summer-reading-section">
        <h2 className="program-title">AFRHEEC Summer Reading Program – Program Overview</h2>
        
        <p className="program-description">
          AFRHEEC's <Link to="/summer-reading-program-registration-2025" className="program-link">
            <strong>Summer Reading Program</strong>
          </Link> is a culturally responsive, community-rooted initiative designed to support early literacy development for students in grades 1–3. Centered on the belief that every child deserves access to joyful, affirming, and effective learning, this program provides <strong>high-dosage tutoring</strong> rooted in the <strong>Science of Reading and Writing</strong>, with a strong focus on multilingual learners and children from historically underserved communities.
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

        <div className="cta-section">
          <Link to="/summer-reading-program-registration-2025" className="register-button">
            Register Your Child Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
