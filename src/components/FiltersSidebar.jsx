import FilterContent from "./FilterContent";

const FiltersSidebar = (props) => (
  <aside className="hidden md:block md:col-span-4 lg:col-span-3 sticky top-24 h-fit">
    <FilterContent {...props} />
  </aside>
);

export default FiltersSidebar;