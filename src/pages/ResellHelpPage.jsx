import { useState } from "react";
import { FaArrowLeft, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ResellHelpPage() {
  const navigate = useNavigate();

  const resellFaq = [
    {
      q: "What does it mean to resell a bus ticket?",
      a: "Reselling a bus ticket means selling your booked ticket to another person if you can't travel and the platform or operator allows it."
    },
    {
      q: "How do I resell my bus ticket?",
      a: `1. Go to My Bookings or Your Tickets section
2. Select the ticket you want to resell
3. Choose Resell / Transfer / Sell Ticket`
    },
    {
      q: "Who buys a resold ticket?",
      a: "Other travelers searching for tickets may buy your resold ticket if it matches their route and date requirements."
    },
    {
      q: "Do I get full payment for a resold ticket?",
      a: `Not usually. You may get:
A portion of the ticket price (after platform or operator fees)`
    },
    {
      q: "Can the new buyer travel without issues?",
      a: "Yes — if the resale is done officially through the platform and the ticket is transferred properly. The new traveler should have valid ID as required by the operator."
    },
    {
      q: "What if someone buys my resold ticket?",
      a: "You'll be notified, and the resale amount (minus fees) will be credited to your wallet or bank."
    },
    {
      q: "Is reselling safe?",
      a: "Yes, as long as you do it through the official platform feature. Avoid informal resale outside the platform — the operator may not honor such tickets."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-10">
          <FaArrowLeft
            onClick={() => navigate(-1)}
            className="text-gray-600 cursor-pointer hover:text-black"
          />

          <h1 className="text-xl text-[#0070FF] font-semibold">
            Resell Ticket
          </h1>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex gap-10">

          {/* LEFT SIDE */}
          <div className="w-1/3 bg-white rounded-xl shadow-md border">
            {resellFaq.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-4 border-b cursor-pointer flex items-start gap-3 
                ${
                  activeIndex === index
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <FiFileText
                  className={`mt-1 text-lg ${
                    activeIndex === index
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                />

                <p className="text-sm">{item.q}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-2/3 bg-white rounded-xl shadow-md border p-10 flex flex-col justify-between">
            
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {resellFaq[activeIndex].q}
              </h2>

              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {resellFaq[activeIndex].a}
              </p>
            </div>

            {/* FEEDBACK */}
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Was this information helpful to you?
              </p>

              <div className="flex justify-center gap-6">
                <button className="bg-blue-100 p-3 rounded-full hover:bg-blue-200">
                  <FaRegThumbsUp className="text-blue-600" />
                </button>

                <button className="bg-blue-100 p-3 rounded-full hover:bg-blue-200">
                  <FaRegThumbsDown className="text-blue-600" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}