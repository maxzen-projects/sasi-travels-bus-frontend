import { useState } from "react";
import { FaArrowLeft, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ReferralHelpPage() {
  const navigate = useNavigate();

  const referralFaq = [
    {
      q: "How do I refer someone?",
      a: "You share your referral code or link from the app with your friend. They must use it when signing up or booking for the first time.",
    },
    {
      q: "How can I get discount codes for bus bookings?",
      a: "Through partner promotions (wallets, banks, or UPI apps)",
    },
    {
      q: "What rewards do I get for referring?",
      a: "Wallet cash or Discounts or coupon codes",
    },
    {
      q: "When are referral rewards credited?",
      a: `Rewards are usually credited after the referred person:
1. Signs up using your referral code
2. Makes a first bus ticket booking`,
    },
    {
      q: "Where can I find my referral code?",
      a: "Your referral code is typically in the app/website under section Refer & Earn",
    },
    {
      q: "What happens if my friend doesn’t use the referral code?",
      a: "If the referral code/link isn’t used correctly during signup or booking, neither of you may receive rewards.",
    },
    {
      q: "Can referral rewards expire?",
      a: "Yes. Referral rewards or wallet credits have expiry dates.",
    },
    {
      q: "What should I do if I didn’t receive referral rewards?",
      a: `Confirm that your friend used your referral code or link
Check if they completed the qualifying booking
Contact the app’s customer support with referral details`,
    },
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
          <h1 className="text-2xl text-[#0070FF] font-semibold">
            Referral Help
          </h1>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex gap-10">

          {/* LEFT SIDE */}
          <div className="w-1/3 bg-white rounded-xl shadow-md border">
            {referralFaq.map((item, index) => (
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
                {referralFaq[activeIndex].q}
              </h2>

              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {referralFaq[activeIndex].a}
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