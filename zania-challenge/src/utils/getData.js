export const getData = async (data) => {
  try {
    const response = await fetch("/data");
    console.log("ResponseL: ", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Data Fetched successfully");
    return response.json()
  } catch (error) {
    console.error("Error Fetching data:", error);
  }
};
