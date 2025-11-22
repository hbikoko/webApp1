import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/VolunteerForm.css';

function VolunteerForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [],
    availability: '',
    experience: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const interestOptions = [
    { key: 'educationPrograms', defaultLabel: 'Education Programs' },
    { key: 'culturalEvents', defaultLabel: 'Cultural Events' },
    { key: 'communityOutreach', defaultLabel: 'Community Outreach' },
    { key: 'administrativeSupport', defaultLabel: 'Administrative Support' },
    { key: 'eventPlanning', defaultLabel: 'Event Planning' },
    { key: 'translationServices', defaultLabel: 'Translation Services' },
    { key: 'youthPrograms', defaultLabel: 'Youth Programs' },
    { key: 'familySupport', defaultLabel: 'Family Support' }
  ];

  const availabilityOptions = [
    { key: 'weekdays', defaultLabel: 'Weekdays' },
    { key: 'weekends', defaultLabel: 'Weekends' },
    { key: 'evenings', defaultLabel: 'Evenings' },
    { key: 'flexible', defaultLabel: 'Flexible' },
    { key: 'specialEvents', defaultLabel: 'Special Events Only' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (interestKey) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestKey)
        ? prev.interests.filter(item => item !== interestKey)
        : [...prev.interests, interestKey]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = t('volunteerForm.validation.firstNameRequired', 'First name is required');
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('volunteerForm.validation.lastNameRequired', 'Last name is required');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('volunteerForm.validation.emailRequired', 'Email is required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('volunteerForm.validation.emailInvalid', 'Please enter a valid email address');
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t('volunteerForm.validation.phoneRequired', 'Phone number is required');
    }
    
    if (formData.interests.length === 0) {
      newErrors.interests = t('volunteerForm.validation.interestsRequired', 'Please select at least one area of interest');
    }
    
    if (!formData.availability) {
      newErrors.availability = t('volunteerForm.validation.availabilityRequired', 'Please select your availability');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);

    try {
      // Submit to Google Form
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfENS45xu6ZnyaZEIRu9j-E-D6dNUBjyUd4uQ-DyuxNi-MG7Q/formResponse';
      
      const formDataToSubmit = new FormData();
      // Google Form field IDs
      const interestsLabel = formData.interests
        .map((interestKey) => t(
          `volunteerForm.interests.${interestKey}`,
          interestOptions.find((option) => option.key === interestKey)?.defaultLabel || interestKey
        ))
        .join(', ');

      const availabilityLabel = formData.availability
        ? t(
            `volunteerForm.availabilityOptions.${formData.availability}`,
            availabilityOptions.find((option) => option.key === formData.availability)?.defaultLabel || formData.availability
          )
        : '';

      formDataToSubmit.append('entry.1738825547', formData.firstName); // First Name
      formDataToSubmit.append('entry.1250817320', formData.lastName); // Last Name
      formDataToSubmit.append('entry.388803601', formData.email); // Email
      formDataToSubmit.append('entry.1497950874', formData.phone); // Phone
      formDataToSubmit.append('entry.468551905', interestsLabel); // Areas of Interest
      formDataToSubmit.append('entry.1618589420', availabilityLabel); // Availability
      formDataToSubmit.append('entry.942235469', formData.experience); // Previous Volunteer Experience
      formDataToSubmit.append('entry.300834652', formData.message); // Why would you like to volunteer with AFRHEEC?

      // Submit using no-cors mode (Google Forms requirement)
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit
      });
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interests: [],
        availability: '',
        experience: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: t('volunteerForm.validation.submitError', 'Something went wrong. Please try again.') });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="volunteer-form-container">
        <div className="volunteer-form-success">
          <h3>{t('volunteerForm.successTitle', 'Thank You for Your Interest in Volunteering!')}</h3>
          <p>
            {t(
              'volunteerForm.successMessage',
              'We\'ve received your volunteer application and will be in touch with you soon. Our team will review your interests and availability to find the perfect volunteer opportunity for you.'
            )}
          </p>
          <button 
            className="volunteer-form-reset"
            onClick={() => setIsSubmitted(false)}
          >
            {t('volunteerForm.submitAnother', 'Submit Another Application')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="volunteer-form-container">
      <div className="volunteer-form-header">
        <h2 className="volunteer-form-title">{t('volunteerForm.title', 'Become a Volunteer')}</h2>
        <p className="volunteer-form-description">
          {t(
            'volunteerForm.description',
            'Join our dedicated team of volunteers and make a difference in the African heritage community. We welcome volunteers with diverse skills and backgrounds to support our programs and initiatives.'
          )}
        </p>
      </div>

      <form className="volunteer-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">{t('volunteerForm.firstNameLabel', 'First Name *')}</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">{t('volunteerForm.lastNameLabel', 'Last Name *')}</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">{t('volunteerForm.emailLabel', 'Email Address *')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">{t('volunteerForm.phoneLabel', 'Phone Number *')}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>{t('volunteerForm.interestsLabel', 'Areas of Interest *')}</label>
          <div className="checkbox-grid">
            {interestOptions.map((interest) => {
              const label = t(`volunteerForm.interests.${interest.key}`, interest.defaultLabel);
              return (
                <div key={interest.key} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={`interest-${interest.key}`}
                    checked={formData.interests.includes(interest.key)}
                    onChange={() => handleCheckboxChange(interest.key)}
                  />
                  <label htmlFor={`interest-${interest.key}`}>{label}</label>
                </div>
              );
            })}
          </div>
          {errors.interests && <span className="error-message">{errors.interests}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="availability">{t('volunteerForm.availabilityLabel', 'Availability *')}</label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            className={errors.availability ? 'error' : ''}
          >
            <option value="">{t('volunteerForm.availabilityPlaceholder', 'Select your availability')}</option>
            {availabilityOptions.map((option) => {
              const label = t(`volunteerForm.availabilityOptions.${option.key}`, option.defaultLabel);
              return (
                <option key={option.key} value={option.key}>{label}</option>
              );
            })}
          </select>
          {errors.availability && <span className="error-message">{errors.availability}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="experience">{t('volunteerForm.experienceLabel', 'Previous Volunteer Experience')}</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder={t(
              'volunteerForm.experiencePlaceholder',
              'Tell us about any previous volunteer experience you have...'
            )}
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t('volunteerForm.messageLabel', 'Why would you like to volunteer with AFRHEEC?')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t(
              'volunteerForm.messagePlaceholder',
              'Share your motivation and what you hope to contribute...'
            )}
            rows="4"
          />
        </div>

        {errors.submit && <div className="error-message">{errors.submit}</div>}

        <button 
          type="submit" 
          className="volunteer-form-submit"
          disabled={isLoading}
        >
          {isLoading 
            ? t('volunteerForm.submit.loading', 'Submitting...') 
            : t('volunteerForm.submit.default', 'Submit Volunteer Application')}
        </button>
      </form>
    </div>
  );
}

export default VolunteerForm;
