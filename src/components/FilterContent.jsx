import {
  FaSnowflake,
  FaBed,
  FaBan,
  FaMapMarkerAlt,
  FaBusAlt,
  FaFire,
  FaRegClock,
  FaSun,
  FaMoon,
  FaSearch,
  FaMicrophone,
} from "react-icons/fa";
import robo from "../assets/roboLogo.png";
import SidebarSection from "./SidebarSection";
import { AvailableSeaterIcon } from "./seat/Seat";
import tic from "../assets/TicketToResale.jpg";

const amenitiesList = [
  "WiFi",
  "Charging Point",
  "Water Bottle",
  "Blanket",
  "Reading Light",
  "Movie",
  "Track My Bus",
  "Emergency Contact",
];

const popularData = {
  boarding: [
    "Kphb","Ameerpet","Gachibowli","Lb Nagar",
    "Lakdikapul","Miyapur","Mgbs","Jbs","Kukatpally","Nizampet"
  ],
  dropping: [
    "Majestic","Yeshwanthpur","Electronic City",
    "Whitefield","BTM Layout",
  ],
};

const FilterContent = ({
  filters,
  setFilters,
  departureTime,
  setDepartureTime,
  expandedSection,
  setExpandedSection,
  sidebarState,
  sortBy,
  setSortBy,
}) => {

  return (
    <div className="space-y-6 w-full">

      {/* SEARCH CARD */}
      <div className="bg-gradient-to-br from-purple-300 to-blue-400 rounded-2xl p-4 text-white shadow-md w-full">

        <div className="flex items-center gap-2 mb-4">
          <div className="bg-white text-blue-500 rounded-full ">
            <img src={robo}
            alt="robo"
            ></img>

          </div>

          <span className="text-sm font-semibold">
            Logo Name
          </span>
        </div>

        <div className="flex items-center gap-3">

          <div className="flex items-center bg-white text-gray-700 rounded-full px-3 py-2 flex-1">
            <FaSearch className="text-gray-400 mr-2" />

            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm w-full bg-transparent"
            />
          </div>

          <button className="bg-white text-gray-700 rounded-full p-3 shadow">
            <FaMicrophone />
          </button>

        </div>

      </div>

      {/* TICKET RESALE CARD */}
      <div
        className="rounded-2xl p-5 text-white shadow-md bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${tic})` }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-1">
          Ticket Resale
        </h3>

        <p className="text-sm font-semibold text-gray-900">
          Can't travel anymore? Easily resell your booked ticket and recover your amount.
        </p>
      </div>

      {/* FILTERS */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex flex-col w-full">

        {/* HEADER */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <h3 className="font-bold text-lg text-gray-900">
            Filters
          </h3>

          <button
            onClick={() => {
              setFilters({
                ac:false,
                nonac:false,
                sleeper:false,
                seater:false,
                maxPrice:3000,
              });

              setDepartureTime("");

              sidebarState.setBoardingPoints([]);
              sidebarState.setDroppingPoints([]);
              sidebarState.setSelectedAmenities([]);
            }}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase"
          >
            Clear All
          </button>
        </div>

        {/* BUS TYPE */}
        <div className="border-b border-gray-100 py-5">

          <h4 className="font-semibold text-gray-700 mb-3">
            Bus Type
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">

            {[
              { label: "AC", key: "ac", icon: <FaSnowflake /> },
              { label: "Sleeper", key: "sleeper", icon: <FaBed /> },
              { label: "Seater", key: "seater", icon: <AvailableSeaterIcon className="w-5 h-5 text-black text-bold" /> },
              { label: "Non AC", key: "nonac", icon: <FaBan /> },
              { label: "Bus Track", icon: <FaMapMarkerAlt /> },
              { label: "New Buses", icon: <FaBusAlt /> },
              { label: "Offers", icon: <FaFire /> },
            ].map((item,i)=>(

              <button
                key={i}
                onClick={() =>
                  item.key &&
                  setFilters({
                    ...filters,
                    [item.key]: !filters[item.key],
                  })
                }
                className={`border rounded-xl p-2 text-sm flex flex-col items-center gap-1
                ${
                  item.key && filters[item.key]
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
              >

                <span className="text-lg text-gray-700">
                  {item.icon}
                </span>

                {item.label}

              </button>

            ))}

          </div>

        </div>

        {/* SORT BY */}
<div className="border-b border-gray-100 py-5">

  <h4 className="font-semibold text-gray-700 mb-3">
    Sort by
  </h4>

  <div className="flex flex-col gap-3">

    {[
      "Cheapest first",
      "Fastest first",
      "Early departure",
      "Late departure",
    ].map((option) => (

      <button
        key={option}
        onClick={() =>
          sidebarState.setSortBy(
            sidebarState.sortBy === option ? "" : option
          )
        }
        className={`border rounded-xl px-4 py-2 text-sm text-left transition
        ${
          sidebarState.sortBy === option
            ? "border-blue-600 bg-blue-50 text-blue-600"
            : "border-gray-300 text-gray-700 hover:border-blue-400"
        }`}
      >
        {option}
      </button>

    ))}

  </div>

</div>

        {/* SMART CANCELLATION */}

<div className="border-t pt-4">

  <h3 className="font-medium sm:text-base mb-2">
    Smart Cancellation
  </h3>

  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">

    <input
      type="checkbox"
      
      className="accent-blue-600 "
    />

    <span className="text:xs">
      Seat Cancellation available on selected buses
    </span>

  </div>

</div>

        <div className="border-b border-gray-100 py-5">

          <div className="flex justify-between items-center mb-3">

            <h4 className="font-medium">
              Price Range
            </h4>

            <span className="text-sm font-bold text-gray-600">
              ₹{filters.maxPrice}
            </span>

          </div>

          <input
            type="range"
            min="468"
            max="6000"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({
                ...filters,
                maxPrice:Number(e.target.value),
              })
            }
            className="w-full accent-[#0070FF] rounded-lg cursor-pointer"
          />

          <div className="flex justify-between text-sm mt-1">
            <span>₹468</span>
            <span>₹6000</span>
          </div>

        </div>

        {/* AMENITIES */}
        <SidebarSection
          title="Amenities"
          items={amenitiesList}
          isOpen={expandedSection === "amenities"}
          onToggle={() =>
            setExpandedSection(
              expandedSection === "amenities" ? "" : "amenities"
            )
          }
          searchPlaceholder="Search amenities"
          selectedItems={sidebarState.selectedAmenities}
          setSelectedItems={sidebarState.setSelectedAmenities}
        />

        {/* PRICE RANGE */}
        

        {/* BOARDING POINTS */}
        <SidebarSection
          title="Boarding Points"
          items={popularData.boarding}
          isOpen={expandedSection === "boarding"}
          onToggle={() =>
            setExpandedSection(
              expandedSection === "boarding" ? "" : "boarding"
            )
          }
          searchPlaceholder="Search boarding points"
          selectedItems={sidebarState.boardingPoints}
          setSelectedItems={sidebarState.setBoardingPoints}
        />

        {/* DROPPING POINTS */}
        <SidebarSection
          title="Dropping Points"
          items={popularData.dropping}
          isOpen={expandedSection === "dropping"}
          onToggle={() =>
            setExpandedSection(
              expandedSection === "dropping" ? "" : "dropping"
            )
          }
          searchPlaceholder="Search dropping points"
          selectedItems={sidebarState.droppingPoints}
          setSelectedItems={sidebarState.setDroppingPoints}
        />

        {/* DEPARTURE TIME */}
        <div className="py-5">

          <h4 className="font-semibold text-gray-700 mb-3">
            Departure Time
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

            {[
              { label: "Before 10 AM", icon: <FaRegClock /> },
              { label: "10 AM - 5 PM", icon: <FaSun /> },
              { label: "5 PM - 11 PM", icon: <FaSun /> },
              { label: "After 11 PM", icon: <FaMoon /> },
            ].map((item)=>(
              
              <button
                key={item.label}
                onClick={() =>
                  setDepartureTime(
                    departureTime === item.label ? "" : item.label
                  )
                }
                className={`border rounded-xl p-2 text-sm flex items-center justify-center gap-2
                ${
                  departureTime === item.label
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
              >

                {item.icon}

                {item.label}

              </button>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default FilterContent;