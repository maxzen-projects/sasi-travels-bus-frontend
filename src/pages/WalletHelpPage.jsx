import { useState } from "react";
import { FaArrowLeft, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function WalletHelpPage() {
  const navigate = useNavigate();

  const walletFaqs = [
    {
      question: "Can I use wallet balance to pay for a bus ticket?",
      answer:
        "Yes. When booking, you can choose the wallet as a payment option and pay partially or fully using the wallet balance.",
    },
    {
      question: "Do ticket wallets expire?",
      answer:
        "Some ticket wallets or credits may have expiry dates or terms, so check the wallet section for validity details.",
    },
    {
      question: "Can I withdraw money from the ticket wallet?",
      answer:
        "No – most ticket wallets are non-withdrawable. Wallet balance is used only for purchases within the platform unless the platform explicitly allows refunds back to your bank or payment method.",
    },
    {
      question: "How do I earn wallet money?",
      answer:
        "You can earn wallet balance through:\n• Cashback offers\n• Promo codes\n• Referral bonuses\n• Promotional events",
    },
    {
      question: "What happens to wallet balance if I cancel a ticket?",
      answer:
        "Refund of wallet balance depends on the platform’s policy.\n• Some refund wallet balance directly back to your ticket wallet\n• Others may refund to your original payment method\nCheck the cancellation/refund policy before cancelling.",
    },
    {
      question: "What should I do if wallet balance isn’t applied at checkout?",
      answer:
        "• Make sure the wallet balance is sufficient\n• Check if the wallet option is enabled for that route or operator\n• Refresh the app or re-login\n• If the issue persists, contact customer support.",
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
            Wallet Help
          </h1>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex gap-10">

          {/* LEFT SIDE - QUESTIONS */}
          <div className="w-1/3 bg-white rounded-xl shadow-md border">
            {walletFaqs.map((faq, index) => (
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

                <p className="text-sm">{faq.question}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - ANSWER */}
          <div className="w-2/3 bg-white rounded-xl shadow-md border p-10 flex flex-col justify-between">
            
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {walletFaqs[activeIndex].question}
              </h2>

              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {walletFaqs[activeIndex].answer}
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