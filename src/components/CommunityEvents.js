import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const languageLabels = [
    { key: 'swahili', defaultLabel: 'Swahili: "Siku ya Mama" (Mother\'s Day)' },
    { key: 'french', defaultLabel: 'French: "Fête des Mères" (Mother\'s Day)' },
    { key: 'english', defaultLabel: 'English: Mother\'s Day' }
  ].map((item) => ({
    key: item.key,
    label: t(`communityEvents.mothersDay.languages.${item.key}`, item.defaultLabel)
  }));

  const albumsData = [
    {
      key: 'flyers',
      titleKey: 'communityEvents.flyers.title',
      descriptionKey: 'communityEvents.flyers.description',
      coverImage: mdEnglish,
      defaultTitle: 'Event Flyers',
      defaultDescription: 'Multilingual event announcements and promotional materials',
      photos: [
        { src: mdEnglish, altKey: 'communityEvents.flyers.photos.englishAlt', defaultAlt: 'Motherland Mother\'s Day - English Flyer' },
        { src: mdFrench, altKey: 'communityEvents.flyers.photos.frenchAlt', defaultAlt: 'Motherland Mother\'s Day - French Flyer' },
        { src: mdSwahili, altKey: 'communityEvents.flyers.photos.swahiliAlt', defaultAlt: 'Motherland Mother\'s Day - Swahili Flyer' }
      ]
    },
    {
      key: 'eventPhotos',
      titleKey: 'communityEvents.eventPhotos.title',
      descriptionKey: 'communityEvents.eventPhotos.description',
      coverImage: mDay1,
      defaultTitle: 'Event Photos',
      defaultDescription: 'Photos from the Motherland Mother\'s Day celebration',
      photos: [
        { src: mDay1, altKey: 'communityEvents.eventPhotos.photos.photo1Alt', defaultAlt: 'Motherland Mother\'s Day - Album Photo 1' },
        { src: mDay2, altKey: 'communityEvents.eventPhotos.photos.photo2Alt', defaultAlt: 'Motherland Mother\'s Day - Album Photo 2' },
        { src: mDay3, altKey: 'communityEvents.eventPhotos.photos.photo3Alt', defaultAlt: 'Motherland Mother\'s Day - Album Photo 3' },
        { src: mDay4, altKey: 'communityEvents.eventPhotos.photos.photo4Alt', defaultAlt: 'Motherland Mother\'s Day - Album Photo 4' },
        { src: mDay5, altKey: 'communityEvents.eventPhotos.photos.photo5Alt', defaultAlt: 'Motherland Mother\'s Day - Album Photo 5' },
        { src: mDay6, altKey: 'communityEvents.eventPhotos.photos.photo6Alt', defaultAlt: 'Motherland Mother\'s Day - Album Photo 6' },
        { src: mDay7, altKey: 'communityEvents.eventPhotos.photos.photo7Alt', defaultAlt: 'Motherland Mother\'s Day - Album Photo 7' },
        { src: mDay8, altKey: 'communityEvents.eventPhotos.photos.photo8Alt', defaultAlt: 'Motherland Mother\'s Day - Album Photo 8' },
        { src: mDay9, altKey: 'communityEvents.eventPhotos.photos.photo9Alt', defaultAlt: 'Motherland Mother\'s Day - Album Photo 9' }
      ]
    }
  ];

  const albums = albumsData.map((album) => ({
    ...album,
    title: t(album.titleKey, album.defaultTitle),
    description: t(album.descriptionKey, album.defaultDescription),
    photos: album.photos.map((photo) => ({
      src: photo.src,
      alt: t(photo.altKey, photo.defaultAlt)
    }))
  }));

  const eventDetails = {
    title: t('communityEvents.mothersDay.title', "A Motherland Mother's Day"),
    date: t('communityEvents.mothersDay.date', 'May 10, 2025'),
    status: t('communityEvents.mothersDay.statusPast', 'Past Event'),
    locationLabel: t('communityEvents.labels.location', 'Location:'),
    locationValue: t('communityEvents.mothersDay.location', 'AMAFA Center Community Room, Salem, Oregon'),
    timeLabel: t('communityEvents.labels.time', 'Time:'),
    timeValue: t('communityEvents.mothersDay.time', '11:00 AM - 2:00 PM'),
    hostedLabel: t('communityEvents.labels.hostedBy', 'Hosted by:'),
    hostedValue: t('communityEvents.mothersDay.hostedBy', 'AFRHEEC | In partnership with Engage Northwest'),
    intro1: t(
      'communityEvents.mothersDay.intro1',
      'We celebrated an afternoon of joy, connection, and community as AFRHEEC honored the heart of our community—our mothers. This special event was a tribute to the love, strength, and sacrifice that mothers bring to every generation.'
    ),
    intro2: t(
      'communityEvents.mothersDay.intro2',
      'A Motherland Mother\'s Day was a community luncheon that embraced the rich cultural traditions of motherhood, especially for those beginning new chapters as immigrants and refugees. We created a space that felt like home—with flavorful food, refreshing drinks, uplifting music, and the shared joy of belonging.'
    ),
    quote: t(
      'communityEvents.mothersDay.quote',
      '"All were welcome—dressed to celebrate, bringing stories, laughter, and spirit. The day was filled with good vibes, warm company, and moments that will stay with us."'
    ),
    thanks: t(
      'communityEvents.mothersDay.thanks',
      'Special thanks to our partners at Engage Northwest for generously providing the space that made this celebration possible.'
    ),
    languagesTitle: t('communityEvents.mothersDay.languagesTitle', 'Multilingual Celebration'),
    languagesIntro: t(
      'communityEvents.mothersDay.languagesIntro',
      'This event was celebrated in multiple languages, honoring our diverse community:'
    )
  };

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
            <span className="photo-count">
              {t('communityEvents.photoCount', {
                count: album.photos.length,
                defaultValue: `${album.photos.length} photos`
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAlbumView = (albumKey, album) => (
    <div className="album-view">
      <div className="album-header">
        <button className="back-button" onClick={closeAlbum}>
          {t('communityEvents.backToAlbums', '← Back to Albums')}
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
        <h1 className="page-title">{t('communityEvents.pageTitle', 'Community Events')}</h1>
        <p className="page-subtitle">
          {t(
            'communityEvents.subtitle',
            'Join us for cultural celebrations, educational workshops, and community gatherings that strengthen our bonds and honor our shared heritage.'
          )}
        </p>
      </div>

      {/* Past Events Section */}
      <section className="events-section">
        <h2 className="section-title">{t('communityEvents.recentTitle', 'Recent Events')}</h2>
        
        {/* Motherland Mother's Day Event */}
        <div className="event-card past-event">
          <div className="event-header">
            <h3 className="event-title">{eventDetails.title}</h3>
            <span className="event-date">{eventDetails.date}</span>
            <span className="event-status past">{eventDetails.status}</span>
          </div>
          
          <div className="event-content">
            {/* Photo Albums Section */}
            {!selectedAlbum ? (
              <div className="photo-albums">
                <h3 className="albums-title">{t('communityEvents.photoAlbumsTitle', 'Photo Albums')}</h3>
                <div className="albums-grid">
                  {albums.map((album) => renderAlbumCover(album.key, album))}
                </div>
              </div>
            ) : (
              (() => {
                const album = albums.find((a) => a.key === selectedAlbum);
                return album ? renderAlbumView(selectedAlbum, album) : null;
              })()
            )}
            
            <div className="event-details">
              <div className="event-info">
                <p><strong>{eventDetails.locationLabel}</strong> {eventDetails.locationValue}</p>
                <p><strong>{eventDetails.timeLabel}</strong> {eventDetails.timeValue}</p>
                <p><strong>{eventDetails.hostedLabel}</strong> {eventDetails.hostedValue}</p>
              </div>
              
              <div className="event-description">
                <p>{eventDetails.intro1}</p>
                <p>{eventDetails.intro2}</p>
                <blockquote className="event-quote">
                  {eventDetails.quote}
                </blockquote>
                <p className="thanks-note">
                  <em>{eventDetails.thanks}</em>
                </p>
              </div>
              
              <div className="event-languages">
                <h4>{eventDetails.languagesTitle}</h4>
                <p>{eventDetails.languagesIntro}</p>
                <ul>
                  {languageLabels.map((lang) => (
                    <li key={lang.key}>{lang.label}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2 className="section-title">{t('communityEvents.upcomingTitle', 'Upcoming Events')}</h2>
        <div className="no-events-message">
          <p>
            {t(
              'communityEvents.upcomingMessage',
              'Stay tuned for our next community celebrations! Follow us on social media or contact us to stay updated on upcoming events.'
            )}
          </p>
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
