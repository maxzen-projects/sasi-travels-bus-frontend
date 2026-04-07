import { FaFilter } from "react-icons/fa";
import FilterContent from "./FilterContent";

const MobileFilters = ({ showFilters, setShowFilters, ...filterProps }) => {
  return (
    <>
      <button
        onClick={() => setShowFilters(true)}
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full"
      >
        <FaFilter /> Filters
      </button>

      {showFilters && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-xl p-4">
            <FilterContent {...filterProps} />
            <button
              onClick={() => setShowFilters(false)}
              className="w-full mt-4 bg-[#273BE2] text-white py-3 rounded-lg font-bold"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileFilters;