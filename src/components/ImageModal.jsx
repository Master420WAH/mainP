import React from 'react';
import './ImageModal.css'; // Create a CSS file for styling

const ImageModal = ({ isOpen, imgSrc, onClose }) => {
  if (!isOpen) return null; // If modal is not open, render nothing

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imgSrc} alt="Full size" className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
