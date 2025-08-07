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
    <section className="wwd-container" aria-labelledby="what-we-do-title">
      <h2 id="what-we-do-title" className="wwd-header">
        {t('wwd.header', 'What We Do')}
      </h2>

      <div className="services-container" role="list" aria-label="Our services">
        {servicesData.map((service, index) => (
          <div key={service.title} role="listitem">
            <Link
              to={service.path}
              style={{ textDecoration: 'none', color: 'inherit' }}
              aria-label={`Learn more about ${service.title}`}
            >
              <ServiceBlock
                icon={service.icon}
                title={t(
                  `wwd.${service.title.replace(/\s+/g, '').toLowerCase()}`,
                  service.title
                )}
              />
            </Link>
          </div>
        ))}
      </div>

      <Link
        to="/services"
        className="wwd-read-more"
        aria-label="Read more about our services"
      >
        {t('wwd.readMore', 'Read More About What We Do')}
      </Link>
    </section>
  );
}

export default WWD;

