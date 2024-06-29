import { http, HttpResponse, delay } from "msw";
import { mockData } from "./mockData";

var currentMockData = mockData;

export const handlers = [
  // Handler for fetching data
  http.get("/data", async (req, res, ctx) => {
    try {
      await delay(2000);
      return HttpResponse.json({
        data: currentMockData,
        message: "SUCCESS",
        status: 200,
      });
    } catch (error) {
      return HttpResponse.json({
        error: "Failed to fetch data",
        status: 500,
        message: "FAILED",
        data: [],
      });
    }
  }),

  // Handler for updating mock data
  http.put("/data", async ({ request }) => {
    try {
      const updatedData = await request.json();

      if (!updatedData) {
        return HttpResponse.json({ error: "Invalid data" }, { status: 400 });
      }
      currentMockData = updatedData; // Update current mock data
      await delay(1000);
      return HttpResponse.json({ status: 200 }); // Return success response
    } catch (error) {
      return HttpResponse.json(
        { error: "Failed to update data" },
        { status: 500 }
      );
    }
  }),
];
