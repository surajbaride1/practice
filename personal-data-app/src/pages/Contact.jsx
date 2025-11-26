import { useState, useEffect } from 'react';
import './DataForm.css';
import { STRINGS } from '../helpers/strings';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    mobile: '',
    website: '',
    linkedin: '',
    github: '',
    twitter: '',
    facebook: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('contactData');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactData', JSON.stringify(formData));
    alert(STRINGS.contact.alerts.saved);
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>{STRINGS.contact.title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.contact.labels.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.contact.labels.phone}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>{STRINGS.contact.labels.mobile}</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>{STRINGS.contact.labels.website}</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder={STRINGS.contact.placeholders.website}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.contact.labels.linkedin}</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              placeholder={STRINGS.contact.placeholders.linkedin}
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.contact.labels.github}</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
              placeholder={STRINGS.contact.placeholders.github}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.contact.labels.twitter}</label>
              <input
                type="url"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
              placeholder={STRINGS.contact.placeholders.twitter}
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.contact.labels.facebook}</label>
              <input
                type="url"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
              placeholder={STRINGS.contact.placeholders.facebook}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            {STRINGS.contact.saveButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

