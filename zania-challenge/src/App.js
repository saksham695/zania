import React, { useEffect, useState } from "react";
import DisplayContent from "./components/DisplayContent";
import useLocalStorage from "./hooks/useLocalStorage";
import { CURRENT_DATA, STORED_DATA } from "./utils/Constant";
import { getData } from "./utils/getData";

const App = () => {
  const { getValue, updateValue } = useLocalStorage();

  const [cardsResponse, setCardsResponse] = useState({
    data: [],
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();

      if (result) {
        setCardsResponse(result);
        updateValue(STORED_DATA, result.data);
        updateValue(CURRENT_DATA, result.data);
      }
    };
    const storedData = getValue(CURRENT_DATA);
    if (!storedData.length) {
      fetchData();
    } else {
      setCardsResponse(storedData);
    }
  }, []);

  return (
    <div>
      {cardsResponse.message === "FAILED" && (
        <div style={{ padding: "20%", paddingTop: "10%" }}>
          <h2>{cardsResponse.error}</h2>
        </div>
      )}

      <div style={{ padding: "20%", paddingTop: "10%" }}>
        <DisplayContent
          data={cardsResponse?.data || []}
          isLoading={!cardsResponse?.message?.length}
        />
      </div>
    </div>
  );
};

export default App;
