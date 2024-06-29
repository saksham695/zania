import React, { useState } from "react";
import ImageViewer from "./ImageViewer";

export const Card = ({
  item,
  index,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={(event) => handleDragStart(event, index)}
      onDragOver={(event) => handleDragOver(event)}
      onDrop={(event) => handleDrop(event, index)}
      onDragEnd={handleDragEnd}
      style={{
        ...itemStyle,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <h3>{item.title}</h3>
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{ width: "200px", height: "auto" }}
        loading="lazy"
        onClick={openModal}
      />
      {isModalOpen && (
        <ImageViewer
          src={item.imageUrl}
          alt={item.title}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

const itemStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px 0",
  boxSizing: "border-box",
};
