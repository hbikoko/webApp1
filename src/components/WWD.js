import React from 'react';
import ServiceBlock from './ServiceBlock';
import './styles/WWD.css';
import { Link } from 'react-router-dom';

/* 
  IMPORTANT: The icons here should be images with TRANSPARENT backgrounds.
  That means if you had Africa.png with a white box, replace it with a 
  version that has no white box (e.g., Africa.png or .svg that has transparency).
*/
import africaIcon from '../assets/africaMap.png'; 
import treeIcon from '../assets/baobabTree.png';
import adinIcon from '../assets/adin.png';
import sankofaIcon from '../assets/sankofa.png';

/*
  If your original icons had white backgrounds, 
  you’d swap them for these new “-transparent” versions.
*/

const servicesData = [
  {
    // Make sure there's no extra period in the title
    icon: africaIcon,
    title: 'Heritage and History',
    path: '/services/heritage-and-history',
  },
  {
    icon: treeIcon,
    title: 'Community',
    path: '/services/community',
  },
  {
    icon: adinIcon,
    title: 'Current Projects',
    path: '/services/current-projects',
  },
  {
    icon: sankofaIcon,
    title: 'Policy and Positions',
    path: '/services/policy-and-positions',
  },
];

function WWD() {
  return (
    <div className="wwd-container">
      <h2 className="wwd-header">What We Do</h2>
      <div className="services-container">
        {servicesData.map((service) => (
          <Link to={service.path} key={service.title}>
            <ServiceBlock
              icon={service.icon}
              title={service.title}
            />
          </Link>
        ))}
      </div>
      <button className="wwd-read-more" aria-label="Read more about our services">
        <a href="/services">Read More About What We Do</a>
      </button>
    </div>
  );
}

export default WWD;
