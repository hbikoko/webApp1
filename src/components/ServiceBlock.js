import React from 'react';

function ServiceBlock({ icon, title, description }) {
  return (
    <div className="service-block">
      <img src={icon} alt={`${title} icon`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceBlock;
