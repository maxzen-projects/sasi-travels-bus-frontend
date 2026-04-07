export async function fetchSeatLayout(busId) {
  const res = await fetch(`/api/buses/${busId}/seats`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
