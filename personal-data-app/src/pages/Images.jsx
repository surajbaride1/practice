import { useState, useEffect } from 'react';
import './DataForm.css';

function Images() {
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('storedImages');
    if (saved) {
      setImages(JSON.parse(saved));
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = {
          id: Date.now(),
          name: imageName || file.name,
          data: reader.result,
          uploadedAt: new Date().toLocaleString()
        };
        const updatedImages = [...images, newImage];
        setImages(updatedImages);
        localStorage.setItem('storedImages', JSON.stringify(updatedImages));
        setImageName('');
        e.target.value = ''; // Reset file input
        alert('Image saved successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedImages = images.filter(img => img.id !== id);
      setImages(updatedImages);
      localStorage.setItem('storedImages', JSON.stringify(updatedImages));
      alert('Image deleted successfully!');
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Image Storage</h2>
        
        <div className="form-group">
          <label>Image Name (Optional)</label>
          <input
            type="text"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
            placeholder="Enter a name for your image"
          />
        </div>

        <div className="form-group">
          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e0e0e0',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          />
        </div>

        {images.length > 0 && (
          <div className="data-list">
            <h3>Stored Images ({images.length})</h3>
            <div className="images-grid">
              {images.map((image) => (
                <div key={image.id} className="image-item">
                  <div className="image-preview">
                    <img src={image.data} alt={image.name} />
                  </div>
                  <div className="image-info">
                    <h4>{image.name}</h4>
                    <p className="image-date">{image.uploadedAt}</p>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(image.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {images.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem', 
            color: '#666',
            fontStyle: 'italic'
          }}>
            No images stored yet. Upload an image to get started!
          </div>
        )}
      </div>
    </div>
  );
}

export default Images;

