import { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaCalendarAlt
} from "react-icons/fa";

export default function SearchForm() {
  const navigate = useNavigate();

  const cities = [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Vizag",
    "Vijayawada",
    "Mumbai",
    "Pune",
    "Delhi",
  ];

  const [from, setFrom] = useState("Hyderabad");
  const [to, setTo] = useState("Bangalore");

  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);

  const fromRef = useRef(null);
  const toRef = useRef(null);

  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // ✅ TODAY & TOMORROW
  const todayString = new Date().toISOString().split("T")[0];

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrowString = tomorrowDate.toISOString().split("T")[0];

  // ✅ ACTIVE STATES
  const isToday = date === todayString;
  const isTomorrow = date === tomorrowString;

  // ✅ CLOSE DROPDOWNS ON CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromRef.current && !fromRef.current.contains(event.target)) {
        setShowFromList(false);
      }
      if (toRef.current && !toRef.current.contains(event.target)) {
        setShowToList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🔄 SWAP
  const swapCities = useCallback(() => {
    setFrom(to);
    setTo(from);
  }, [from, to]);

  // 🔍 SEARCH
  const handleSearch = () => {
    const selectedDate = new Date(date);
    const today = new Date(todayString);

    if (from === to) {
      alert("Source and destination cannot be the same. Please select different cities.");
      return;
    }
    if (selectedDate < today) {
      alert("Please select a current or future date for your journey.");
      return;
    }
    navigate("/results", { state: { from, to, date } });
  };

  return (
    <div className="relative -mt-12 z-20 max-w-6xl mx-auto px-4">

      {/* ================= MOBILE DESIGN ================= */}
      <div className="block md:hidden bg-[#f3f3f3] rounded-2xl p-4 shadow-md">

        {/* HEADING */}
        <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
          Find a route,<br />Let’s make a journey.
        </h2>

        {/* FROM */}
        <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm mb-1 relative" ref={fromRef}>
          <FaMapMarkerAlt className="text-gray-500" />
          <div className="w-full">
            <p className="text-xs text-gray-400">From</p>
            <input
              type="text"
              value={from}
              onChange={(e) => { setFrom(e.target.value); setShowFromList(true); }}
              onFocus={() => setShowFromList(true)}
              className="font-semibold text-gray-800 outline-none w-full bg-transparent cursor-pointer"
              placeholder="Enter city"
            />
            {showFromList && (
              <ul className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-xl shadow-lg z-30 max-h-40 overflow-y-auto">
                {cities.filter(c => c.toLowerCase().includes(from.toLowerCase())).map((city) => (
                  <li
                    key={city}
                    onClick={() => { setFrom(city); setShowFromList(false); }}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium border-b last:border-0"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* SWAP */}
        <div className="flex justify-end -mt-4 -mb-2 pr-2">
          <button
            onClick={swapCities}
            className="bg-blue-600 text-white p-2 rounded-full shadow-md"
          >
            <FaExchangeAlt />
          </button>
        </div>

        {/* TO */}
        <div className="bg-white rounded-xl p-2 flex items-center gap-3 shadow-sm mb-4 relative" ref={toRef}>
          <FaMapMarkerAlt className="text-gray-500" />
          <div className="w-full">
            <p className="text-xs text-gray-400">To</p>
            <input
              type="text"
              value={to}
              onChange={(e) => { setTo(e.target.value); setShowToList(true); }}
              onFocus={() => setShowToList(true)}
              className="font-semibold text-gray-800 outline-none w-full bg-transparent cursor-pointer"
              placeholder="Enter city"
            />
            {showToList && (
              <ul className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-xl shadow-lg z-30 max-h-40 overflow-y-auto">
                {cities.filter(c => c.toLowerCase().includes(to.toLowerCase())).map((city) => (
                  <li
                    key={city}
                    onClick={() => { setTo(city); setShowToList(false); }}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium border-b last:border-0"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* DATE + TOGGLE */}
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex-1 bg-white rounded-xl p-3 flex items-center gap-2 shadow-sm">
            <FaCalendarAlt className="text-gray-500" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-none text-sm font-medium"
            />
          </div>

          {/* TOGGLE */}
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-gray-200 rounded-full p-1 flex gap-1">
              <button
                onClick={() => setDate(todayString)}
                className={`px-3 py-1 rounded-full text-xs ${
                  isToday ? "bg-blue-600 text-white" : "text-gray-700"
                }`}
              >
                Today
              </button>
              <button
                onClick={() => setDate(tomorrowString)}
                className={`px-3 py-1 rounded-full text-xs ${
                  isTomorrow ? "bg-blue-600 text-white" : "text-gray-700"
                }`}
              >
                Tomorrow
              </button>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold"
        >
          Search
        </button>
      </div>

      {/* ================= DESKTOP DESIGN ================= */}
      <div className="hidden mb-8 md:block">

        <div className="bg-[#f1f1f1] p-6 rounded-2xl shadow-md ">

          <div className="flex items-center h-16  bg-white rounded-xl border border-gray-300 overflow-hidden">

            {/* FROM */}
            <div className="flex-1 px-6 py-3 relative" ref={fromRef}>
              <p className="text-xs text-gray-500">From</p>
              <input
                type="text"
                value={from}
                onChange={(e) => { setFrom(e.target.value); setShowFromList(true); }}
                onFocus={() => setShowFromList(true)}
                className="text-lg font-semibold outline-none w-full bg-transparent cursor-pointer"
                placeholder="Source City"
              />
              {showFromList && (
                <ul className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto">
                  {cities.filter(c => c.toLowerCase().includes(from.toLowerCase())).map((city) => (
                    <li
                      key={city}
                      onClick={() => { setFrom(city); setShowFromList(false); }}
                      className="px-6 py-3 hover:bg-blue-50 cursor-pointer text-base font-semibold border-b last:border-0"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* DIVIDER */}
            <div className="h-16 w-[1px] bg-gray-300"></div>

            {/* SWAP */}
            <div className="relative">
              <button
                onClick={swapCities}
                className="absolute -left-5 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-md"
              >
                <FaExchangeAlt />
              </button>
            </div>

            {/* TO */}
            <div className="flex-1 px-6 py-3 pl-10 relative" ref={toRef}>
              <p className="text-xs text-gray-500">To</p>
              <input
                type="text"
                value={to}
                onChange={(e) => { setTo(e.target.value); setShowToList(true); }}
                onFocus={() => setShowToList(true)}
                className="text-lg font-semibold outline-none w-full bg-transparent cursor-pointer"
                placeholder="Destination City"
              />
              {showToList && (
                <ul className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto">
                  {cities.filter(c => c.toLowerCase().includes(to.toLowerCase())).map((city) => (
                    <li
                      key={city}
                      onClick={() => { setTo(city); setShowToList(false); }}
                      className="px-6 py-3 hover:bg-blue-50 cursor-pointer text-base font-semibold border-b last:border-0"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* DIVIDER */}
            <div className="h-16 w-[1px] bg-gray-300"></div>

            {/* DATE */}
            <div className="flex items-center gap-3 px-6 py-3 flex-1">
              <FaCalendarAlt className="text-gray-600" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="text-lg font-semibold outline-none"
              />
            </div>

            {/* TOGGLE */}
            <div className="flex items-center px-4">
              <div className="bg-gray-200 rounded-full p-1 flex gap-1">
                <button
                  onClick={() => setDate(todayString)}
                  className={`px-5 py-2 rounded-full text-sm ${
                    isToday ? "bg-blue-600 text-white" : "text-gray-700"
                  }`}
                >
                  Today
                </button>

                <button
                  onClick={() => setDate(tomorrowString)}
                  className={`px-5 py-2 rounded-full text-sm ${
                    isTomorrow ? "bg-blue-600 text-white" : "text-gray-700"
                  }`}
                >
                  Tomorrow
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* SEARCH BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-16 py-3 rounded-xl text-lg font-semibold shadow-lg mt-[-20px]"
          >
            Search
          </button>
        </div>

      </div>
    </div>
  );
}