import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testSliderPic1 from '../assets/testSliderPic1.jpeg';
import testSliderPic2 from '../assets/testSliderPic2.png';
import './styles/HomePage.css';
import WWD from './WWD';
import NewsletterSignup from './NewsletterSignup';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="homepage">
      <Helmet>
        <title>{t('homepage.title', 'AFRHEEC - Empowering Communities')}</title>
        <meta
          name="description"
          content={t('homepage.description', 'Discover how AFRHEEC empowers communities through heritage preservation, education, and innovative projects.')}
        />
      </Helmet>

      <div className="slider-container">
        <Slider {...sliderSettings} className="homepage-slider">
          <div>
            <img src={testSliderPic1} alt={t('homepage.sliderAlt1', 'A joyful community celebrating under the open sky')} />
          </div>
          <div>
            <img src={testSliderPic2} alt={t('homepage.sliderAlt2', 'AFRHEEC project event showcasing happy participants')} />
          </div>
        </Slider>
      </div>

      <WWD />
      
      {/* Newsletter Signup Form */}
      <NewsletterSignup />
    </div>
  );
}

export default HomePage;