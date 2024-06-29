import { useEffect, useState } from "react";
import { CURRENT_DATA, STORED_DATA } from "../utils/Constant";
import useLocalStorage from "./useLocalStorage";

export const useHandleDragDrop = (data) => {
  const [cards, setCards] = useState([]);
  const { updateValue } = useLocalStorage(STORED_DATA);

  useEffect(() => {
    // Sort Data and then store in card
    if (data) {
      const sortWithPosition = data.sort((a, b) => a.position - b.position);
      setCards(sortWithPosition);
    }
  }, [data]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, dropIndex) => {
    const dragIndex = parseInt(event.dataTransfer.getData("index"));
    const dragCard = cards[dragIndex];
    // Reorder cards array
    const updatedCards = cards.filter((_, index) => index !== dragIndex);
    updatedCards.splice(dropIndex, 0, dragCard);
    // Update positions based on new index
    const updatedCardsWithPosition = updatedCards.map((card, index) => ({
      ...card,
      position: index, // Update position based on new index
    }));
    const positionMapping = {};
    for (let i = 0; i < updatedCardsWithPosition.length; i++) {
      positionMapping[updatedCardsWithPosition[i].id] =
        updatedCardsWithPosition[i].position;
    }
    const dataWithUpdatedPosition = data.map((item) => {
      return {
        ...item,
        position: positionMapping[item.id],
      };
    });
    setCards(updatedCards);
    updateValue(CURRENT_DATA, dataWithUpdatedPosition);
  };

  return { handleDragOver, handleDragStart, handleDrop, cards };
};
