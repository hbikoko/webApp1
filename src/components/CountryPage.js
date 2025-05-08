// src/components/CountryPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { countryData } from '../data/countryData';
import './styles/CountryPage.css';

const CountryPage = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  
  // For the /africa/countryName route, extract the country name
  const decodedCountryName = decodeURIComponent(countryName);
  
  // Look up the country data
  const country = countryData[decodedCountryName];
  
  // If country isn't found in our data
  if (!country) {
    return (
      <div className="country-not-found">
        <h1>Country Information Not Available</h1>
        <p>We don't have information for {decodedCountryName} yet.</p>
        <button onClick={() => navigate('/')}>Return to Homepage</button>
      </div>
    );
  }
  
  return (
    <div className="country-page">
      <div className="country-header">
        <h1>{country.name}</h1>
      </div>
      
      <div className="country-content">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${country.videoId}`}
            title={`${country.name} video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="country-description">
          <p>{country.description}</p>
        </div>
      </div>
      
      <div className="back-button-container">
        <button onClick={() => navigate('/')}>Return to Map</button>
      </div>
    </div>
  );
};

export default CountryPage;