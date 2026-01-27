// components/SearchForm.jsx
import { useState } from "react";
import { FaExchangeAlt, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function SearchForm() {
  const [from, setFrom] = useState("Bangalore");
  const [to, setTo] = useState("Chennai");
  const [date, setDate] = useState("2024-09-24");

  // Swap Function
  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 relative -mt-12 z-10">

      {/* FROM */}
      <div className="flex items-center gap-3 flex-1 w-full md:w-auto pr-0 md:pr-4 border-b md:border-b-0 border-gray-200 pb-4 md:pb-0">
        <FaMapMarkerAlt className="text-gray-500 text-xl" />
        <div>
          <p className="text-xs text-gray-400 font-semibold">FROM</p>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="font-bold text-lg outline-none w-full"
          />
        </div>
      </div>

      {/* SWAP BUTTON */}
      <button
        onClick={swapCities}
        className="bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition rotate-90 md:rotate-0 -my-8 md:my-0 md:-ml-16 z-10"
      >
        <FaExchangeAlt className="text-gray-600 text-lg" />
      </button>

      {/* TO */}
      <div className="flex items-center gap-3 flex-1 w-full md:w-auto pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0">
        <FaMapMarkerAlt className="text-gray-500 text-xl" />
        <div>
          <p className="text-xs text-gray-400 font-semibold">TO</p>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="font-bold text-lg outline-none w-full"
          />
        </div>
      </div>

      {/* DATE */}
      <div className="flex items-center gap-3 flex-1 w-full md:w-auto pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0">
        <FaCalendarAlt className="text-gray-500 text-xl" />
        <div>
          <p className="text-xs text-gray-400 font-semibold">DATE</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="font-bold text-lg outline-none w-full"
          />
        </div>
      </div>

      {/* SEARCH BUTTON */}
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-lg w-full md:w-auto">
        SEARCH BUSES
      </button>
    </div>
  );
}
