import React, { useEffect } from "react";
import "./ImageViewer.css"; // Import CSS for styling

const ImageViewer = ({ src, alt, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === "image-modal-overlay") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="image-modal-overlay" onClick={handleOutsideClick}>
      <div className="image-modal-content">
        <button className="image-modal-close" onClick={onClose}>
          ×
        </button>
        <div style={{ padding: "20px" }}>
          <img
            src={src}
            alt={alt}
            style={{ height: "500px", width: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
