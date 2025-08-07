import React, { useState, useEffect } from 'react';
import './styles/CurrentProjectsPage.css';

function CurrentProjectsPage() {
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

  return (
    <div className="current-projects-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="page-title">Current Projects</h1>
        <p className="page-subtitle">
          Discover our active initiatives that are making a difference in our community. 
          From literacy programs to cultural events, we're building a stronger, more connected future.
        </p>
      </div>

      {/* Reading Program Card */}
      <div className="project-card">
        <div className="project-header">
          <div className="project-icon">📚</div>
          <h2 className="project-title">Reading Program</h2>
        </div>
        <p className="project-description">
          Our Reading Program is designed to support early literacy and foster a love of reading in our community. 
          Learn more about how we empower students and families through culturally responsive literacy initiatives 
          that honor our diverse backgrounds and create lasting educational foundations.
        </p>
        <a href="/services/community" className="project-link">
          ← Back to Community
        </a>
      </div>

      {/* Grants Section */}
      <div className="grants-section">
        <h3 className="grants-title">Grants & Funding</h3>
        <p className="grants-description">
          We gratefully acknowledge the support of our grant partners who make these projects possible. 
          Their generous contributions enable us to continue serving our community with high-quality programs 
          and services that make a real difference in people's lives.
        </p>
        <div className="grants-note">
          <strong>Current Grant Partners:</strong> We're proud to work with organizations that share our vision 
          for community empowerment and cultural preservation.
        </div>
      </div>
    </div>
  );
}

export default CurrentProjectsPage;
