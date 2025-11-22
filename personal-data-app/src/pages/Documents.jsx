import { useState, useEffect } from 'react';
import './DataForm.css';

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
    alert('Document information saved successfully!');
  };

  const handleDelete = (id) => {
    const updated = documents.filter(doc => doc.id !== id);
    setDocuments(updated);
    localStorage.setItem('documentsData', JSON.stringify(updated));
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Documents</h2>
        <form onSubmit={handleAdd}>
          <div className="form-row">
            <div className="form-group">
              <label>Document Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Passport, Driver's License"
                required
              />
            </div>
            <div className="form-group">
              <label>Document Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="ID">ID Card</option>
                <option value="Passport">Passport</option>
                <option value="License">License</option>
                <option value="Certificate">Certificate</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Document Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Issue Date</label>
              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Additional information..."
            />
          </div>

          <button type="submit" className="submit-btn">Add Document</button>
        </form>

        {documents.length > 0 && (
          <div className="data-list">
            <h3>Saved Documents</h3>
            {documents.map(doc => (
              <div key={doc.id} className="data-item">
                <div className="data-item-content">
                  <h4>{doc.name}</h4>
                  <p>Type: {doc.type}</p>
                  {doc.number && <p>Number: {doc.number}</p>}
                  <p>Issue: {doc.issueDate} | Expiry: {doc.expiryDate}</p>
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

