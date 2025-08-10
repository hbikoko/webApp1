import React, { useState, useEffect } from 'react';
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
  const [selectedAlbum, setSelectedAlbum] = useState(null);

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

  const handleImageClick = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
  };

  // Album data
  const albums = {
    flyers: {
      title: "Event Flyers",
      description: "Multilingual event announcements and promotional materials",
      coverImage: mdEnglish,
      photos: [
        { src: mdEnglish, alt: "Motherland Mother's Day - English Flyer" },
        { src: mdFrench, alt: "Motherland Mother's Day - French Flyer" },
        { src: mdSwahili, alt: "Motherland Mother's Day - Swahili Flyer" }
      ]
    },
    eventPhotos: {
      title: "Event Photos",
      description: "Photos from the Motherland Mother's Day celebration",
      coverImage: mDay1,
      photos: [
        { src: mDay1, alt: "Motherland Mother's Day - Album Photo 1" },
        { src: mDay2, alt: "Motherland Mother's Day - Album Photo 2" },
        { src: mDay3, alt: "Motherland Mother's Day - Album Photo 3" },
        { src: mDay4, alt: "Motherland Mother's Day - Album Photo 4" },
        { src: mDay5, alt: "Motherland Mother's Day - Album Photo 5" },
        { src: mDay6, alt: "Motherland Mother's Day - Album Photo 6" },
        { src: mDay7, alt: "Motherland Mother's Day - Album Photo 7" },
        { src: mDay8, alt: "Motherland Mother's Day - Album Photo 8" },
        { src: mDay9, alt: "Motherland Mother's Day - Album Photo 9" }
      ]
    }
  };

  const renderAlbumCover = (albumKey, album) => (
    <div 
      key={albumKey}
      className="album-cover"
      onClick={() => setSelectedAlbum(albumKey)}
    >
      <div className="album-preview">
        <img 
          src={album.coverImage} 
          alt={album.title}
          className="album-cover-image"
        />
        <div className="album-overlay">
          <div className="album-info">
            <h3>{album.title}</h3>
            <p>{album.description}</p>
            <span className="photo-count">{album.photos.length} photos</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAlbumView = (albumKey, album) => (
    <div className="album-view">
      <div className="album-header">
        <button className="back-button" onClick={closeAlbum}>
          ← Back to Albums
        </button>
        <h2>{album.title}</h2>
        <p>{album.description}</p>
      </div>
      <div className="album-grid">
        {album.photos.map((photo, index) => (
          <div 
            key={index}
            className="album-photo"
            onClick={() => handleImageClick(photo.src, photo.alt)}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="album-photo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );

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
            {/* Photo Albums Section */}
            {!selectedAlbum ? (
              <div className="photo-albums">
                <h3 className="albums-title">Photo Albums</h3>
                <div className="albums-grid">
                  {renderAlbumCover('flyers', albums.flyers)}
                  {renderAlbumCover('eventPhotos', albums.eventPhotos)}
                </div>
              </div>
            ) : (
              renderAlbumView(selectedAlbum, albums[selectedAlbum])
            )}
            
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
