import React, { useState } from 'react';
import './styles/CommunityEvents.css';
import mdEnglish from '../assets/mdEnglish.png';
import mdFrench from '../assets/mdFrench.jpg';
import mdSwahili from '../assets/mdSwahili.jpg';
import mDay1 from '../assets/mDay1.jpg';
import mDay2 from '../assets/mDay2.jpg';
import mDay3 from '../assets/mDay3.jpg';
import mDay4 from '../assets/mDay4.jpg';
import mDay5 from '../assets/mDay5.jpg';
import mDay6 from '../assets/mDay6.jpg';
import mDay7 from '../assets/mDay7.jpg';
import mDay8 from '../assets/mDay8.jpg';
import mDay9 from '../assets/mDay9.jpg';

function CommunityEvents() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="community-events-container">
      <div className="header-section">
        <h1 className="page-title">Community Events</h1>
        <p className="page-subtitle">
          Join us for cultural celebrations, educational workshops, and community gatherings 
          that strengthen our bonds and honor our shared heritage.
        </p>
      </div>

      {/* Past Events Section */}
      <section className="events-section">
        <h2 className="section-title">Recent Events</h2>
        
        {/* Motherland Mother's Day Event */}
        <div className="event-card past-event">
          <div className="event-header">
            <h3 className="event-title">A Motherland Mother's Day</h3>
            <span className="event-date">May 10, 2025</span>
            <span className="event-status past">Past Event</span>
          </div>
          
          <div className="event-content">
            <div className="event-images">
              <img 
                src={mdEnglish} 
                alt="Motherland Mother's Day - Traditional African celebration" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mdEnglish, 'Motherland Mother\'s Day - Traditional African celebration')}
              />
              <img 
                src={mdFrench} 
                alt="Motherland Mother's Day - French celebration" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mdFrench, 'Motherland Mother\'s Day - French celebration')}
              />
              <img 
                src={mdSwahili} 
                alt="Motherland Mother's Day - Elegant floral celebration" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mdSwahili, 'Motherland Mother\'s Day - Elegant floral celebration')}
              />
              <img 
                src={mDay1} 
                alt="Motherland Mother's Day - Album Photo 1" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mDay1, 'Motherland Mother\'s Day - Album Photo 1')}
              />
              <img 
                src={mDay2} 
                alt="Motherland Mother's Day - Album Photo 2" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mDay2, 'Motherland Mother\'s Day - Album Photo 2')}
              />
              <img 
                src={mDay3} 
                alt="Motherland Mother's Day - Album Photo 3" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mDay3, 'Motherland Mother\'s Day - Album Photo 3')}
              />
              <img 
                src={mDay4} 
                alt="Motherland Mother's Day - Album Photo 4" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mDay4, 'Motherland Mother\'s Day - Album Photo 4')}
              />
              <img 
                src={mDay5} 
                alt="Motherland Mother's Day - Album Photo 5" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mDay5, 'Motherland Mother\'s Day - Album Photo 5')}
              />
              <img 
                src={mDay6} 
                alt="Motherland Mother's Day - Album Photo 6" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mDay6, 'Motherland Mother\'s Day - Album Photo 6')}
              />
              <img 
                src={mDay7} 
                alt="Motherland Mother's Day - Album Photo 7" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mDay7, 'Motherland Mother\'s Day - Album Photo 7')}
              />
              <img 
                src={mDay8} 
                alt="Motherland Mother's Day - Album Photo 8" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mDay8, 'Motherland Mother\'s Day - Album Photo 8')}
              />
              <img 
                src={mDay9} 
                alt="Motherland Mother's Day - Album Photo 9" 
                className="event-image clickable-image" 
                onClick={() => handleImageClick(mDay9, 'Motherland Mother\'s Day - Album Photo 9')}
              />
            </div>
            
            <div className="event-details">
              <div className="event-info">
                <p><strong>Location:</strong> AMAFA Center Community Room, Salem, Oregon</p>
                <p><strong>Time:</strong> 11:00 AM - 2:00 PM</p>
                <p><strong>Hosted by:</strong> AFRHEEC | In partnership with Engage Northwest</p>
              </div>
              
              <div className="event-description">
                <p>
                  We celebrated an afternoon of joy, connection, and community as AFRHEEC honored 
                  the heart of our community—<strong>our mothers</strong>. This special event was 
                  a tribute to the love, strength, and sacrifice that mothers bring to every generation.
                </p>
                
                <p>
                  <strong>A Motherland Mother's Day</strong> was a community luncheon that embraced 
                  the rich cultural traditions of motherhood, especially for those beginning new 
                  chapters as immigrants and refugees. We created a space that felt like home—with 
                  <strong>flavorful food, refreshing drinks, uplifting music, and the shared joy of belonging</strong>.
                </p>
                
                <blockquote className="event-quote">
                  "All were welcome—dressed to celebrate, bringing stories, laughter, and spirit. 
                  The day was filled with good vibes, warm company, and moments that will stay with us."
                </blockquote>
                
                <p className="thanks-note">
                  <em>Special thanks to our partners at Engage Northwest for generously providing 
                  the space that made this celebration possible.</em>
                </p>
              </div>
              
              <div className="event-languages">
                <h4>Multilingual Celebration</h4>
                <p>This event was celebrated in multiple languages, honoring our diverse community:</p>
                <ul>
                  <li><strong>Swahili:</strong> "Siku ya Mama" (Mother's Day)</li>
                  <li><strong>French:</strong> "Fête des Mères" (Mother's Day)</li>
                  <li><strong>English:</strong> Mother's Day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="no-events-message">
          <p>Stay tuned for our next community celebrations! Follow us on social media or contact us to stay updated on upcoming events.</p>
          <div className="contact-info">
            <p><strong>RSVP & Information:</strong> (971) 239-4693</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Want to Get Involved?</h2>
        <p>
          Our community events are made possible through partnerships, volunteers, and the 
          participation of families like yours. Contact us to learn about volunteering 
          opportunities or hosting future events.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="cta-button primary">Contact Us</a>
          <a href="/community" className="cta-button secondary">Back to Community</a>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image"
            />
            <p className="modal-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunityEvents;