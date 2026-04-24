import {
  FaBus,
  FaCheckSquare,
  FaListUl,
  FaMapMarkerAlt,
  FaRegSquare,
  FaShareAlt,
} from "react-icons/fa";

export default function BusActions({
  isCompareSelected,
  onToggleCompare,
  onViewAmenities,
  onViewBoardingPoints,
  onViewDroppingPoints,
  onShare,
  variant = "desktop",
}) {
  if (variant === "mobile") {
    return (
      <div className="grid grid-cols-5 gap-1 mt-6 pt-3 border-t text-[10px] font-medium">
        <button onClick={onViewAmenities} className="flex flex-col items-center gap-1 text-[#0070FF]">
          <FaListUl className="text-lg" />
          <span>Amenities</span>
        </button>
        <button onClick={onViewBoardingPoints} className="flex flex-col items-center gap-1 text-[#0070FF]">
          <FaBus className="text-lg" />
          <span>Boarding</span>
        </button>
        <button onClick={onViewDroppingPoints} className="flex flex-col items-center gap-1 text-[#0070FF]">
          <FaMapMarkerAlt className="text-lg" />
          <span>Dropping</span>
        </button>
        <button onClick={onToggleCompare} className="flex flex-col items-center gap-1 text-gray-600">
          {isCompareSelected ? <FaCheckSquare className="text-lg text-blue-600" /> : <FaRegSquare className="text-lg" />}
          <span>Compare</span>
        </button>
        <button onClick={onShare} className="flex flex-col items-center gap-1 text-gray-600">
          <FaShareAlt className="text-lg" />
          <span>Share</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-8 mt-5 pt-3 px-6 pr-40 border-t text-sm text-[#0070FF] font-medium">
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

      <button onClick={onToggleCompare} className=" flex items-center gap-1 text-gray-600 hover:text-gray-900">
        {isCompareSelected ? <FaCheckSquare /> : <FaRegSquare />}
        Compare
      </button>

      <button onClick={onShare} className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
        <FaShareAlt />
        Share
      </button>
    </div>
  );
}
