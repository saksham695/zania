// Function to update data using fetch
export const updateData = async (data) => {
    try {
      const response = await fetch("/data", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log("Data updated successfully");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  