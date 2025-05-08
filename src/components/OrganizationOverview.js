import React from 'react';
import './styles/OrganizationOverview.css'; // Make sure to create a corresponding CSS file

function OrganizationOverview() {
  return (
    <div className="organization-overview">
      <h2>We work to keep Africa alive stronger, longer through our work</h2>
      <p>AFRHEEC's mission is to... Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
      <p className="call-to-action">If you would like to invest in our mission, <a href="/donate">click here</a> now...</p>
    </div>
  );
}

export default OrganizationOverview;
