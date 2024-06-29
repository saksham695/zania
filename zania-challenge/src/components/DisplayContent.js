import React, { useEffect, useState } from "react";
import { useHandleDragDrop } from "../hooks/useHandleDragDrop";
import useLocalStorage from "../hooks/useLocalStorage";
import useSyncWithBE from "../hooks/useSyncWithBE";
import { CURRENT_DATA, STORED_DATA } from "../utils/Constant";
import { Card } from "./Card";
import { CardLoader } from "./CardLoader";

const DisplayContent = ({ data, isLoading }) => {
  const { isUpdating, lastUpdatedAt } = useSyncWithBE();
  const { handleDragOver, handleDragStart, handleDrop, cards } =
    useHandleDragDrop(data);

  return (
    <div style={containerStyle}>
      {(isLoading || isUpdating) &&
        [1, 2, 3, 4, 5, 6].map((_, index) => <CardLoader key={index} />)}
      {cards &&
        cards.map((card, index) => (
          <Card
            key={card.type}
            item={card}
            index={index}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        ))}
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

export default DisplayContent;
