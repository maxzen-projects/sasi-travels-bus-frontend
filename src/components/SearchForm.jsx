// components/SearchForm.jsx
import { useState, useRef } from "react";
import { FaExchangeAlt, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useLanguage } from "./context/LanguageContext";

const popularCities = [
  "Bangalore", "Chennai", "Hyderabad", "Mumbai", "Pune",
  "Delhi", "Coimbatore", "Goa", "Kochi", "Vijayawada"
];

export default function SearchForm() {
  const [from, setFrom] = useState("Bangalore");
  const [to, setTo] = useState("Chennai");
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayStr = getFormattedDate(new Date());
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrowStr = getFormattedDate(tomorrowDate);

  const [date, setDate] = useState(todayStr);
  const { t } = useLanguage();
  const dateInputRef = useRef(null);

  // Swap Function
  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  const openDatePicker = () => {
    try {
      dateInputRef.current.showPicker();
    } catch (e) {
      // showPicker is not supported in all browsers
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 relative -mt-12 z-10">

      {/* FROM */}
      <div className="flex items-center gap-3 flex-1 w-full md:w-auto pr-0 md:pr-4 border-b md:border-b-0 border-gray-200 pb-4 md:pb-0">
        <FaMapMarkerAlt className="text-gray-500 text-xl" />
        <div className="w-full relative">
          <p className="text-xs text-gray-400 font-semibold">{t("from")}</p>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onFocus={() => setShowFrom(true)}
            onBlur={() => setShowFrom(false)}
            className="font-bold text-lg outline-none w-full"
          />
          {showFrom && (
            <ul className="absolute top-full left-0 w-full bg-white border shadow-lg rounded-md z-50 max-h-60 overflow-y-auto mt-2" onMouseDown={(e) => e.preventDefault()}>
              {popularCities
                .filter((city) => city.toLowerCase().includes(from.toLowerCase()))
                .map((city) => (
                  <li key={city} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm" onClick={() => { setFrom(city); setShowFrom(false); }}>
                    {city}
                  </li>
                ))}
                {popularCities.filter((city) => city.toLowerCase().includes(from.toLowerCase())).length === 0 && <li className="px-4 py-2 text-gray-500 text-sm">No cities found</li>}
            </ul>
          )}
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
        <div className="w-full relative">
          <p className="text-xs text-gray-400 font-semibold">{t("to")}</p>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            onFocus={() => setShowTo(true)}
            onBlur={() => setShowTo(false)}
            className="font-bold text-lg outline-none w-full"
          />
          {showTo && (
            <ul className="absolute top-full left-0 w-full bg-white border shadow-lg rounded-md z-50 max-h-60 overflow-y-auto mt-2" onMouseDown={(e) => e.preventDefault()}>
              {popularCities
                .filter((city) => city.toLowerCase().includes(to.toLowerCase()))
                .map((city) => (
                  <li key={city} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm" onClick={() => { setTo(city); setShowTo(false); }}>
                    {city}
                  </li>
                ))}
                {popularCities.filter((city) => city.toLowerCase().includes(to.toLowerCase())).length === 0 && <li className="px-4 py-2 text-gray-500 text-sm">No cities found</li>}
            </ul>
          )}
        </div>
      </div>

      {/* DATE */}
      <div className="flex items-center gap-3 flex-1 w-full md:w-auto pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0">
        <FaCalendarAlt className="text-gray-500 text-xl" />
        <div>
          <p className="text-xs text-gray-400 font-semibold">{t("date")}</p>
          <div className="flex items-center gap-2 mt-1">
            <button onClick={openDatePicker} className="font-bold text-lg outline-none cursor-pointer">
                {new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </button>
            <button
              onClick={() => setDate(todayStr)}
              className={`px-3 py-1.5 text-sm rounded-md border font-semibold transition-colors ${
                date === todayStr
                  ? "bg-red-50 text-red-600 border-red-300"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {t("today")}
            </button>
            <button
              onClick={() => setDate(tomorrowStr)}
              className={`px-3 py-1.5 text-sm rounded-md border font-semibold transition-colors ${
                date === tomorrowStr
                  ? "bg-red-50 text-red-600 border-red-300"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {t("tomorrow")}
            </button>
            <div className="relative">
              <input
                ref={dateInputRef}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BUTTON */}
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-lg w-full md:w-auto">
        {t("search").toUpperCase()}
      </button>
    </div>
  );
}
