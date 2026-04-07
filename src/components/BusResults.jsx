import SortingBar from "./SortingBar";
import BusCard from "./BusCard";

const BusResults = ({
  filteredBuses,
  sortBy,
  setSortBy,
  from,
  to,
  date,
  compareList,
  toggleCompare,
  setRightPanel,
}) => {
  return (
    <div className="col-span-12 md:col-span-9 space-y-6">
      <div className="space-y-4">
        {/* <SortingBar
          count={filteredBuses.length}
          sortBy={sortBy}
          setSortBy={setSortBy}
        /> */}

        <div className="h-4"></div>
        {filteredBuses.map((bus) => (
          <BusCard
            key={bus.id}
            bus={bus}
            from={from}
            to={to}
            date={date}
            isCompareSelected={!!compareList.find((b) => b.id === bus.id)}
            onToggleCompare={() => toggleCompare(bus)}
            onViewAmenities={() => setRightPanel({ type: 'amenities', bus })}
            onViewBoardingPoints={() => setRightPanel({ type: 'boarding', bus })}
            onViewDroppingPoints={() => setRightPanel({ type: 'dropping', bus })}
          />
        ))}
        {filteredBuses.length === 0 && (
          <p className="text-center text-gray-500">
            No buses found
          </p>
        )}
      </div>
    </div>
  );
};

export default BusResults;