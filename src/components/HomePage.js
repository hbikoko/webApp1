import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testSliderPic1 from '../assets/testSliderPic1.jpeg';
import testSliderPic2 from '../assets/testSliderPic2.png';
import './styles/HomePage.css';
import WWD from './WWD';
import { Helmet } from 'react-helmet-async';

function HomePage() {
  useEffect(() => {
    // Define the callback that Google Translate will call once the script loads
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      }, 'google_translate_element');
    };

    // Create and inject the Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
  }, []);

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
        <title>AFRHEEC - Empowering Communities</title>
        <meta
          name="description"
          content="Discover how AFRHEEC empowers communities through heritage preservation, education, and innovative projects."
        />
      </Helmet>

      {/* Google Translate widget container positioned at top right */}
      <div 
        id="google_translate_element" 
        style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}
      ></div>

      {/* Image Slider */}
      <div className="slider-container">
        <Slider {...sliderSettings} className="homepage-slider">
          <div>
            <img src={testSliderPic1} alt="A joyful community celebrating under the open sky" />
          </div>
          <div>
            <img src={testSliderPic2} alt="AFRHEEC project event showcasing happy participants" />
          </div>
        </Slider>
      </div>

      {/* Other sections */}
      {/* <OrganizationOverview /> */}
      {/* <BlogPosts /> */}
      <WWD />
    </div>
  );
}

export default HomePage;
