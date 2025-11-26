import { useState, useEffect } from 'react';
import './DataForm.css';
import { STRINGS } from '../helpers/strings';

function Profile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    bio: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('profileData');
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
    localStorage.setItem('profileData', JSON.stringify(formData));
    alert(STRINGS.profile.alerts.saved);
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>{STRINGS.profile.title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.profile.labels.firstName}</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.profile.labels.lastName}</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.profile.labels.dateOfBirth}</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.profile.labels.gender}</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">{STRINGS.profile.options.gender.select}</option>
                <option value="Male">{STRINGS.profile.options.gender.male}</option>
                <option value="Female">{STRINGS.profile.options.gender.female}</option>
                <option value="Other">{STRINGS.profile.options.gender.other}</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>{STRINGS.profile.labels.nationality}</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>{STRINGS.profile.labels.address}</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>{STRINGS.profile.labels.bio}</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              placeholder={STRINGS.profile.placeholders.bio}
            />
          </div>

          <button type="submit" className="submit-btn">
            {STRINGS.profile.saveButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;

