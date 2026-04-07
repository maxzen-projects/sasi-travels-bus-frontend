import { useState } from 'react';
import {
  FaArrowLeft,
  FaRegFileAlt,
  FaThumbsUp,
  FaThumbsDown,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const faqs = [
  {
    question: "How do I add money to my ticket wallet?",
    answer: `You can add money using:
• Debit/Credit cards
• UPI
• Net banking
• Mobile wallets`
  },
  {
    question: "Can I use wallet balance to pay for a bus ticket?",
    answer: "Yes, wallet balance can be used while booking a ticket."
  },
  {
    question: "Do ticket wallets expire?",
    answer: "Wallet balance usually expires after 1 year if unused."
  },
  {
    question: "Can I withdraw money from the ticket wallet?",
    answer: "No, wallet balance cannot be withdrawn."
  },
  {
    question: "How do I earn wallet money?",
    answer: "Wallet money can be earned through offers, refunds and promotions."
  },
  {
    question: "What happens to wallet balance if I cancel a ticket?",
    answer: "Refund amount will be credited back to the wallet."
  },
  {
    question: "What should I do if wallet balance isn’t applied at checkout?",
    answer: "Please contact support or try refreshing the page."
  }
];

export default function FAQPage() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">

     

      <div className="max-w-7xl mx-auto mt-16 px-4">

        <div className="grid grid-cols-1 lg:grid-cols-12 py-14 gap-8">

          {/* LEFT SIDEBAR */}

          <div className="lg:col-span-4 bg-white rounded-xl shadow-sm border">

            <div className="flex items-center text-[#0070FF] gap-2 p-4 border-b font-semibold">
              <FaArrowLeft
                onClick={() => navigate(-1)}
                className="text-gray-500 cursor-pointer hover:text-gray-700"
              />
              FAQ’s
            </div>

            <div>

              {faqs.map((faq, index) => (

                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-selected={activeIndex === index}
                  className={`w-full flex items-start gap-3 text-left p-4 border-b hover:bg-gray-50 transition
                  
                  ${
                    activeIndex === index
                      ? "text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                >

                  <FaRegFileAlt className="mt-1 text-sm" aria-hidden="true" />

                  <span className="text-md">
                    {faq.question}
                  </span>

                </button>

              ))}

            </div>

          </div>


          {/* RIGHT ANSWER PANEL */}

          <div className="lg:col-span-8">

            <div className="bg-white rounded-xl shadow-sm border p-8">

              <h2 className="text-xl font-semibold mb-6">
                {faqs[activeIndex].question}
              </h2>

              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {faqs[activeIndex].answer}
              </p>


              {/* FEEDBACK */}

              <div className="mt-10 text-center">

                <p className="text-sm text-gray-500 mb-4">
                  Was this information helpful to you?
                </p>

                <div className="flex justify-center gap-6">

                  <button 
                    aria-label="This information was helpful"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                  >
                    <FaThumbsUp />
                  </button>

                  <button 
                    aria-label="This information was not helpful"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                  >
                    <FaThumbsDown />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}