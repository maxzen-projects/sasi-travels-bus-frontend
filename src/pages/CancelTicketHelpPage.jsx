import { useState } from "react";
import { FaArrowLeft, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CancelTicketHelpPage() {
  const navigate = useNavigate();

  const cancelFaq = [
    {
      q: "Can I cancel my bus ticket?",
      a: "Yes, bus tickets can be canceled before the scheduled departure, depending on the operator’s cancellation policy."
    },
    {
      q: "How do I cancel a bus ticket?",
      a: `You can cancel:
• Online through the website or app
• By contacting customer support (if supported)`
    },
    {
      q: "Is there a cancellation fee?",
      a: "Yes. Most cancellations include a cancellation fee."
    },
    {
      q: "How early should I cancel to get the best refund?",
      a: `To get the maximum refund:
• Cancel as early as possible
• Many operators offer higher refunds if you cancel well before departure
Cancellation policies vary, so check the specific terms for your booking.`
    },
    {
      q: "Will I get a refund for the canceled ticket?",
      a: "Yes — if cancellation is allowed and done within the permitted time, you'll receive a refund, minus cancellation fees."
    },
    {
      q: "When will the refund be processed?",
      a: `Refund timing depends on your payment method:
• Wallet or app credit: usually faster (hours to 1–2 days)
• Bank/UPI/card: may take 3–7 business days`
    },
    {
      q: "Can I cancel after the bus has already departed?",
      a: "Once the bus has departed, most platforms do not allow cancellation and usually do not provide a refund. But you can resell your ticket and get back your money."
    },
    {
      q: "What happens if the operator cancels the bus?",
      a: `If the bus is cancelled by the operator:
• You're generally entitled to a full refund
• Sometimes may offer travel credits or alternate options`
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
          <h1 className="text-2xl text-[#0070FF] font-semibold">
            Cancel Ticket
          </h1>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex gap-10">

          {/* LEFT SIDE */}
          <div className="w-1/3 bg-white rounded-xl shadow-md border">
            {cancelFaq.map((item, index) => (
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
                {cancelFaq[activeIndex].q}
              </h2>

              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {cancelFaq[activeIndex].a}
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