export function mapApiSeats(seats) {
  return seats.map((s) => ({
    id: s.id,
    price: s.price,
    deck: s.id.startsWith("U") ? "upper" : "lower",
    status:
      s.status === "AVAILABLE"
        ? "available"
        : s.status === "SOLD"
        ? "sold"
        : "ladies",
    originalStatus:
      s.status === "AVAILABLE"
        ? "available"
        : s.status === "SOLD"
        ? "sold"
        : "ladies",
  }));
}
