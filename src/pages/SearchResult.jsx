import { useLocation } from "react-router-dom";
import { useState, useMemo } from "react";


import ResultSearchForm from "../components/ResultSearchForm";
import FiltersSidebar from "../components/FiltersSidebar";
import BusResults from "../components/BusResults";
import RightSidePanel from "../components/RightSidePanel";
import CompareBar from "../components/CompareBar";
import CompareModal from "../components/CompareModal";
import MobileFilters from "../components/MobileFilters";

import useBusFilters from "../hooks/useBusFilters";
import Offers from "./Offers";

const buses = [
  {
    id: 1,
    name: "IntrCity SmartBus",
    type: "AC Seater / Sleeper (2+1)",
    layoutType: "1+2_mixed",
    category: ["AC", "Sleeper"],
    departure: "22:00",
    arrival: "06:00",
    duration: "8h",
    price: 850,
    rating: 4.5,
    seats: 24,
    amenities: ["WiFi", "Charging Point", "Water Bottle", "Blanket", "Reading Light"],
    boardingPoints: ["Kphb", "Ameerpet", "Miyapur", "Kukatpally"],
    droppingPoints: ["Majestic", "Electronic City", "BTM Layout"]
  },

  {
    id: 2,
    name: "Orange Tours",
    type: "Non-AC Seater (2+2)",
    layoutType: "2+2",   // NEW
    category: ["Non-AC", "Seater"],
    departure: "10:30",
    arrival: "18:15",
    duration: "7h 45m",
    price: 600,
    rating: 4.2,
    seats: 15,
    amenities: ["Charging Point", "Movie", "Emergency Contact"],
    boardingPoints: ["Gachibowli", "Lb Nagar", "Lakdikapul", "Mgbs"],
    droppingPoints: ["Yeshwanthpur", "Whitefield"]
  },

  {
    id: 3,
    name: "GreenLine Travels",
    type: "AC Sleeper (1+2)",
    layoutType: "1+2",
    category: ["AC", "Sleeper"],
    departure: "14:15",
    arrival: "21:00",
    duration: "7h 45m",
    price: 1200,
    rating: 4.8,
    seats: 30,
    amenities: ["WiFi", "Track My Bus", "Water Bottle", "Blanket"],
    boardingPoints: ["Jbs", "Nizampet", "Ameerpet"],
    droppingPoints: ["Majestic", "Yeshwanthpur"]
  },
  {
    id: 4,
    name: "VRL Travels",
    type: "AC Seater/Sleeper (2+1)",
    layoutType: "seater_sleeper",
    category: ["AC", "Seater", "Sleeper"],
    departure: "21:30",
    arrival: "07:00",
    duration: "9h 30m",
    price: 1100,
    rating: 4.4,
    seats: 18,
    amenities: ["WiFi", "Charging Point", "Blanket", "Track My Bus"],
    boardingPoints: ["Kphb", "Miyapur", "Jbs"],
    droppingPoints: ["Majestic", "Electronic City", "Whitefield"]
  }
];

export default function SearchResult() {

  const location = useLocation();

  const initial =
    location.state || {
      from: "KPHB, Hyderabad",
      to: "Visakhapatnam",
      date: new Date().toISOString().split("T")[0],
    };

  const [from, setFrom] = useState(initial.from);
  const [to, setTo] = useState(initial.to);
  const [date, setDate] = useState(initial.date);

  const [showFilters, setShowFilters] = useState(false);
  const [expandedSection, setExpandedSection] = useState("");

  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [rightPanel, setRightPanel] = useState({ type: null, bus: null });

  const [sortBy, setSortBy] = useState("price_asc");

  /* HOOK FOR FILTER LOGIC */

  const {
    filters,
    setFilters,
    boardingPoints,
    setBoardingPoints,
    droppingPoints,
    setDroppingPoints,
    selectedAmenities,
    setSelectedAmenities,
    departureTime,
    setDepartureTime
  } = useBusFilters();


  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };


  const toggleCompare = (bus) => {

    if (compareList.find((b) => b.id === bus.id)) {

      setCompareList(compareList.filter((b) => b.id !== bus.id));

    } else {

      if (compareList.length >= 3) {
        alert("You can compare up to 3 buses only.");
        return;
      }

      setCompareList([...compareList, bus]);

    }
  };


  /* BUS FILTERING */

  const filteredBuses = useMemo(() => {

    let result = buses.filter((bus) => {

      if (bus.price > filters.maxPrice) return false;

      if (filters.ac && !bus.category.includes("AC")) return false;
      if (filters.nonac && !bus.category.includes("Non-AC")) return false;
      if (filters.sleeper && !bus.category.includes("Sleeper")) return false;
      if (filters.seater && !bus.category.includes("Seater")) return false;


      if (departureTime) {

        const hour = parseInt(bus.departure.split(":")[0], 10);

        if (departureTime === "Before 10 AM" && hour >= 10) return false;

        if (departureTime === "10 AM - 5 PM" && (hour < 10 || hour >= 17)) return false;

        if (departureTime === "5 PM - 11 PM" && (hour < 17 || hour >= 23)) return false;

        if (departureTime === "After 11 PM" && hour < 23) return false;

      }


      if (boardingPoints.length > 0) {

        if (!boardingPoints.some((bp) => bus.boardingPoints?.includes(bp))) return false;

      }


      if (droppingPoints.length > 0) {

        if (!droppingPoints.some((dp) => bus.droppingPoints?.includes(dp))) return false;

      }


      if (selectedAmenities.length > 0) {

        if (!selectedAmenities.every((a) => bus.amenities?.includes(a))) return false;

      }

      return true;

    });


    if (sortBy === "price_asc") {

      result.sort((a, b) => a.price - b.price);

    } else if (sortBy === "price_desc") {

      result.sort((a, b) => b.price - a.price);

    } else if (sortBy === "rating") {

      result.sort((a, b) => b.rating - a.rating);

    }

    return result;

  }, [
    filters,
    departureTime,
    sortBy,
    boardingPoints,
    droppingPoints,
    selectedAmenities
  ]);


  const filterProps = {

    filters,
    setFilters,
    departureTime,
    setDepartureTime,
    expandedSection,
    setExpandedSection,

    sidebarState: {

      boardingPoints,
      setBoardingPoints,
      droppingPoints,
      setDroppingPoints,
      selectedAmenities,
      setSelectedAmenities,

    },

  };


  return (

    <div className="min-h-screen bg-white pt-16">

      

      <ResultSearchForm
        from={from}
        to={to}
        date={date}
        setFrom={setFrom}
        setTo={setTo}
        setDate={setDate}
        swapCities={swapCities}
      />

      <Offers />

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 p-4 mt-6 lg:mt-8">
        <div className="hidden lg:block col-span-3">
          <FiltersSidebar {...filterProps} />
        </div>

        <div className="col-span-12 lg:col-span-9">
          <BusResults
            filteredBuses={filteredBuses}
            sortBy={sortBy}
            setSortBy={setSortBy}
            from={from}
            to={to}
            date={date}
            compareList={compareList}
            toggleCompare={toggleCompare}
            setRightPanel={setRightPanel}
          />
        </div>

      </div>

      <RightSidePanel
        panelData={rightPanel}
        onClose={() => setRightPanel({ type: null, bus: null })}
      />

      <CompareBar
        compareList={compareList}
        toggleCompare={toggleCompare}
        setShowCompareModal={setShowCompareModal}
      />

      <CompareModal
        showCompareModal={showCompareModal}
        setShowCompareModal={setShowCompareModal}
        compareList={compareList}
      />

      <MobileFilters
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        {...filterProps}
      />

    </div>
  );
}