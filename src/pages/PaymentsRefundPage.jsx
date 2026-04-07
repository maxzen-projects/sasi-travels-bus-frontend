import { useState } from "react";
import { FaArrowLeft, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function PaymentsRefundPage() {
  const navigate = useNavigate();

  const paymentsFaq = [
    {
      q: "What payment methods can I use to book a bus ticket?",
      a: `You can usually pay using:
• Credit or debit cards
• UPI apps
• Net banking
• Mobile wallets`,
    },
    {
      q: "What if the payment fails but money is deducted?",
      a: `If the booking fails but your account was debited:
• The amount will typically be refunded automatically to your original payment method within a few days (depending on bank/UPI/wallet policies).
• You can check transaction status in the app or contact customer support.`,
    },
    {
      q: "Can I pay partially with wallet balance and the rest with another method?",
      a: `Yes, you combine wallet balance + another payment method (card/UPI) at checkout.`,
    },
    {
      q: "How do refunds work if I cancel my ticket?",
      a: `Refunds depend on the platform and cancellation policy:
• The eligible refund is usually credited back to your original payment method (card/UPI/wallet).
• Some refund amounts might go to your ticket wallet first (depending on the app).`,
    },
    {
      q: "When will I receive my refund?",
      a: `Refund processing time varies by payment method:
• Wallet: often fast (hours to 1–2 days)
• Bank card: may take 3–7 business days
• UPI: depends on bank/UPI partner`,
    },
    {
      q: "What if I don’t receive my refund?",
      a: `If the expected refund isn’t credited:
• Check your transaction history
• Check your wallet (if refund was to wallet)
• Contact the booking platform’s support with your booking and payment details`,
    },
    {
      q: "Can I request a refund if the bus is canceled by the operator?",
      a: `Yes. If the bus is cancelled by the operator, GoBus provide a full refund as per their policy. Sometimes may offer travel credits or alternate options.`,
    },
    {
      q: "Are refunds affected by offers or discounts?",
      a: `Yes. If you used discounts or promo offers, the refund amount may be calculated after applying those benefits, per the policy.`,
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
            Payments & Refund
          </h1>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex gap-10">

          {/* LEFT SIDE */}
          <div className="w-1/3 bg-white rounded-xl shadow-md border">
            {paymentsFaq.map((item, index) => (
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
                {paymentsFaq[activeIndex].q}
              </h2>

              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {paymentsFaq[activeIndex].a}
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