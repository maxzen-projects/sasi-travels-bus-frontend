export default function SeatHoldBanner({ minutes, seconds, expired }) {
  if (expired) {
    return (
      <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
        ⛔ Seat hold expired. Please reselect seats.
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-xl bg-yellow-50 border border-yellow-200 p-3 text-sm text-yellow-800">
      ⏳ Seats are held for <b>{minutes}:{seconds}</b>. Complete booking before time expires.
    </div>
  );
}
