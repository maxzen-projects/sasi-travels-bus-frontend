import { FaArrowLeft } from "react-icons/fa";

import offerBg1 from "../assets/offersBg2.png";
import offerBg2 from "../assets/offersBg3.jpg";
import offerBg3 from "../assets/offersBg4.png";
import offerBg4 from "../assets/Rectangle.png";
import offerBg5 from "../assets/Rectangle 512.png";
import offerBg6 from "../assets/Rectangle 536.png";

export default function OffersPage() {

    const offers = [
        {
            title: "Save upto Rs 500 with Axis Bank Credit Cards",
            valid: "Valid till 31 May",
            code: "AXIS1200",
            image: offerBg1
        },
        {
            title: "Save upto Rs 500 with HDFC Bank Credit Cards",
            valid: "Valid till 31 May",
            code: "AXIS1200",
            image: offerBg2
        },
        {
            title: "Save upto Rs 500 on Sanjay Travels",
            valid: "Valid till 31 May",
            code: "AXIS1200",
            image: offerBg3
        },
        {
            title: "Exclusive Offer for Students and employees",
            valid: "Valid till 31 May",
            code: "STEMP3",
            image: offerBg4,
            align: "right"
        },
        {
            title: "Save upto Rs 500 on Mythri Travels",
            valid: "Valid till 31 May",
            code: "MYTRI20",
            image: offerBg5
        },
        {
            title: "Exclusive Festive Offer",
            valid: "Valid till 31 May",
            code: "AXIS1200",
            image: offerBg6
        }
    ];

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            {/* HEADER */}

            <div className="flex items-center gap-3 mb-6">
                <FaArrowLeft className="text-lg cursor-pointer" />
                <h1 className="text-lg font-semibold">Offers</h1>
            </div>

            {/* TITLE */}

            <div className="text-center mb-10">

                <h2 className="text-blue-600 text-xl font-semibold">
                    SasiBus Ticket offers
                </h2>

                <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-2">
                    Save more on every trip with SasiBus bus ticket booking offers.
                    Enjoy instant discounts, cashback, and exclusive deals on popular routes.
                    Book easily, travel comfortably, and pay less with SasiBus.
                </p>

            </div>

            {/* OFFERS GRID */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {offers.map((offer, index) => (

                    <div
                        key={index}
                        className="relative rounded-2xl overflow-hidden h-[180px] flex items-center p-6 text-black"
                    >

                        {/* Background Image */}

                        <img
                            src={offer.image}
                            alt="offer"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        {/* 
<div
  className={`absolute inset-0 ${
    offer.align === "right"
      ? "bg-gradient-to-l from-white/80 to-transparent"
      : "bg-gradient-to-r from-white/80 to-transparent"
  }`}
></div> */}
                        {/* Content */}

                        <div
                            className={`relative flex flex-col justify-between h-full w-[70%] ${offer.align === "right" ? "ml-auto text-right items-end" : ""
                                }`}
                        >

                            <div>
                                <h3 className="font-semibold text-sm leading-snug">
                                    {offer.title}
                                </h3>

                                <p className="text-xs text-gray-700 mt-2">  
                                    {offer.valid}
                                </p>
                            </div>

                            <div className="mt-3">
                                <span className="bg-white px-3 py-1 rounded-full text-align:right text-xs font-semibold shadow">
                                    {offer.code}
                                </span>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}