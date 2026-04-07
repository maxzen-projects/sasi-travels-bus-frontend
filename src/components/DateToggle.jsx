export default function DateToggle({
  date,
  setDate,
  todayString,
  tomorrowString,
}) {
  return (
    <div className="flex items-center gap-2 px-6">
      <div className=" rounded-full p-1 gap-6 flex">
        <button
          onClick={() => setDate(todayString)}
          className={`px-5 py-2 rounded-full text-sm transition-colors ${
            date === todayString
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          Today
        </button>
        <button
          onClick={() => setDate(tomorrowString)}
          className={`px-5 py-2 rounded-full text-sm transition-colors ${
            date === tomorrowString
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          Tomorrow
        </button>
      </div>
    </div>
  );
}