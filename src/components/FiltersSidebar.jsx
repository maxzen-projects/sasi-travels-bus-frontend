import FilterContent from "./FilterContent";

const FiltersSidebar = (props) => (
  <aside className="hidden lg:block lg:col-span-3 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 custom-scrollbar">
    <FilterContent {...props} />
  </aside>
);

export default FiltersSidebar;