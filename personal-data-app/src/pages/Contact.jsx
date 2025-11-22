import { useState, useEffect } from 'react';
import './DataForm.css';

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
    alert('Contact information saved successfully!');
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Contact Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div className="form-group">
              <label>GitHub</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/..."
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Twitter</label>
              <input
                type="url"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="https://twitter.com/..."
              />
            </div>
            <div className="form-group">
              <label>Facebook</label>
              <input
                type="url"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="https://facebook.com/..."
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">Save Contact Info</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

