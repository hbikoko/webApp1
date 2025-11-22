import React from 'react';
import ServiceBlock from './ServiceBlock';
import './styles/WWD.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import africaIcon from '../assets/africaMap.png'; 
import treeIcon from '../assets/baobabTree.png';
import adinIcon from '../assets/adin.png';
import sankofaIcon from '../assets/sankofa.png';

const servicesData = [
  {
    key: 'heritageandhistory',
    icon: africaIcon,
    defaultTitle: 'Heritage and History',
    path: '/services/heritage-and-history',
    defaultDescription: 'Explore the rich cultural heritage and historical connections of African communities through educational programs, cultural preservation initiatives, and historical research.',
    keywords: ['African heritage', 'cultural history', 'African diaspora', 'heritage preservation', 'cultural education', 'African American history'],
  },
  {
    key: 'community',
    icon: treeIcon,
    defaultTitle: 'Community',
    path: '/services',
    defaultDescription: 'Build stronger, more connected communities through culturally responsive programs, family support services, and community engagement initiatives.',
    keywords: ['community building', 'cultural programs', 'family support', 'community engagement', 'African community', 'social services'],
  },
  {
    key: 'currentprojects',
    icon: adinIcon,
    defaultTitle: 'Current Projects',
    path: '/services/current-projects',
    defaultDescription: 'Discover our ongoing initiatives including the Summer Reading Program, educational workshops, and community development projects.',
    keywords: ['current projects', 'summer reading program', 'educational workshops', 'community development', 'literacy programs', 'AFRHEEC projects'],
  },
  {
    key: 'policyandpositions',
    icon: sankofaIcon,
    defaultTitle: 'Policy and Positions',
    path: '/services/policy-and-positions',
    defaultDescription: 'Advocate for policies that support African heritage communities, promote equity, and address systemic challenges faced by immigrant and refugee families.',
    keywords: ['policy advocacy', 'social justice', 'equity programs', 'immigrant rights', 'refugee support', 'African American policy'],
  },
];

function WWD() {
  const { t } = useTranslation();

  const services = servicesData.map((service) => {
    const title = t(`wwd.services.${service.key}.title`, service.defaultTitle);
    const description = t(
      `wwd.services.${service.key}.description`,
      service.defaultDescription
    );

    return { ...service, title, description };
  });

  // Structured data for services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AFRHEEC",
    "description": "African Heritage Education and Empowerment Community - Empowering African heritage communities through education, cultural programs, and essential resources.",
    "url": "https://afrheec.org",
    "logo": "https://afrheec.org/logo.png",
    "sameAs": [
      "https://facebook.com/afrheec",
      "https://twitter.com/afrheec",
      "https://instagram.com/afrheec"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AFRHEEC Services",
      "description": "Our comprehensive range of services for African heritage communities",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `https://afrheec.org${service.path}`,
          "provider": {
            "@type": "Organization",
            "name": "AFRHEEC"
          }
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>What We Do - AFRHEEC Services & Programs | Heritage, Community, Education</title>
        <meta name="description" content="Discover AFRHEEC's comprehensive services including heritage preservation, community building, current projects, and policy advocacy. Empowering African heritage communities through culturally responsive programs and essential resources." />
        <meta name="keywords" content="AFRHEEC services, African heritage programs, community building, cultural education, heritage preservation, African American programs, immigrant support, refugee services, cultural programs, educational workshops, summer reading program, policy advocacy" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AFRHEEC" />
        <meta name="language" content="English" />
        <meta property="og:title" content="What We Do - AFRHEEC Services & Programs" />
        <meta property="og:description" content="Discover AFRHEEC's comprehensive services including heritage preservation, community building, current projects, and policy advocacy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://afrheec.org/services" />
        <meta property="og:site_name" content="AFRHEEC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What We Do - AFRHEEC Services & Programs" />
        <meta name="twitter:description" content="Discover AFRHEEC's comprehensive services including heritage preservation, community building, current projects, and policy advocacy." />
        <meta name="twitter:site" content="@afrheec" />
        <link rel="canonical" href="https://afrheec.org/services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="wwd-container" aria-labelledby="what-we-do-title">
        <div className="container">
          <header className="wwd-header-section">
            <h1 id="what-we-do-title" className="wwd-header">
              {t('wwd.header', 'What We Do')}
            </h1>
            <p className="wwd-intro">
              {t(
                'wwd.intro',
                'AFRHEEC empowers African heritage communities through culturally responsive education, heritage preservation, community building, and essential support services. Our programs are designed to strengthen families, preserve cultural identity, and build resilient communities for future generations.'
              )}
            </p>
          </header>

          <section className="services-section" aria-labelledby="services-title">
            <h2 id="services-title" className="sr-only">Our Services</h2>
            <div className="services-container" role="list" aria-label="Our comprehensive services">
              {services.map((service) => (
                <article key={service.key} className="service-article" role="listitem">
                  <Link
                    to={service.path}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    aria-label={t('wwd.serviceAria', {
                      title: service.title,
                      description: service.description
                    })}
                    className="service-link"
                  >
                    <ServiceBlock
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <footer className="wwd-footer">
            <Link
              to="/services"
              className="wwd-read-more"
              aria-label="Read more about our comprehensive services and programs"
            >
              {t('wwd.readMore', 'Read More About What We Do')}
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
}

export default WWD;
