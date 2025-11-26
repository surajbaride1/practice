import { useState, useEffect } from 'react';
import './DataForm.css';
import { STRINGS } from '../helpers/strings';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    skill: '',
    level: STRINGS.skills.levels.beginner,
    category: STRINGS.skills.categories.technical
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
      level: STRINGS.skills.levels.beginner,
      category: STRINGS.skills.categories.technical
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
        <h2>{STRINGS.skills.title}</h2>
        <form onSubmit={handleAdd}>
          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.skills.labels.skillName}</label>
              <input
                type="text"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                placeholder={STRINGS.skills.placeholders.skillName}
                required
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.skills.labels.level}</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
              >
                <option value={STRINGS.skills.levels.beginner}>
                  {STRINGS.skills.levels.beginner}
                </option>
                <option value={STRINGS.skills.levels.intermediate}>
                  {STRINGS.skills.levels.intermediate}
                </option>
                <option value={STRINGS.skills.levels.advanced}>
                  {STRINGS.skills.levels.advanced}
                </option>
                <option value={STRINGS.skills.levels.expert}>
                  {STRINGS.skills.levels.expert}
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>{STRINGS.skills.labels.category}</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value={STRINGS.skills.categories.technical}>
                {STRINGS.skills.categories.technical}
              </option>
              <option value={STRINGS.skills.categories.soft}>
                {STRINGS.skills.categories.soft}
              </option>
              <option value={STRINGS.skills.categories.language}>
                {STRINGS.skills.categories.language}
              </option>
              <option value={STRINGS.skills.categories.other}>
                {STRINGS.skills.categories.other}
              </option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            {STRINGS.skills.addButton}
          </button>
        </form>

        {skills.length > 0 && (
          <div className="data-list">
            <h3>{STRINGS.skills.savedTitle}</h3>
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

