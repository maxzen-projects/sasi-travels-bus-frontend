import { useState } from "react";

export default function useBusFilters() {

  const [filters, setFilters] = useState({
    ac: false,
    nonac: false,
    sleeper: false,
    seater: false,
    maxPrice: 3000
  });

  const [boardingPoints, setBoardingPoints] = useState([]);
  const [droppingPoints, setDroppingPoints] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [departureTime, setDepartureTime] = useState("");

  const toggleFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const setPrice = (price) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: price
    }));
  };

  const resetFilters = () => {
    setFilters({
      ac: false,
      nonac: false,
      sleeper: false,
      seater: false,
      maxPrice: 3000
    });

    setBoardingPoints([]);
    setDroppingPoints([]);
    setSelectedAmenities([]);
    setDepartureTime("");
  };

  return {
    filters,
    setFilters,
    toggleFilter,
    setPrice,

    boardingPoints,
    setBoardingPoints,

    droppingPoints,
    setDroppingPoints,

    selectedAmenities,
    setSelectedAmenities,

    departureTime,
    setDepartureTime,

    resetFilters
  };
}