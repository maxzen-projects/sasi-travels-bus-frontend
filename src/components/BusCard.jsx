     import { useNavigate } from "react-router-dom";
import { 
  FaStar, 
  FaCheckSquare, 
  FaRegSquare, 
  FaShareAlt, 
  FaBus, 
  FaMapMarkerAlt, 
  FaListUl 
} from "react-icons/fa";

export default function BusCard({
  bus,
  from,
  to,
  date,
  isCompareSelected,
  onToggleCompare,
  onViewAmenities,
  onViewBoardingPoints,
  onViewDroppingPoints
}) {
  const navigate = useNavigate();

  const handleShare = async (e) => {
    e.stopPropagation();
    const shareData = {
      title: `Bus Booking: ${bus.name}`,
      text: `Check out this bus from ${from} to ${to} by ${bus.name}. Price: ₹${bus.price}. Rating: ${bus.rating} stars.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
        shareData.text + " " + shareData.url
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition cursor-pointer">

      {/* ---------------- MOBILE + TABLET UI ---------------- */}
      <div className="md:hidden">

        {/* BUS NAME + PRICE */}
        <div className="flex justify-between items-start " >
          <h3 className="text-lg font-bold text-gray-800">
            {bus.name}
          </h3>

          <span className="text-xl font-bold text-gray-900">
            ₹{bus.price}
          </span>
        </div>

        <div className="space-y-3">

        

        {/* TIME */}
        <p className="text-sm text-gray-700 mt-1">
          {bus.departure} - {bus.arrival}
        </p>
        {/* SEATS */}
        <p className="text-xs text-gray-500 mt-1">
          Available seats: {bus.availableSeats}
        </p>

        {/* BUS TYPE */}
        <p className="text-xs text-gray-500 mt-1">
          {bus.type}
        </p>

        </div>

        {/* RATING + BUTTON */}
        <div className="flex flex-col justify-end  items-end gap-5 -mt-16">

              <div
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold
            ${
              bus.rating >= 4
                ? "border border-green-600 text-green-700"
                : "border border-red-600 text-red-600"
            }`}
          >
            <FaStar />
            {bus.rating}
          </div>

          <button
            onClick={() =>
              navigate("/select-seats", {
                state: { bus, from, to, date },
              })
            }
            className="bg-[#0070FF] text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Book Now
          </button>

        </div>

        {/* MOBILE ACTION BUTTONS */}
        <div className="grid grid-cols-5 gap-1 mt-6 pt-3 border-t text-[10px] font-medium">
          <button 
            onClick={onViewAmenities} 
            className="flex flex-col items-center gap-1 text-[#0070FF]"
          >
            <FaListUl className="text-lg" />
            <span>Amenities</span>
          </button>
          <button 
            onClick={onViewBoardingPoints} 
            className="flex flex-col items-center gap-1 text-[#0070FF]"
          >
            <FaBus className="text-lg" />
            <span>Boarding</span>
          </button>
          <button 
            onClick={onViewDroppingPoints} 
            className="flex flex-col items-center gap-1 text-[#0070FF]"
          >
            <FaMapMarkerAlt className="text-lg" />
            <span>Dropping</span>
          </button>
          <button 
            onClick={onToggleCompare} 
            className="flex flex-col items-center gap-1 text-gray-600"
          >
            {isCompareSelected ? <FaCheckSquare className="text-lg text-blue-600" /> : <FaRegSquare className="text-lg" />}
            <span>Compare</span>
          </button>
          <button 
            onClick={handleShare} 
            className="flex flex-col items-center gap-1 text-gray-600"
          >
            <FaShareAlt className="text-lg" />
            <span>Share</span>
          </button>
        </div>

      </div>

            

      {/* ---------------- DESKTOP / LAPTOP (UNCHANGED) ---------------- */}
      <div className="hidden md:block">

        {/* TOP ROW */}
        <div className="flex flex-col h-[70px] md:flex-row items-center justify-between gap-4 md:gap-6">

          {/* LEFT SECTION */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              {bus.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {bus.type}
            </p>

          </div>

          {/* CENTER TIMELINE */}
          <div className="flex items-center gap-2 sm:gap-4 w-full md:w-auto md:flex-[1.2] justify-between md:justify-center">

            <span className="text-lg font-semibold text-gray-800">
              {bus.departure}
            </span>

            <div className="flex flex-col items-center flex-grow max-w-[180px]">
              <span className="text-xs text-gray-400 mb-1">
                {bus.duration}
              </span>

              <div className="w-full h-[2px] bg-gray-300 relative">
                <div className="absolute left-0 -top-[3px] w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="absolute right-0 -top-[3px] w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            <span className="text-lg font-semibold text-gray-800">
              {bus.arrival}
            </span>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-row md:flex-col px-6 items-center md:items-end justify-between w-full md:w-auto md:min-w-[160px]">

            <div className="text-right ">
              <span className="text-sm font-medium text-gray-700">₹</span>
              <span className="text-2xl font-bold text-gray-900 ml-1">
                {bus.price}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <div className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                <FaStar className="text-[10px]" />
                {bus.rating}
              </div>
              <span className="text-xs text-gray-400">Overall</span>
            </div>

            {/* <button
              onClick={() =>
                navigate("/select-seats", {
                  state: { bus, from, to, date },
                })
              }
              className="mt-3 bg-[#0070FF] hover:bg-[#0056CC] text-white px-6 py-2 border-2 rounded-lg text-sm font-semibold transition"
            >
              View Seats
            </button> */}

          </div>
        </div>

        {/* BOTTOM LINKS (DESKTOP ONLY) */}
        <div className="flex flex-wrap gap-8 mt-5 pt-3 px-6 border-t text-sm text-[#0070FF] font-medium">

          <button onClick={onViewAmenities} className="flex items-center gap-1 hover:text-blue-800 transition-colors">
            <FaListUl className="text-md" />
            Amenities
          </button>

          <button onClick={onViewBoardingPoints} className="flex items-center gap-1 hover:text-blue-800 transition-colors">
            <FaBus className="text-md" />
            Boarding Points
          </button>

          <button onClick={onViewDroppingPoints} className="flex items-center gap-1 hover:text-blue-800 transition-colors">
            <FaMapMarkerAlt className="text-md" />
            Dropping Points
          </button>

          {/* <button>
            Photos
          </button>

          <button>
            Reviews & Ratings
          </button>

          <button>
            Bus Routes
          </button> */}

          <button
            onClick={onToggleCompare}
            className=" flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            {isCompareSelected ? <FaCheckSquare /> : <FaRegSquare />}
            Compare
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
          >
            <FaShareAlt />
            Share
          </button>

          <button
              onClick={() =>
                navigate("/select-seats", {
                  state: { bus, from, to, date },
                })
              }
              className="ml-auto bg-[#0070FF] hover:bg-[#0056CC] text-white px-6 py-2 border-2 rounded-lg text-sm font-semibold transition"
            >
              View Seats
            </button>

        </div>

      </div>

    </div>
  );
}