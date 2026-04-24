import { SEAT_STATUS } from "../constants/seatStatus";

const initialSeatsData = [
  // LOWER DECK
  { id: "L1", price: 1099, status: "female", deck: "lower" },
  { id: "L2", price: 1099, status: SEAT_STATUS.SOLD, deck: "lower" },
  { id: "L3", price: 1099, status: SEAT_STATUS.SOLD, deck: "lower" },
  { id: "L4", price: 1099, status: "female", deck: "lower" },
  { id: "L5", price: 1099, status: "female", deck: "lower" },
  { id: "L6", price: 1099, status: "female", deck: "lower" },
  { id: "L7", price: 1099, status: "male", deck: "lower" },
  { id: "L8", price: 1099, status: "male", deck: "lower" },
  { id: "L9", price: 1099, status: "male", deck: "lower" },
  { id: "L10", price: 1099, status: SEAT_STATUS.SOLD, deck: "lower" },
  { id: "L11", price: 1099, status: "male", deck: "lower" },
  { id: "L12", price: 1099, status: "male", deck: "lower" },
  { id: "L13", price: 1099, status: "female", deck: "lower" },
  { id: "L14", price: 1099, status: "female", deck: "lower" },
  { id: "L15", price: 1099, status: "female", deck: "lower" },

  // UPPER DECK
  { id: "U1", price: 1099, status: "female", deck: "upper" },
  { id: "U2", price: 1099, status: SEAT_STATUS.SOLD, deck: "upper" },
  { id: "U3", price: 1099, status: SEAT_STATUS.SOLD, deck: "upper" },
  { id: "U4", price: 1099, status: "female", deck: "upper" },
  { id: "U5", price: 1099, status: "female", deck: "upper" },
  { id: "U6", price: 1099, status: "female", deck: "upper" },
  { id: "U7", price: 1099, status: "male", deck: "upper" },
  { id: "U8", price: 1099, status: "male", deck: "upper" },
  { id: "U9", price: 1099, status: "male", deck: "upper" },
  { id: "U10", price: 1099, status: SEAT_STATUS.SOLD, deck: "upper" },
  { id: "U11", price: 1099, status: "male", deck: "upper" },
  { id: "U12", price: 1099, status: "male", deck: "upper" },
  { id: "U13", price: 1099, status: "female", deck: "upper" },
  { id: "U14", price: 1099, status: "female", deck: "upper" },
  { id: "U15", price: 1099, status: "female", deck: "upper" },
].map((seat) => ({
  ...seat,
  status: seat.status === SEAT_STATUS.SOLD ? SEAT_STATUS.SOLD : SEAT_STATUS.AVAILABLE,
  originalStatus: seat.status === SEAT_STATUS.SOLD ? SEAT_STATUS.SOLD : SEAT_STATUS.AVAILABLE,
  gender: seat.status === "male" ? "male" : seat.status === "female" ? "female" : null,
}));

export default initialSeatsData;


