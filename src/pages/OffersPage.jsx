import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// images
import axisBg from "../assets/axis.png";
import hdfcBg from "../assets/hdfc.png";
import sanjayBg from "../assets/sanjay.png";
import studentBg from "../assets/student.png";
import mythriBg from "../assets/mythri.png";
import festiveBg from "../assets/festive.png";

const offers = [
  {
    title: "Save upto Rs 500 with Axis Bank Credit Cards",
    valid: "Valid till: 31 May",
    code: "AXIS120D",
    bgImage: axisBg,
  },
  {
    title: "Save upto Rs 500 with HDFC Bank Credit Cards",
    valid: "Valid till: 31 May",
    code: "AXIS120D",
    bgImage: hdfcBg,
  },
  {
    title: "Save upto Rs 500 on Sanjay Travels",
    valid: "Valid till: 31 May",
    code: "AXIS120D",
    bgImage: sanjayBg,
  },
  {
    title: "Exclusive Offer for Students and employees",
    valid: "Valid till: 31 May",
    code: "STUEMP3",
    bgImage: studentBg,
    type: "student",
  },
  {
    title: "Save upto Rs 500 on Mythri Travels",
    valid: "Valid till: 31 May",
    code: "MYTRI20D",
    bgImage: mythriBg,
  },
  {
    title: "Exclusive Festive Offer",
    subtitle: "Save upto Rs 500 on this Festive season",
    valid: "Valid till: 31 May",
    code: "AXIS120D",
    bgImage: festiveBg,
    type: "center",
  },
];

const OffersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f4f6fb] min-h-screen">

      {/* 🔹 Top Bar */}
      <div className="flex items-center mt-16 gap-3 px-6 py-4">
        <ArrowLeft
          className="w-5 h-5 cursor-pointer hover:opacity-70"
          onClick={() => navigate(-1)}
        />
        <h2 className="text-lg font-medium">Offers</h2>
      </div>

      {/* 🔹 Main Container */}
      <div className="max-w-6xl mx-auto px-4 pb-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-blue-600">
            BusGo Ticket Offers
          </h1>
          <p className="text-gray-600 mt-2 text-sm max-w-2xl mx-auto">
            Save more on every trip with GoBus bus ticket booking offers.
            Enjoy instant discounts, cashback, and exclusive deals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative h-[220px] rounded-2xl overflow-hidden shadow-md"
            >
              {/* Background */}
              <img
                src={offer.bgImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-between">

                {/* 🔥 Layout Logic */}
                {offer.type === "center" ? (
                  <div className="h-full flex flex-col justify-center items-start max-w-[65%]">
                    <h2 className="font-semibold text-[15px] leading-snug">
                      {offer.title}
                    </h2>
                    <p className="text-sm mt-1">{offer.subtitle}</p>
                    <p className="text-xs mt-2">{offer.valid}</p>
                  </div>

                ) : offer.type === "student" ? (
                  <div className="h-full flex items-center justify-end mt-2">
                    <div className="text-right max-w-[55%] pr-2">
                <h2 className="font-semibold text-[15px] leading-snug">
                      Exclusive Offer for 
                      </h2> 

                      <h2 className="font-semibold text-[15px] leading-snug">
                      Students and  employees
                      </h2>
                      <p className="text-xs mt-2">{offer.valid}</p>
                    </div>
                  </div>

                ) : (
                  <div className="max-w-[60%] flex flex-col justify-center h-full">
                    <h2 className="font-semibold text-[15px] leading-snug">
                      {offer.title}
                    </h2>
                    <p className="text-xs mt-2">{offer.valid}</p>
                  </div>
                )}

                {/* Coupon */}
                <div className="flex justify-end">
                  <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-semibold shadow">
                    {offer.code}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OffersPage;