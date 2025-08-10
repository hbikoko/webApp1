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
    'Education Programs',
    'Cultural Events',
    'Community Outreach',
    'Administrative Support',
    'Event Planning',
    'Translation Services',
    'Youth Programs',
    'Family Support'
  ];

  const availabilityOptions = [
    'Weekdays',
    'Weekends',
    'Evenings',
    'Flexible',
    'Special Events Only'
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

  const handleCheckboxChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(item => item !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one area of interest';
    }
    
    if (!formData.availability) {
      newErrors.availability = 'Please select your availability';
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
      formDataToSubmit.append('entry.1738825547', formData.firstName); // First Name
      formDataToSubmit.append('entry.1250817320', formData.lastName); // Last Name
      formDataToSubmit.append('entry.388803601', formData.email); // Email
      formDataToSubmit.append('entry.1497950874', formData.phone); // Phone
      formDataToSubmit.append('entry.468551905', formData.interests.join(', ')); // Areas of Interest
      formDataToSubmit.append('entry.1618589420', formData.availability); // Availability
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
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="volunteer-form-container">
        <div className="volunteer-form-success">
          <h3>Thank You for Your Interest in Volunteering!</h3>
          <p>
            We've received your volunteer application and will be in touch with you soon. 
            Our team will review your interests and availability to find the perfect volunteer opportunity for you.
          </p>
          <button 
            className="volunteer-form-reset"
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="volunteer-form-container">
      <div className="volunteer-form-header">
        <h2 className="volunteer-form-title">Become a Volunteer</h2>
        <p className="volunteer-form-description">
          Join our dedicated team of volunteers and make a difference in the African heritage community. 
          We welcome volunteers with diverse skills and backgrounds to support our programs and initiatives.
        </p>
      </div>

      <form className="volunteer-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
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
            <label htmlFor="lastName">Last Name *</label>
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
            <label htmlFor="email">Email Address *</label>
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
            <label htmlFor="phone">Phone Number *</label>
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
          <label>Areas of Interest *</label>
          <div className="checkbox-grid">
            {interestOptions.map((interest) => (
              <div key={interest} className="checkbox-item">
                <input
                  type="checkbox"
                  id={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleCheckboxChange(interest)}
                />
                <label htmlFor={interest}>{interest}</label>
              </div>
            ))}
          </div>
          {errors.interests && <span className="error-message">{errors.interests}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="availability">Availability *</label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            className={errors.availability ? 'error' : ''}
          >
            <option value="">Select your availability</option>
            {availabilityOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.availability && <span className="error-message">{errors.availability}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="experience">Previous Volunteer Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder="Tell us about any previous volunteer experience you have..."
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Why would you like to volunteer with AFRHEEC?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Share your motivation and what you hope to contribute..."
            rows="4"
          />
        </div>

        {errors.submit && <div className="error-message">{errors.submit}</div>}

        <button 
          type="submit" 
          className="volunteer-form-submit"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit Volunteer Application'}
        </button>
      </form>
    </div>
  );
}

export default VolunteerForm;
