// In HomePage.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import testSliderPic1 from '../assets/testSliderPic1.jpeg';
import testSliderPic2 from '../assets/testSliderPic2.png';
import './styles/HomePage.css';
import OrganizationOverview from './OrganizationOverview';
import WWD from './WWD';
import BlogPosts from './BlogSection';

function HomePage() {
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
        {/* Image Slider*/}
          <Slider {...sliderSettings}>
            <div>
                <img src={testSliderPic1} alt="First Slide" />
            </div>
            <div>
                <img src={testSliderPic2} alt="Second Slide" />
            </div>
            </Slider>
            <OrganizationOverview/>
            <WWD/>
            <BlogPosts/>
      </div>
    );
  }
  
  

export default HomePage;