import { FaTimes } from "react-icons/fa";

const CompareBar = ({ compareList, toggleCompare, setShowCompareModal }) => {
  if (compareList.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t z-40 p-4 flex justify-between items-center">
      <div className="flex gap-4 overflow-x-auto">
        {compareList.map((bus) => (
          <div key={bus.id} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg min-w-fit">
            <span className="text-sm font-semibold">{bus.name}</span>
            <button onClick={() => toggleCompare(bus)} className="text-gray-500 hover:text-red-500"><FaTimes /></button>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowCompareModal(true)}
        className="bg-[#273BE2] text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-blue-700 whitespace-nowrap ml-4"
      >
        Compare ({compareList.length})
      </button>
    </div>
  );
};

export default CompareBar;