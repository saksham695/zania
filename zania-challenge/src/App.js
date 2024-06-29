// src/App.js
import React, { useEffect, useState } from "react";
import DisplayContent from "./components/DisplayContent";
import useLocalStorage from "./hooks/useLocalStorage";
import { CURRENT_DATA, STORED_DATA } from "./utils/Constant";
import { getData } from "./utils/getData";

const App = () => {
  const { getValue, updateValue } = useLocalStorage();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result.data);
      updateValue(STORED_DATA, result.data);
      updateValue(CURRENT_DATA, result.data);
    };
    const storedData = getValue(CURRENT_DATA);
    if (!storedData.length) {
      fetchData();
    } else {
      setData(storedData);
    }
  }, []);

  return (
    <div>
      <div style={{ padding: "20%", paddingTop: "10%" }}>
        <DisplayContent
          data={data || []}
          isLoading={data.length ? false : true}
        />
      </div>
    </div>
  );
};

export default App;
