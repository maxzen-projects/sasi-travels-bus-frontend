import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/buses/:busId/seats", ({ params }) => {
    return HttpResponse.json({
      busId: params.busId,
      busType: "1+2",
      layout: {
        lower: {
          rows: [
            ["L1", null, "L2", "L3"],
            ["L4", null, "L5", "L6"],
          ],
        },
        upper: {
          rows: [
            ["U1", null, "U2", "U3"],
          ],
        },
      },
      seats: [
        { id: "L1", price: 789, status: "AVAILABLE" },
        { id: "L2", price: 689, status: "LADIES" },
        { id: "L3", status: "SOLD" },
        { id: "L4", price: 789, status: "AVAILABLE" },
        { id: "L5", price: 789, status: "AVAILABLE" },
        { id: "L6", status: "SOLD" },
        { id: "U1", price: 749, status: "AVAILABLE" },
        { id: "U2", price: 749, status: "AVAILABLE" },
        { id: "U3", status: "SOLD" },
      ],
    });
  }),
];
