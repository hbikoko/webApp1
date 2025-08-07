import React, { useState } from 'react';
import './styles/SummerReadingRegistration.css';
import mmm2Logo from '../assets/mmm2Logo.png';

function SummerReadingRegistration() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    childGrade: '',
    address: '',
    preferredLanguage: '',
    additionalInfo: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.childName.trim()) {
      newErrors.childName = 'Child\'s name is required';
    }
    
    if (!formData.childAge.trim()) {
      newErrors.childAge = 'Child\'s age is required';
    } else if (parseInt(formData.childAge) < 5 || parseInt(formData.childAge) > 12) {
      newErrors.childAge = 'Child must be between 5 and 12 years old';
    }
    
    if (!formData.childGrade.trim()) {
      newErrors.childGrade = 'Current grade is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Home address is required';
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
      const formUrl = 'https://docs.google.com/forms/u/0/d/1S03jFoK58l2iiJLGp1PuBtgqO22cGzA7XTA3afjOwjY/formResponse';
      
      const formDataToSubmit = new FormData();
      // Your actual Google Form field IDs
      formDataToSubmit.append('entry.540091183', formData.parentName);
      formDataToSubmit.append('entry.185670037', formData.email);
      formDataToSubmit.append('entry.648251257', formData.phone);
      formDataToSubmit.append('entry.2093064039', formData.childName);
      formDataToSubmit.append('entry.1029015310', formData.childAge);
      formDataToSubmit.append('entry.449645496', formData.childGrade);
      formDataToSubmit.append('entry.110671140', formData.address);
      formDataToSubmit.append('entry.104712741', formData.preferredLanguage);
      formDataToSubmit.append('entry.1375767625', formData.additionalInfo);

      // Submit using no-cors mode (Google Forms requirement)
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit
      });
      
      setIsSubmitted(true);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        childGrade: '',
        address: '',
        preferredLanguage: '',
        additionalInfo: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="registration-container">
        <div className="success-message">
          <div className="baobab-icon">🌳</div>
          <h2>Success!</h2>
          <p>Your registration form is submitted. We will let you know your application status soon.</p>
          <button 
            className="back-button"
            onClick={() => setIsSubmitted(false)}
          >
            Register Another Child
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-container">
      <div className="registration-sponsor">
        <img src={mmm2Logo} alt="Meyer Memorial Trust Logo" />
        <span className="sponsor-text">Sponsored by Meyer Memorial Trust</span>
      </div>
      <div className="header-section">
        <div className="baobab-icon">🌳</div>
        <h1>Your Child Deserves a Summer of Growth, Joy, and Confidence—Start with Reading!</h1>
        
        <p className="intro-text">
          Looking for a summer program that keeps your child learning, inspired, and connected to their culture? 
          <strong> AFRHEEC's Summer Reading Program</strong> is designed for students in grades 1–3 and blends 
          academic support with fun, culturally rich activities that help children fall in love with reading.
        </p>

        <ul className="benefits-list">
          <li>
            <span className="icon">📚</span>
            Boost reading skills with small-group tutoring led by trained, caring educators
          </li>
          <li>
            <span className="icon">🌍</span>
            Celebrate culture and identity through diverse books, African storytelling, and bilingual learning
          </li>
          <li>
            <span className="icon">🤝</span>
            Build community with other families in a safe, welcoming space
          </li>
          <li>
            <span className="icon">🍎</span>
            Snacks and support included to make participation easy for your family
          </li>
        </ul>

        <p className="urgency-text">
          <strong>Spots fill fast—register your child today and give them a summer that empowers their mind and honors who they are.</strong>
        </p>
      </div>

      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        <h2>Registration Form</h2>
        
        <div className="form-group">
          <label htmlFor="parentName">
            Parent/Guardian Name <span aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-describedby={errors.parentName ? "parentName-error" : undefined}
            aria-invalid={!!errors.parentName}
          />
          {errors.parentName && (
            <div id="parentName-error" className="error-message" role="alert">
              {errors.parentName}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email Address <span aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <div id="email-error" className="error-message" role="alert">
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone Number <span aria-label="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <div id="phone-error" className="error-message" role="alert">
              {errors.phone}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="childName">
            Child's Full Name <span aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="childName"
            name="childName"
            value={formData.childName}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-describedby={errors.childName ? "childName-error" : undefined}
            aria-invalid={!!errors.childName}
          />
          {errors.childName && (
            <div id="childName-error" className="error-message" role="alert">
              {errors.childName}
            </div>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="childAge">
              Child's Age <span aria-label="required">*</span>
            </label>
            <input
              type="number"
              id="childAge"
              name="childAge"
              min="5"
              max="12"
              value={formData.childAge}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-describedby={errors.childAge ? "childAge-error" : undefined}
              aria-invalid={!!errors.childAge}
            />
            {errors.childAge && (
              <div id="childAge-error" className="error-message" role="alert">
                {errors.childAge}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="childGrade">
              Current Grade <span aria-label="required">*</span>
            </label>
            <input
              type="text"
              id="childGrade"
              name="childGrade"
              value={formData.childGrade}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-describedby={errors.childGrade ? "childGrade-error" : undefined}
              aria-invalid={!!errors.childGrade}
            />
            {errors.childGrade && (
              <div id="childGrade-error" className="error-message" role="alert">
                {errors.childGrade}
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">
            Home Address <span aria-label="required">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-describedby={errors.address ? "address-error" : undefined}
            aria-invalid={!!errors.address}
          />
          {errors.address && (
            <div id="address-error" className="error-message" role="alert">
              {errors.address}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="preferredLanguage">Preferred Language for Communication</label>
          <input
            type="text"
            id="preferredLanguage"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information (Optional)</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows="4"
            placeholder="Please share any additional information about your child's learning needs, interests, or anything else you'd like us to know."
            value={formData.additionalInfo}
            onChange={handleInputChange}
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit Registration'}
        </button>
      </form>
    </div>
  );
}

export default SummerReadingRegistration;