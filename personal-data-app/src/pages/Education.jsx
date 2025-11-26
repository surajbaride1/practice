import { useState, useEffect } from 'react';
import './DataForm.css';
import { STRINGS } from '../helpers/strings';

function Education() {
  const [educations, setEducations] = useState([]);
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    gpa: '',
    description: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('educationData');
    if (saved) {
      setEducations(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newEducation = { ...formData, id: Date.now() };
    const updated = [...educations, newEducation];
    setEducations(updated);
    localStorage.setItem('educationData', JSON.stringify(updated));
    setFormData({
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      description: ''
    });
    alert(STRINGS.education.alerts.added);
  };

  const handleDelete = (id) => {
    const updated = educations.filter(edu => edu.id !== id);
    setEducations(updated);
    localStorage.setItem('educationData', JSON.stringify(updated));
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>{STRINGS.education.title}</h2>
        <form onSubmit={handleAdd}>
          <div className="form-group">
            <label>{STRINGS.education.labels.institution}</label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.education.labels.degree}</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder={STRINGS.education.placeholders.degree}
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.education.labels.fieldOfStudy}</label>
              <input
                type="text"
                name="field"
                value={formData.field}
                onChange={handleChange}
                placeholder={STRINGS.education.placeholders.field}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.education.labels.startDate}</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.education.labels.endDate}</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>{STRINGS.education.labels.gpa}</label>
            <input
              type="text"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              placeholder={STRINGS.education.placeholders.gpa}
            />
          </div>

          <div className="form-group">
            <label>{STRINGS.education.labels.description}</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder={STRINGS.education.placeholders.description}
            />
          </div>

          <button type="submit" className="submit-btn">
            {STRINGS.education.addButton}
          </button>
        </form>

        {educations.length > 0 && (
          <div className="data-list">
            <h3>{STRINGS.education.savedTitle}</h3>
            {educations.map(edu => (
              <div key={edu.id} className="data-item">
                <div className="data-item-content">
                  <h4>{edu.institution}</h4>
                  <p>{edu.degree} in {edu.field}</p>
                  <p>{edu.startDate} - {edu.endDate}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
                <button
                  onClick={() => handleDelete(edu.id)}
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

export default Education;

