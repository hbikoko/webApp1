import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/Navbar.css';
import logo from '../assets/thandiwe4.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {i18n } = useTranslation();
  const { t } = useTranslation();
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      hamburgerRef.current?.focus();
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen, handleKeyDown]);

  // Replaces the three language buttons with a <select> dropdown
  const changeLanguage = (lng) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
    console.log('Language changed to:', i18n.language);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-brand">
        <Link to="/" onClick={handleLinkClick} aria-label="Go to homepage">
          <img src={logo} alt={t('navbar.logoAlt', 'AFRHEEC Logo')} className="nav-logo" />
        </Link>
      </div>

      {/* Language Switcher as a dropdown */}
      <div className="language-switcher">
        <label htmlFor="language-select" className="sr-only">Select Language</label>
        <select
          id="language-select"
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          aria-label="Select Language"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="sw">SW</option>
          <option value="zu">ZU</option>
        </select>
      </div>

      <button 
        className="hamburger" 
        onClick={toggleMenu} 
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        ref={hamburgerRef}
      >
        <span className="sr-only">Menu</span>
        &#9776;
      </button>

      <ul 
        className={`nav-menu ${menuOpen ? 'show' : ''}`}
        id="nav-menu"
        ref={menuRef}
        role="menubar"
        aria-label="Main menu"
      >
        <li role="none">
          <Link 
            to="/" 
            onClick={handleLinkClick}
            role="menuitem"
            tabIndex={menuOpen ? 0 : -1}
          >
            {t('navbar.home', 'Home')}
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/about-us" 
            onClick={handleLinkClick}
            role="menuitem"
            tabIndex={menuOpen ? 0 : -1}
          >
            {t('navbar.about', 'About Us')}
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/services" 
            onClick={handleLinkClick}
            role="menuitem"
            tabIndex={menuOpen ? 0 : -1}
          >
            {t('navbar.services', 'Services')}
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/support" 
            onClick={handleLinkClick}
            role="menuitem"
            tabIndex={menuOpen ? 0 : -1}
          >
            {t('navbar.support', 'Support')}
          </Link>
        </li>
        <li role="none">
          <Link 
            to="/contact" 
            onClick={handleLinkClick}
            role="menuitem"
            tabIndex={menuOpen ? 0 : -1}
          >
            {t('navbar.contact', 'Contact Us')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

