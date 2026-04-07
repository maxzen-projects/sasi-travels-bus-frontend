const SortingBar = ({ count, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 bg-white p-3 rounded-xl shadow-sm border">
      <span className="font-bold text-gray-700 text-center sm:text-left">
        {count} Buses found
      </span>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-gray-100 p-2 rounded text-sm"
      >
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="rating">Best Rated</option>
      </select>
    </div>
  );
};

export default SortingBar;