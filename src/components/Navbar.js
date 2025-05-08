import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/Navbar.css';
import logo from '../assets/thandiwe4.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {i18n } = useTranslation();
  const { t } = useTranslation();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  // Replaces the three language buttons with a <select> dropdown
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt={('navbar.logoAlt', 'AFRHEEC Logo')} className="nav-logo" />
        </Link>
      </div>

      {/* Language Switcher as a dropdown */}
      <div className="language-switcher">
        <select
          value={i18n.language}              // current language
          onChange={(e) => changeLanguage(e.target.value)}
          aria-label="Select Language"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="sw">SW</option>
          <option value="zu">ZU</option>
        </select>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        &#9776;
      </button>

      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
      <li>
            <Link to="/" onClick={handleLinkClick}>
              {t('navbar.home', 'Home')}
            </Link>
          </li>
        <li>
            <Link to="/our-story" onClick={handleLinkClick}>
              {t('navbar.about', 'About Us')}
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>
              {t('navbar.services', 'Services')}
            </Link>
          </li>
          <li>
            <Link to="/support" onClick={handleLinkClick}>
              {t('navbar.support', 'Support')}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              {t('navbar.contact', 'Contact Us')}
            </Link>
          </li>
      </ul>
    </nav>
  );
}

export default Navbar;

