import {
  FaExchangeAlt,
  FaSearch,
  FaArrowLeft
} from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function ResultSearchForm({
  from,
  to,
  date,
  setFrom,
  setTo,
  setDate,
  swapCities,
  busCount = 59
}) {
  // 🔥 SCROLL VALUE (continuous)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ TODAY & TOMORROW STRINGS
  const todayString = new Date().toISOString().split("T")[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrowString = tomorrowDate.toISOString().split("T")[0];

  const getDayName = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" });
  };

  // 🔥 ANIMATION CALCULATIONS
  const maxScroll = 120;
  const progress = Math.min(scrollY / maxScroll, 1);

  const translateX = -30 + progress * 75; // logo slide
  const opacity = progress;

  const scale = 1 - progress * 0.05; // form shrink

  return (
    <div
      className="bg-white sticky top-0 z-50 border-b border-gray-200"
      style={{
        boxShadow:
          progress > 0 ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
        padding: progress > 0 ? "8px 0" : "16px 0",
        transition: "all 0.2s linear"
      }}
    >
      {/* ---------------- DESKTOP ---------------- */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center">

          {/* 🔥 LOGO (SMOOTH SLIDE) */}
          <div
            className="overflow-hidden mr-3"
            style={{
              width: `${progress * 96}px`
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="h-10"
              style={{
                transform: `translateX(${translateX}px)`,
                opacity: opacity,
                transition: "transform 1.2s ease, opacity 0.6s ease"
              }}
            />
          </div>

          {/* 🔥 SEARCH FORM */}
          <div
            className="flex items-center bg-white border border-gray-200 w-full rounded-3xl shadow-xl"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.1s linear"
            }}
          >
            {/* FROM */}
            <div className="flex items-center gap-3 px-6 py-4 border-r border-gray-200 flex-1">
              <div className="flex flex-col w-full">
                <span className="text-xs text-gray-500">From</span>
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="font-semibold text-gray-800 outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* SWAP */}
            <button
              onClick={swapCities}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0070FF] text-gray-700 -ml-5"
            >
              <FaExchangeAlt className="text-md text-white" />
            </button>

            {/* TO */}
            <div className="flex items-center gap-3 px-6 py-4 border-r border-gray-200 flex-1">
              <div className="flex flex-col w-full">
                <span className="text-xs text-gray-500">To</span>
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="font-semibold text-gray-800 outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* DATE */}
            <div className="flex items-center gap-3 px-6 py-4 border-r border-gray-200 flex-1">
              <div className="flex flex-col w-full">
                <span className="text-xs text-gray-500">
                  Date of Journey
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="font-semibold text-gray-800 outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* TODAY / TOMORROW */}
            <div className="flex items-center gap-2 px-4">
              <button
                onClick={() => setDate(todayString)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  date === todayString
                    ? "bg-[#0070FF] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Today
              </button>

              <button
                onClick={() => setDate(tomorrowString)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  date === tomorrowString
                    ? "bg-[#0070FF] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Tomorrow
              </button>
            </div>

            {/* SEARCH */}
            <button className="px-6 text-gray-700">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE HEADER ---------------- */}
      <div className="lg:hidden px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-gray-700 text-lg">
            <FaArrowLeft />
          </button>

          <div className="flex flex-col leading-tight">
            <h2 className="font-semibold text-gray-900 text-sm">
              {from} → {to}
            </h2>

            <span className="text-xs text-gray-500">
              {busCount} buses
            </span>
          </div>
        </div>

        <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
          <div>{date}</div>
          <span className="text-xs block">{getDayName(date)}</span>
        </div>
      </div>
    </div>
  );
}