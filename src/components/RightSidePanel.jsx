import { FaWifi, FaPlug, FaTint, FaChevronDown, FaLightbulb, FaVideo, FaMapMarkerAlt, FaPhone, FaTimes, FaBus } from "react-icons/fa";

const RightSidePanel = ({ panelData, onClose }) => {
  if (!panelData.bus) return null;

  const { bus } = panelData;
  const amenityIcons = {
    "WiFi": <FaWifi />,
    "Charging Point": <FaPlug />,
    "Water Bottle": <FaTint />,
    "Blanket": <FaChevronDown className="rotate-180" />,
    "Reading Light": <FaLightbulb />,
    "Movie": <FaVideo />,
    "Track My Bus": <FaMapMarkerAlt />,
    "Emergency Contact": <FaPhone />,
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/20" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-sm sm:w-80 h-full shadow-2xl p-6 animate-slideInRight overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-600">
          <FaTimes className="text-xl" />
        </button>
        <h3 className="text-xl font-bold mb-1">{bus.name}</h3>
        <p className="text-sm text-gray-500 mb-6">{bus.type}</p>

        {/* Boarding Points */}
        <div className="mb-6">
          <h4 className="font-semibold border-b pb-2 mb-4">Boarding Points</h4>
          <div className="space-y-3">
            {(bus.boardingPoints || []).map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-600 bg-blue-50 p-2 rounded-full">
                  <FaBus />
                </span>
                <span>{item}</span>
              </div>
            ))}
            {(!bus.boardingPoints || bus.boardingPoints.length === 0) && <p className="text-sm text-gray-400">No boarding points available.</p>}
          </div>
        </div>

        {/* Dropping Points */}
        <div className="mb-6">
          <h4 className="font-semibold border-b pb-2 mb-4">Dropping Points</h4>
          <div className="space-y-3">
            {(bus.droppingPoints || []).map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-600 bg-blue-50 p-2 rounded-full">
                  <FaMapMarkerAlt />
                </span>
                <span>{item}</span>
              </div>
            ))}
            {(!bus.droppingPoints || bus.droppingPoints.length === 0) && <p className="text-sm text-gray-400">No dropping points available.</p>}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <h4 className="font-semibold border-b pb-2 mb-4">Amenities</h4>
          <div className="space-y-3">
            {(bus.amenities || []).map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-600 bg-blue-50 p-2 rounded-full">
                  {amenityIcons[item] || <FaBus />}
                </span>
                <span>{item}</span>
              </div>
            ))}
            {(!bus.amenities || bus.amenities.length === 0) && <p className="text-sm text-gray-400">No amenities available.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidePanel;