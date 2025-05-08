import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/NewsletterSignup.css';

const NewsletterSignup = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!email || !validateEmail(email)) {
      setStatus('error');
      setErrorMessage(t('newsletter.invalidEmail', 'Please enter a valid email address'));
      return;
    }

    if (!name) {
      setStatus('error');
      setErrorMessage(t('newsletter.invalidName', 'Please enter your name'));
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || t('newsletter.genericError', 'Something went wrong. Please try again later.'));
      }

      setStatus('success');
      setEmail('');
      setName('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || t('newsletter.genericError', 'Something went wrong. Please try again later.'));
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2>{t('newsletter.title', 'Stay Connected with African Heritage & History')}</h2>
        <p>{t('newsletter.description', 'Subscribe to our newsletter to receive updates about our projects, events, and resources that celebrate and preserve African heritage.')}</p>

        {status === 'success' ? (
          <div className="success-message">
            <h3>{t('newsletter.successTitle', 'Thank You for Subscribing!')}</h3>
            <p>{t('newsletter.successMessage', 'You\'re now part of our community. Watch your inbox for updates and news about African heritage and history.')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t('newsletter.nameLabel', 'Full Name')}</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('newsletter.namePlaceholder', 'Enter your full name')}
                  disabled={status === 'loading'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t('newsletter.emailLabel', 'Email Address')}</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.emailPlaceholder', 'Enter your email address')}
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="error-message">
                <p>{errorMessage}</p>
              </div>
            )}

            <button 
              type="submit" 
              className="subscribe-button"
              disabled={status === 'loading'}
            >
              {status === 'loading' 
                ? t('newsletter.submitting', 'Subscribing...') 
                : t('newsletter.submitButton', 'Subscribe')}
            </button>
          </form>
        )}
        
        <p className="privacy-note">{t('newsletter.privacyNote', 'We respect your privacy. Your information will never be shared with third parties.')}</p>
      </div>
    </section>
  );
};

export default NewsletterSignup;