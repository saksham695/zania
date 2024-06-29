import { http, HttpResponse, delay } from "msw";
import { mockData } from "./mockData";

var currentMockData = mockData;


export const handlers = [
  // An example handler
  http.get("/data", async (req, res, ctx) => {
    await delay(2000);
    return HttpResponse.json({ data: currentMockData });
  }),

  // Handler for updating mock data
  http.put("/data", async ({ request }) => {
    const updatedData = await request.json();

    if (updatedData) {
      currentMockData = updatedData; // Update current mock data
      await delay(1000);
      return HttpResponse.json({ status: 200 }); // Return success response
    }
  }),
];
