import { useState, useEffect } from 'react';
import './DataForm.css';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    skill: '',
    level: 'Beginner',
    category: 'Technical'
  });

  useEffect(() => {
    const saved = localStorage.getItem('skillsData');
    if (saved) {
      setSkills(JSON.parse(saved));
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
    if (!formData.skill.trim()) return;
    const newSkill = { ...formData, id: Date.now() };
    const updated = [...skills, newSkill];
    setSkills(updated);
    localStorage.setItem('skillsData', JSON.stringify(updated));
    setFormData({
      skill: '',
      level: 'Beginner',
      category: 'Technical'
    });
  };

  const handleDelete = (id) => {
    const updated = skills.filter(skill => skill.id !== id);
    setSkills(updated);
    localStorage.setItem('skillsData', JSON.stringify(updated));
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Skills</h2>
        <form onSubmit={handleAdd}>
          <div className="form-row">
            <div className="form-group">
              <label>Skill Name</label>
              <input
                type="text"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                placeholder="e.g., JavaScript, Python"
                required
              />
            </div>
            <div className="form-group">
              <label>Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Technical">Technical</option>
              <option value="Soft Skills">Soft Skills</option>
              <option value="Language">Language</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Add Skill</button>
        </form>

        {skills.length > 0 && (
          <div className="data-list">
            <h3>Your Skills</h3>
            <div className="skills-grid">
              {skills.map(skill => (
                <div key={skill.id} className="skill-item">
                  <div className="skill-content">
                    <h4>{skill.skill}</h4>
                    <p className="skill-level">{skill.level}</p>
                    <p className="skill-category">{skill.category}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(skill.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;

