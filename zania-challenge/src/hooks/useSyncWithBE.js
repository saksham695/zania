import { useEffect, useState } from "react";
import { mockData } from "../mocks/mockData";
import { CURRENT_DATA, STORED_DATA } from "../utils/Constant";
import { deepCompare } from "../utils/deepCompare";
import { updateData } from "../utils/updateApi";
import useLocalStorage from "./useLocalStorage";

const updateIntervalMs = 10000;

// Custom hook to sync data with backend periodically
const useSyncWithBE = () => {
  const [isUpdating, setIsLoading] = useState(false);
  const [lastUpdatedAt, setLastUpdatedAt] = useState("");
  const { getValue, updateValue } = useLocalStorage();

  useEffect(() => {
    const syncWithBE = async (currentData) => {
      setIsLoading(true);
      await updateData(currentData);
      // Because mock api will return same result everytime, therefore updating in LS
      await updateValue(STORED_DATA, currentData);
      setIsLoading(false);
      setLastUpdatedAt(new Date());
    };
    const intervalId = setInterval(() => {
      const currentData = getValue(CURRENT_DATA);
      const prevData = getValue(STORED_DATA);
      if (!deepCompare(prevData, currentData)) {
        syncWithBE(currentData);
      }
    }, updateIntervalMs);

    // Cleanup function to clear interval on component unmount or re-render
    return () => clearInterval(intervalId);
  }, []);
  return { isUpdating, lastUpdatedAt };
};

export default useSyncWithBE;
