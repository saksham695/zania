export const getData = async (data) => {
  try {
    const response = await fetch("/data");
    const result = response.json();
    if (!response.ok) {
      throw new Error(result);
    }
    console.log("Data Fetched successfully",result);
    return result;
  } catch (error) {
    console.error("Error Fetching data:", error);
    return error;
  }
};
