import { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

const SidebarSection = ({ title, items, isOpen, onToggle, searchPlaceholder, selectedItems, setSelectedItems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full font-semibold text-gray-700 hover:text-blue-600 transition-colors text-base md:text-sm"
      >
        {title}
        {isOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
      </button>

      {isOpen && (
        <div className="mt-3 animate-fadeIn">
          <div className="relative mb-3">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border rounded-lg pl-8 pr-2 py-3 md:py-2 text-sm md:text-xs outline-none focus:border-blue-500"
              autoFocus
            />
          </div>
          <div className="max-h-60 md:max-h-40 overflow-y-auto space-y-3 md:space-y-2 custom-scrollbar">
            {filteredItems.map((item) => (
              <label key={item} className="flex items-center gap-3 md:gap-2 text-base md:text-sm text-gray-600 cursor-pointer hover:text-black">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => toggleItem(item)}
                  className="w-5 h-5 md:w-4 md:h-4 rounded text-blue-600 focus:ring-blue-500"
                />
                {item}
              </label>
            ))}
            {filteredItems.length === 0 && <p className="text-sm md:text-xs text-gray-400">No results found</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarSection;