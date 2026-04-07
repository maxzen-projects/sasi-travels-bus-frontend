import { useState } from "react";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

import step1 from "../assets/step1.jpeg";
import step2 from "../assets/step2.jpeg";
import step3 from "../assets/step3.jpeg";
import step4 from "../assets/step4.jpeg";
import step5 from "../assets/step4.jpeg";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const faqs = [
    {
      question: "How to book a bus ticket?",
      type: "slider",
      slides: [
        {
          img: step1, text: "1. On the GoBus app home page, enter origin, destination, and date of journey and click on search" },
        { img: step2, text: "2.Choose your bus from available options" },
        { img: step3, text: "3. Select your preferred seat" },
        { img: step4, text: "4. Choose boarding & dropping points" },
        { img: step5, text: "5. Enter details and confirm booking" },
      ],
    },
    {
  question: "Can I use wallet balance to pay for a bus ticket?",
  type: "text",
  answer: {
    intro:
      "Yes. When booking, you can choose the wallet as a payment option and pay partially or fully using the wallet balance.",
  },
},
{
  question: "Do ticket wallets expire?",
  type: "text",
  answer: {
    intro:
      "Some ticket wallets or credits may have expiry dates or terms, so check the wallet section for validity details.",
  },
},
{
  question: "Can I withdraw money from the ticket wallet?",
  type: "text",
  answer: {
    intro:
      "No — most ticket wallets are non-withdrawable. Wallet balance is used only for purchases within the platform unless refunds are allowed to your bank or payment method.",
  },
},
{
  question: "How do I earn wallet money?",
  type: "text",
  answer: {
    intro: "You can earn wallet balance through:",
    points: [
      "Cashback offers",
      "Promo codes",
      "Referral bonuses",
      "Promotional events",
    ],
  },
},
{
  question: "What happens to wallet balance if I cancel a ticket?",
  type: "text",
  answer: {
    intro: "Refund of wallet balance depends on the platform’s policy:",
    points: [
      "Some refund wallet balance directly back to your ticket wallet",
      "Others may refund to your original payment method",
      "Check the cancellation/refund policy before canceling",
    ],
  },
},
{
  question: "What should I do if wallet balance isn’t applied at checkout?",
  type: "text",
  answer: {
    intro: "",
    points: [
      "Make sure the wallet balance is sufficient",
      "Check if the wallet option is enabled for that route or operator",
      "Refresh the app or re-login",
      "If the issue persists, contact customer support",
    ],
  },
}
  ];

  const activeFAQ = faqs[activeIndex];

  const nextSlide = () => {
    if (currentSlide < activeFAQ.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-10">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

        {/* LEFT PANEL */}
        <div className="w-full md:w-1/3 bg-white rounded-xl shadow">

          <div className="p-4 font-semibold border-b flex items-center gap-2">
            ← FAQ’s
          </div>

          {faqs.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setCurrentSlide(0);
              }}
              className={`p-4 flex items-center gap-3 cursor-pointer border-b text-sm
                ${
                  activeIndex === index
                    ? "bg-blue-50 text-[#0070FF] font-medium"
                    : "hover:bg-gray-50"
                }`}
            >
              <FileText size={16} />
              {item.question}
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-2/3 bg-white rounded-xl shadow p-8 flex flex-col min-h-[500px]">

          <h2 className="text-xl font-semibold mb-3">
            {activeFAQ.question}
          </h2>

          {activeFAQ.type === "slider" ? (
            <>
              <p className="text-gray-600 mb-4">
                Booking bus tickets on GoBus App is a very simple 6 step process:
              </p>

              <p className="text-gray-700 text-sm mb-6">
                {activeFAQ.slides[currentSlide].text}
              </p>

              {/* SLIDER */}
              <div className="relative flex items-center justify-center">

                {/* LEFT ARROW */}
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="absolute left-0 bg-white shadow p-2 rounded-full disabled:opacity-30"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* IMAGE */}
                <img
                  src={activeFAQ.slides[currentSlide].img}
                  alt="step"
                  className="h-[300px] md:h-[400px] object-contain"
                />

                {/* RIGHT ARROW */}
                <button
                  onClick={nextSlide}
                  disabled={
                    currentSlide === activeFAQ.slides.length - 1
                  }
                  className="absolute right-0 bg-white shadow p-2 rounded-full disabled:opacity-30"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* DOTS */}
              <div className="flex justify-center mt-5 gap-2">
                {activeFAQ.slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === currentSlide
                        ? "bg-[#0070FF]"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="mt-4 flex flex-col h-full">

    {/* INTRO TEXT */}
    <p className="text-gray-700 text-sm mb-3">
      {activeFAQ.answer.intro}
    </p>

    {/* BULLET POINTS */}
    {activeFAQ.answer.points && (
      <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
        {activeFAQ.answer.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    )}

    {/* FEEDBACK SECTION */}
    <div className="mt-auto pt-8 text-center">  
      <p className="text-xs text-gray-500 mb-3">
        Was this information helpful to you?
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200">
          👍
        </button>
        <button className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200">
          👎
        </button>
      </div>
    </div>

  </div>
          )}
        </div>
      </div>
    </div>
  );
}