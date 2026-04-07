import { useState } from 'react';
import {
  FaArrowLeft,
  FaDownload,
  FaTicketAlt,
  FaRedo,
  FaTimes
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function MyBookings() {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");

  const bookings = [
    {
      id: "BUS87645",
      bus: "Orange Tours & Travels",
      from: "Hyderabad",
      to: "Bangalore",
      date: "12 Mar 2026",
      departure: "21:30",
      arrival: "06:00",
      seats: ["L5", "L6"],
      passenger: "Lokesh Naidu",
      price: 1100,
      status: "upcoming",
    },
    {
      id: "BUS99876",
      bus: "VRL Travels",
      from: "Chennai",
      to: "Hyderabad",
      date: "02 Mar 2026",
      departure: "20:00",
      arrival: "06:30",
      seats: ["U2"],
      passenger: "Lokesh Naidu",
      price: 900,
      status: "completed",
    },
    {
      id: "BUS56789",
      bus: "GreenLine Travels",
      from: "Bangalore",
      to: "Hyderabad",
      date: "15 Feb 2026",
      departure: "22:00",
      arrival: "07:00",
      seats: ["L3"],
      passenger: "Lokesh Naidu",
      price: 950,
      status: "unsuccessful",
    },
  ];

  const tabs = [
    { label: "Upcoming", key: "upcoming" },
    { label: "Completed", key: "completed" },
    { label: "Unsuccessful", key: "unsuccessful" },
  ];

  const filtered =
    activeTab === "all"
      ? bookings
      : bookings.filter((b) => b.status === activeTab);

  const statusBadge = (status) => {
    if (status === "upcoming")
      return "bg-blue-100 text-blue-600";

    if (status === "completed")
      return "bg-green-100 text-green-600";

    return "bg-red-100 text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">



      <div className="max-w-7xl mx-auto mt-16 py-6 px-4 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="flex items-center gap-3 mt-10 mb-16">

          <FaArrowLeft
            onClick={() => navigate(-1)}
            className="text-gray-600 cursor-pointer hover:text-black"
          />

          <h1 className="text-2xl font-semibold">
            My Bookings
          </h1>

        </div>


        {/* MOBILE TABS */}

        <div className="flex gap-6 border-b pb-3 mb-6 lg:hidden">

          {tabs.map((tab) => (

            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-2 text-sm font-medium
              
              ${
                activeTab === tab.key
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>

          ))}

        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-2 rounded-2xl p-6 shadow">

          {/* SIDEBAR */}

          <div className="hidden lg:block lg:col-span-3">

            <div className="space-y-12 text-lg">

              {tabs.map((tab) => (

                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`block text-left transition
                  
                  ${
                    activeTab === tab.key
                      ? "text-[#0070FF] font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {tab.label}
                </button>

              ))}

            </div>

          </div>


          {/* BOOKINGS */}

          <div className="lg:col-span-9 space-y-6">

            {filtered.length === 0 && (

              <div className="bg-white p-10 rounded-xl text-center text-gray-500 border">
                No bookings found
              </div>

            )}

            {filtered.map((booking) => (

              <div
                key={booking.id}
                className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition"
              >

                {/* TOP ROW */}

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                  <div>

                    <h2 className="text-lg font-semibold">
                      {booking.from} → {booking.to}
                    </h2>

                    <p className="text-gray-600 text-sm">
                      {booking.bus}
                    </p>

                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>

                </div>


                {/* TIMELINE */}

                <div className="flex justify-between items-center mt-6">

                  <div>
                    <p className="font-semibold">{booking.departure}</p>
                    <p className="text-gray-500 text-sm">{booking.from}</p>
                  </div>

                  <div className="text-gray-400 text-lg">→</div>

                  <div className="text-right">
                    <p className="font-semibold">{booking.arrival}</p>
                    <p className="text-gray-500 text-sm">{booking.to}</p>
                  </div>

                </div>


                {/* DETAILS */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">

                  <div>
                    <p className="text-gray-400">Date</p>
                    <p>{booking.date}</p>
                  </div>

                  <div>
                    <p className="text-gray-400">Passenger</p>
                    <p>{booking.passenger}</p>
                  </div>

                  <div>
                    <p className="text-gray-400">Seats</p>
                    <p>{booking.seats.join(", ")}</p>
                  </div>

                  <div>
                    <p className="text-gray-400">Amount</p>
                    <p>₹{booking.price}</p>
                  </div>

                </div>


                {/* ACTION BUTTONS */}

                <div className="flex flex-wrap gap-3 mt-6">

                  <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                    <FaTicketAlt />
                    View Ticket
                  </button>

                  <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                    <FaDownload />
                    Download
                  </button>

                  {booking.status === "upcoming" && (
                    <button className="flex items-center gap-2 border border-red-500 text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-50">
                      <FaTimes />
                      Cancel
                    </button>
                  )}

                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                    <FaRedo />
                    Book Again
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}