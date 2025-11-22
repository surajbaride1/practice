import { useState, useEffect } from 'react';
import './DataForm.css';

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('experienceData');
    if (saved) {
      setExperiences(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newExperience = { ...formData, id: Date.now() };
    const updated = [...experiences, newExperience];
    setExperiences(updated);
    localStorage.setItem('experienceData', JSON.stringify(updated));
    setFormData({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    });
    alert('Work experience added successfully!');
  };

  const handleDelete = (id) => {
    const updated = experiences.filter(exp => exp.id !== id);
    setExperiences(updated);
    localStorage.setItem('experienceData', JSON.stringify(updated));
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Work Experience</h2>
        <form onSubmit={handleAdd}>
          <div className="form-row">
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                disabled={formData.current}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="current"
                checked={formData.current}
                onChange={handleChange}
              />
              Currently working here
            </label>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>

          <button type="submit" className="submit-btn">Add Experience</button>
        </form>

        {experiences.length > 0 && (
          <div className="data-list">
            <h3>Saved Work Experience</h3>
            {experiences.map(exp => (
              <div key={exp.id} className="data-item">
                <div className="data-item-content">
                  <h4>{exp.position} at {exp.company}</h4>
                  <p>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                  {exp.description && <p>{exp.description}</p>}
                </div>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;

