import { useState, useEffect } from 'react';
import './DataForm.css';

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
    alert('Education added successfully!');
  };

  const handleDelete = (id) => {
    const updated = educations.filter(edu => edu.id !== id);
    setEducations(updated);
    localStorage.setItem('educationData', JSON.stringify(updated));
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Education</h2>
        <form onSubmit={handleAdd}>
          <div className="form-group">
            <label>Institution</label>
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
              <label>Degree</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="e.g., Bachelor's, Master's"
              />
            </div>
            <div className="form-group">
              <label>Field of Study</label>
              <input
                type="text"
                name="field"
                value={formData.field}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
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
              />
            </div>
          </div>

          <div className="form-group">
            <label>GPA / Grade</label>
            <input
              type="text"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              placeholder="e.g., 3.8/4.0"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Additional details..."
            />
          </div>

          <button type="submit" className="submit-btn">Add Education</button>
        </form>

        {educations.length > 0 && (
          <div className="data-list">
            <h3>Saved Education</h3>
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

