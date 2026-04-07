import React from "react";
import { useState } from "react";
import SeatHoldBanner from "./SeatHoldBanner";
import {
  FaStar,
  FaWifi,
  FaPlug,
  FaMapMarkerAlt,
  FaTv,
  FaBed
} from "react-icons/fa";

export default function BusDetailsPanel({
  bus,
  selectedSeats,
  totalPrice,
  handleProceed,
  minutes,
  seconds,
  expired,
}) {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const [activeTab, setActiveTab] = useState("boarding");
const [search, setSearch] = useState("");

const boardingPoints = [
  {
    name: "Ashok Nagar",
    address: "Near Jyothi Theater, Ashok Nagar, Hyderabad",
  },
  {
    name: "Chanda Nagar",
    address: "Near Hotel Kinnara Residence, Chanda Nagar, Hyderabad",
  },
  {
    name: "Miyapur Alwyn X Road",
    address: "Opposite Athidi Restaurant",
  },
  {
    name: "Miyapur",
    address: "Miyapur pillar no A610 towards kukatpally",
  },
];

const droppingPoints = [
  {
    name: "Anantapur",
    address: "Near Bus Stand",
  },
  {
    name: "Penukonda",
    address: "Penukonda Center",
  },
  {
    name: "Bangalore",
    address: "Majestic Bus Stand",
  },
];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm space-y-6 sm:space-y-8 w-full">

      {/* SEAT HOLD */}
      {(selectedSeats.length > 0 || expired) && (
        <SeatHoldBanner minutes={minutes} seconds={seconds} expired={expired} />
      )}

      {/* BUS TITLE */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">

        <div>
          <h2 className="text-lg sm:text-xl font-bold">
            GRT Travels
          </h2>

          <p className="text-xs sm:text-sm text-gray-500">
            Bharat Benz AC Seater / Sleeper (2+1)
          </p>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            18:00 → 06:00
          </p>
        </div>

        <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs sm:text-sm w-fit">
          <FaStar className="text-green-600" />
          4.8
        </div>

      </div>

      {/* TABS */}
      <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm border-b pb-2 overflow-x-auto scrollbar-hide">

        <button
          onClick={() => scrollToSection("photos")}
          className="text-blue-600 border-b-2 border-blue-600 pb-1 whitespace-nowrap"
        >
          Photos
        </button>

        <button
          onClick={() => scrollToSection("reviews")}
          className="text-gray-500 hover:text-blue-600 transition whitespace-nowrap"
        >
          Reviews
        </button>

        <button
          onClick={() => scrollToSection("amenities")}
          className="text-gray-500 hover:text-blue-600 transition whitespace-nowrap"
        >
          Amenities
        </button>

        <button
          onClick={() => scrollToSection("route")}
          className="text-gray-500 hover:text-blue-600 transition whitespace-nowrap"
        >
          Bus Route
        </button>

      </div>

      {/* PHOTOS */}
      <div id="photos" className="scroll-mt-32">

        <h3 className="font-semibold mb-3 text-sm sm:text-base">
          Photos
        </h3>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide">

          <img
            src="https://picsum.photos/200/120?1"
            alt="bus"
            className="rounded-lg w-32 sm:w-40 h-20 sm:h-24 object-cover"
          />

          <img
            src="https://picsum.photos/200/120?2"
            alt="bus interior"
            className="rounded-lg w-32 sm:w-40 h-20 sm:h-24 object-cover"
          />

          <img
            src="https://picsum.photos/200/120?3"
            alt="bus sleeper"
            className="rounded-lg w-32 sm:w-40 h-20 sm:h-24 object-cover"
          />

        </div>

      </div>

      {/* RATINGS */}
      <div id="reviews" className="scroll-mt-32">

        <h3 className="font-semibold mb-4 text-sm sm:text-base">
          Reviews & Ratings
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <FaStar className="text-green-500" />
          <span className="font-bold text-lg">4.8</span>
          <span className="text-gray-400 text-xs sm:text-sm">
            720 Ratings
          </span>
        </div>

        <div className="space-y-2 text-xs sm:text-sm">

          {[5,4,3,2,1].map((star) => (

            <div key={star} className="flex items-center gap-2">

              <span className="w-4">{star}</span>

              <div className="flex-1 bg-gray-200 h-2 rounded">

                <div
                  className={`bg-blue-500 h-2 rounded ${
                    star === 5
                      ? "w-[80%]"
                      : star === 4
                      ? "w-[30%]"
                      : star === 3
                      ? "w-[10%]"
                      : star === 2
                      ? "w-[5%]"
                      : "w-[2%]"
                  }`}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* REVIEWS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="border border-blue-500 rounded-xl p-4">

          <div className="flex text-yellow-400 mb-2 text-sm">
            ⭐⭐⭐⭐⭐
          </div>

          <h4 className="font-semibold text-sm sm:text-base">
            Ashok Kumar
          </h4>

          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            I booked my ticket few days ago and had a smooth experience.
            Clean bus and professional staff.
          </p>

        </div>

        <div className="border border-blue-500 rounded-xl p-4">

          <div className="flex text-yellow-400 mb-2 text-sm">
            ⭐⭐⭐⭐⭐
          </div>

          <h4 className="font-semibold text-sm sm:text-base">
            Vijay Sharma
          </h4>

          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Boarding journey through the whole experience was excellent.
            Clean sleeper and smooth ride.
          </p>

        </div>

      </div>

      <button className="w-full bg-gray-100 py-3 rounded-full text-xs sm:text-sm text-blue-600 hover:bg-gray-200 transition">
        View all reviews
      </button>

      {/* AMENITIES */}
      <div id="amenities" className="scroll-mt-32">

        <h3 className="font-semibold mb-4 text-sm sm:text-base">
          Amenities
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 text-center">

          <Amenity icon={<FaBed />} label="Blankets & Pillows" />
          <Amenity icon={<FaTv />} label="Entertainment" />
          <Amenity icon={<FaMapMarkerAlt />} label="GPS Tracking" />
          <Amenity icon={<FaWifi />} label="Wifi" />
          <Amenity icon={<FaPlug />} label="Charging Points" />

        </div>

      </div>

      {/* ROUTE */}
      <div id="route" className="scroll-mt-32">

        <h3 className="font-semibold mb-2 text-sm sm:text-base">
          Bus Route
        </h3>

        <p className="text-xs sm:text-sm text-gray-600">
          Hyderabad → Kurnool → Gooty → Anantapur → Penukonda → Bangalore
        </p>

      </div>
      {/* BOARDING / DROPPING POINTS */}

<div id="boarding" className="scroll-mt-32">

  <h3 className="font-semibold mb-4 text-sm sm:text-base">
    Boarding/Dropping points
  </h3>

  <div className="bg-gray-100 rounded-2xl p-4">

    {/* TABS */}

    <div className="flex justify-center gap-8 mb-4">

      <button
        onClick={() => setActiveTab("boarding")}
        className={`text-sm ${
          activeTab === "boarding"
            ? "text-blue-600 font-semibold"
            : "text-gray-500"
        }`}
      >
        Boarding points
      </button>

      <button
        onClick={() => setActiveTab("dropping")}
        className={`text-sm ${
          activeTab === "dropping"
            ? "text-blue-600 font-semibold"
            : "text-gray-500"
        }`}
      >
        Dropping points
      </button>

    </div>

    {/* SEARCH */}

    <div className="mb-4 px-28">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-8 py-2 rounded-full border text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* LIST */}

    <div className="space-y-4 px-8">

      {(activeTab === "boarding"
        ? boardingPoints
        : droppingPoints
      )
        .filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((point, index) => (

          <div key={index} className="flex gap-3 items-start">

            <input type="radio" name="point" className="mt-1" />

            <div>
              <p className="text-sm font-medium">
                {point.name}
              </p>

              <p className="text-xs text-gray-500">
                {point.address}
              </p>
            </div>

          </div>

        ))}

    </div>

    <div className="flex justify-center mt-4">
  <button className="bg-white py-2 px-10 rounded-full text-sm text-blue-600">
    View all {activeTab === "boarding" ? "Boarding" : "Dropping"} points
  </button>
</div>

  </div>

</div>

      {/* BOOKING SUMMARY */}
      <div className="border-t pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <p className="text-xs text-gray-400">Selected Seats</p>
          <p className="font-semibold text-sm">
            {selectedSeats.length
              ? selectedSeats.map((s) => s.id).join(", ")
              : "None"}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Total Price</p>
          <p className="text-lg sm:text-xl font-bold">
            ₹{totalPrice}
          </p>
        </div>

        <button
          onClick={handleProceed}
          disabled={!selectedSeats.length}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl disabled:bg-gray-300 hover:bg-blue-700 transition w-full sm:w-auto"
        >
          Continue
        </button>

      </div>

    </div>
  );
}

/* SMALL COMPONENT */
function Amenity({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-full text-lg">
        {icon}
      </div>
      <span className="text-xs sm:text-sm">{label}</span>
    </div>
  );
}