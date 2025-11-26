import { useState, useEffect } from 'react';
import './DataForm.css';
import { STRINGS } from '../helpers/strings';
import { COLORS } from '../helpers/colors';
import { SIZES } from '../helpers/sizes';

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
        alert(STRINGS.alerts.selectImageFile);
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
        alert(STRINGS.alerts.imageSaved);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm(STRINGS.alerts.confirmDeleteImage)) {
      const updatedImages = images.filter(img => img.id !== id);
      setImages(updatedImages);
      localStorage.setItem('storedImages', JSON.stringify(updatedImages));
      alert(STRINGS.alerts.imageDeleted);
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>{STRINGS.images.title}</h2>
        
        <div className="form-group">
          <label>{STRINGS.images.nameLabel}</label>
          <input
            type="text"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
            placeholder={STRINGS.images.namePlaceholder}
          />
        </div>

        <div className="form-group">
          <label>{STRINGS.images.uploadLabel}</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{
              width: '100%',
              padding: SIZES.inputPadding,
              border: `2px solid ${COLORS.border}`,
              borderRadius: SIZES.borderRadius,
              fontSize: SIZES.fontSizeBase,
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
            padding: SIZES.emptyStatePadding,
            color: COLORS.textMuted,
            fontStyle: 'italic'
          }}>
            {STRINGS.images.emptyState}
          </div>
        )}
      </div>
    </div>
  );
}

export default Images;

