import { FaTimes } from "react-icons/fa";

const CompareModal = ({ showCompareModal, setShowCompareModal, compareList }) => {
  if (!showCompareModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowCompareModal(false)}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">Compare Buses</h2>
          <button onClick={() => setShowCompareModal(false)}><FaTimes className="text-xl" /></button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 min-w-[600px]">
            <div className="font-bold text-gray-500 space-y-6 pt-12">
              <p>Operator</p>
              <p>Price</p>
              <p>Rating</p>
              <p>Type</p>
              <p>Departure</p>
              <p>Amenities</p>
            </div>
            {compareList.map((bus) => (
              <div key={bus.id} className="space-y-6 text-center border-l pl-2">
                <h3 className="font-bold text-lg h-12 flex items-center justify-center">{bus.name}</h3>
                <p className="font-bold text-xl">₹{bus.price}</p>
                <p className="text-green-600 font-bold">★ {bus.rating}</p>
                <p className="text-sm">{bus.type}</p>
                <p>{bus.departure}</p>
                <div className="text-xs text-gray-500 flex flex-wrap justify-center gap-1">{bus.amenities.join(", ")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;