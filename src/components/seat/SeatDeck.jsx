import Seat from "./Seat";

export default function SeatDeck({ title, layout, seatMap, onSeatClick }) {
  if (!layout) return null;
  const deckPrefix = title === "UPPER" ? "U" : "L";
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-68">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
          {title}
        </h3>
      </div>

      <hr className="mb-6 border-gray-200" />

      {/* SEATS */}
      <div className="flex flex-col gap-4">
        {layout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center items-center gap-2"
          >
            {row.map((seatNumber, index) => {
              if (seatNumber === null) {
                // Aisle space
                return <div key={`aisle-${rowIndex}-${index}`} className="w-10"></div>;
              }

              const seatId = `${deckPrefix}${seatNumber}`;
              const seat = seatMap[seatId];

              if (!seat) return <div key={seatId} className="w-10 h-20"></div>; // Placeholder for missing seat

              return (
                <Seat key={seat.id} seat={seat} onSeatClick={onSeatClick} />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}