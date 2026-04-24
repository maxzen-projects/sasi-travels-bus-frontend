import { SEAT_STATUS } from "../constants/seatStatus";

export function mapApiSeats(seats) {
  return seats.map((s) => ({
    id: s.id,
    price: s.price,
    deck: s.id.startsWith("U") ? "upper" : "lower",
    status:
      s.status === "AVAILABLE"
        ? SEAT_STATUS.AVAILABLE
        : s.status === "SOLD"
        ? SEAT_STATUS.SOLD
        : SEAT_STATUS.AVAILABLE,
    originalStatus:
      s.status === "AVAILABLE"
        ? SEAT_STATUS.AVAILABLE
        : s.status === "SOLD"
        ? SEAT_STATUS.SOLD
        : SEAT_STATUS.AVAILABLE,
    ladiesOnly: s.status === "LADIES",
  }));
}
