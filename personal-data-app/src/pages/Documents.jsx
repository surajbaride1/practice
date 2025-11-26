import { useState, useEffect } from 'react';
import './DataForm.css';
import { STRINGS } from '../helpers/strings';

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    issueDate: '',
    expiryDate: '',
    number: '',
    notes: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('documentsData');
    if (saved) {
      setDocuments(JSON.parse(saved));
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
    const newDocument = { ...formData, id: Date.now() };
    const updated = [...documents, newDocument];
    setDocuments(updated);
    localStorage.setItem('documentsData', JSON.stringify(updated));
    setFormData({
      name: '',
      type: '',
      issueDate: '',
      expiryDate: '',
      number: '',
      notes: ''
    });
    alert(STRINGS.documents.alerts.saved);
  };

  const handleDelete = (id) => {
    const updated = documents.filter(doc => doc.id !== id);
    setDocuments(updated);
    localStorage.setItem('documentsData', JSON.stringify(updated));
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>{STRINGS.documents.title}</h2>
        <form onSubmit={handleAdd}>
          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.documents.labels.name}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={STRINGS.documents.placeholders.name}
                required
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.documents.labels.type}</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">
                  {STRINGS.documents.typeOptions.select}
                </option>
                <option value="ID">{STRINGS.documents.typeOptions.id}</option>
                <option value="Passport">
                  {STRINGS.documents.typeOptions.passport}
                </option>
                <option value="License">
                  {STRINGS.documents.typeOptions.license}
                </option>
                <option value="Certificate">
                  {STRINGS.documents.typeOptions.certificate}
                </option>
                <option value="Other">
                  {STRINGS.documents.typeOptions.other}
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>{STRINGS.documents.labels.number}</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{STRINGS.documents.labels.issueDate}</label>
              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>{STRINGS.documents.labels.expiryDate}</label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>{STRINGS.documents.labels.notes}</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              placeholder={STRINGS.documents.placeholders.notes}
            />
          </div>

          <button type="submit" className="submit-btn">
            {STRINGS.documents.addButton}
          </button>
        </form>

        {documents.length > 0 && (
          <div className="data-list">
            <h3>{STRINGS.documents.savedTitle}</h3>
            {documents.map(doc => (
              <div key={doc.id} className="data-item">
                <div className="data-item-content">
                  <h4>{doc.name}</h4>
                  <p>
                    {STRINGS.documents.summary.type}: {doc.type}
                  </p>
                  {doc.number && (
                    <p>
                      {STRINGS.documents.summary.number}: {doc.number}
                    </p>
                  )}
                  <p>
                    {STRINGS.documents.summary.issue}: {doc.issueDate} |{' '}
                    {STRINGS.documents.summary.expiry}: {doc.expiryDate}
                  </p>
                  {doc.notes && <p>{doc.notes}</p>}
                </div>
                <button
                  onClick={() => handleDelete(doc.id)}
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

export default Documents;

