import React from 'react';
import ServiceBlock from './ServiceBlock';
import './styles/WWD.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import africaIcon from '../assets/africaMap.png'; 
import treeIcon from '../assets/baobabTree.png';
import adinIcon from '../assets/adin.png';
import sankofaIcon from '../assets/sankofa.png';

const servicesData = [
  {
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
  const { t } = useTranslation();

  return (
    <div className="wwd-container">
      <h2 className="wwd-header">
        {t('wwd.header', 'What We Do')}
      </h2>

      <div className="services-container">
        {servicesData.map((service) => (
          <Link
            to={service.path}
            key={service.title}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ServiceBlock
              icon={service.icon}
              title={t(
                `wwd.${service.title.replace(/\s+/g, '').toLowerCase()}`,
                service.title
              )}
            />
          </Link>
        ))}
      </div>

      {/* → Use Link directly as the “button” element */}
      <Link
        to="/services"
        className="wwd-read-more"
        aria-label="Read more about our services"
      >
        {t('wwd.readMore', 'Read More About What We Do')}
      </Link>
    </div>
  );
}

export default WWD;

