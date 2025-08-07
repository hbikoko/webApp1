import React from 'react';

function ServiceBlock({ icon, title, description }) {
  return (
    <article className="service-block">
      <img src={icon} alt={`${title} icon`} aria-hidden="true" />
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </article>
  );
}

export default ServiceBlock;
