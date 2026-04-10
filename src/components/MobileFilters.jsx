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
          <div className="bg-white w-full rounded-t-3xl flex flex-col max-h-[90vh]">
            <div className="overflow-y-auto p-5 pb-2">
              <FilterContent {...filterProps} />
            </div>
            <button
              onClick={() => setShowFilters(false)}
              className="w-full bg-[#273BE2] text-white py-4 font-bold rounded-none"
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