import React from 'react';

function ServiceBlock({ icon, title, description }) {
  return (
    <article className="service-block">
      <img src={icon} alt={`${title} service icon`} aria-hidden="true" />
      <h3 className="service-title">{title}</h3>
      {description && (
        <p className="service-description">
          {description}
        </p>
      )}
    </article>
  );
}

export default ServiceBlock;
