import { SEAT_STATUS } from "../constants/seatStatus";

export const getSeatStyle = (seat) => {
  if (seat.status === SEAT_STATUS.SOLD) {
    return "bg-gray-200 border-gray-300 cursor-not-allowed";
  }

  if (seat.status === SEAT_STATUS.SELECTED) {
    return "bg-green-300 border-2 border-white";
  }

  if (seat.gender === "male") {
    return "bg-white border-2 border-blue-500 hover:bg-blue-50";
  }

  if (seat.gender === "female" || seat.ladiesOnly) {
    return "bg-white border-2 border-pink-500 hover:bg-pink-50";
  }

  return "bg-white border-2 border-green-500 hover:bg-green-50";
};

export const getIconColor = (seat) => {
  if (seat.status === SEAT_STATUS.SOLD) {
    return "text-gray-300";
  }

  if (seat.gender === "female" || seat.ladiesOnly) {
    return "text-pink-500";
  }

  if (seat.gender === "male") {
    return "text-blue-500";
  }

  return "text-green-600";
};

export const getCushionColor = (seat) => {
  if (seat.status === SEAT_STATUS.SELECTED) {
    return "bg-green-500";
  }

  if (seat.gender === "male") {
    return "bg-blue-400";
  }

  if (seat.gender === "female" || seat.ladiesOnly) {
    return "bg-pink-500";
  }

  return "bg-green-400";
};
