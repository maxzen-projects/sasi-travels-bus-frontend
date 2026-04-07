import { useState } from "react";
import {
  FaArrowLeft,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaRegFileAlt, // 👈 added icon
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FAQPage() {
  const navigate = useNavigate();

  const faqs = [
    {
      q: "How do I add money to my ticket wallet?",
      a: `You can add money using:
• Debit/Credit cards
• UPI
• Net banking
• Mobile wallets`,
    },
    {
      q: "Can I use wallet balance to pay for a bus ticket?",
      a: "Yes, you can use your wallet balance during checkout.",
    },
    {
      q: "Do ticket wallets expire?",
      a: "Wallet balance may expire depending on platform policy.",
    },
    {
      q: "Can I withdraw money from the ticket wallet?",
      a: "No, wallet balance is usually non-withdrawable.",
    },
    {
      q: "How do I earn wallet money?",
      a: "You can earn via cashback offers and promotions.",
    },
    {
      q: "What happens to wallet balance if I cancel a ticket?",
      a: "Refund will be credited back to wallet or original payment method.",
    },
    {
      q: "What should I do if wallet balance isn’t applied at checkout?",
      a: "Check eligibility or contact support.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto flex gap-16">

        {/* LEFT SIDE */}
        <div className="w-1/3 bg-white rounded-xl shadow-md border">
          <div className="flex items-center gap-3 p-4 border-b">
            <FaArrowLeft
              onClick={() => navigate(-1)}
              className="cursor-pointer"
            />
            <h2 className="font-semibold">FAQ’s</h2>
          </div>

          {faqs.map((item, index) => (
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
              {/* ✅ React Icon instead of emoji */}
              <FaRegFileAlt className="mt-1 text-gray-500" />

              <p className="text-sm">{item.q}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[50%] h-[90%] bg-white rounded-xl mt-16 shadow-md border py-12 px-10 flex flex-col justify-between">
          
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {faqs[activeIndex].q}
            </h2>

            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {faqs[activeIndex].a}
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
  );
}