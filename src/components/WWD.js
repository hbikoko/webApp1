import React from 'react';
import ServiceBlock from './ServiceBlock';
import './styles/WWD.css'; // Importing the CSS file
import economyIcon from '../assets/economyIcon.png';
import mentorshipIcon from '../assets/mentorshipIcon.jpeg';
import textbookIcon from '../assets/textbookIcon.jpeg';

const servicesData = [
  {
    icon: economyIcon,
    title: 'Economic Development',
    description: 'Lorem ipsum dolor sit amet, labore et dolore magna aliqua'
  },
  {
    icon: mentorshipIcon,
    title: 'Mentorship',
    description: 'Lorem ipsum dolor sit amet, labore et dolore magna aliqua'
  },
  {
    icon: textbookIcon,
    title: 'Education',
    description: 'Lorem ipsum dolor sit amet, labore et dolore magna aliqua'
  },
];

function WWD() {
  return (
    <div className="wwd-container">
      <h2 className="wwd-header">What We Do</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceBlock
            key={service.title} //for reconciliation
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <button className="wwd-read-more"><a href="/services">Read More About What We Do </a></button>
    </div>
  );
}

export default WWD;
