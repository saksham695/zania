import React from "react";

// Custom hook for handling local storage
const useLocalStorage = () => {
  // Function to get the stored value directly from localStorage
  const getValue = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
  };

  // Function to update the value in localStorage and state
  const updateValue = (key,newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Function to remove the value from localStorage and state
  const removeValue = (key) => {
    localStorage.removeItem(key);
  };

  return { getValue, updateValue, removeValue };
};

export default useLocalStorage;
