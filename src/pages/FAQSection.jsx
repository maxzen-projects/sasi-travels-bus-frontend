import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I track the location of my booked bus Online?",
      answer:
        "Yes, you can track your bus in real-time using our live GPS tracking feature available in your booking details section."
    },
    {
      question: "How can I book a bus ticket Online?",
      answer:
        "You can book a ticket by selecting your route, choosing seats, entering passenger details, and completing the secure payment process."
    },
    {
      question: "Can I book tickets for someone else?",
      answer:
        "Yes, you can enter passenger details for anyone while booking the ticket."
    },
    {
      question: "What payment options are available?",
      answer:
        "We support UPI, Credit/Debit Cards, Net Banking, and popular Wallets."
    },
    {
      question: "How much refund will I get after cancellation?",
      answer:
        "Refund depends on cancellation time and bus operator policy. Check cancellation policy before confirming booking."
    },
    {
      question: "What happens if the bus is delayed or canceled?",
      answer:
        "You will receive updates via SMS/email. In case of cancellation, a full refund will be processed."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#0070FF] mb-10">
          FAQs related to Bus Ticket Booking
        </h2>

        {/* FAQ List */}
        <div className="space-y-1">
          {faqs.map((item, index) => (
            <div key={index} className="border-b pb-4">

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-gray-800 font-medium py-4"
              >
                {item.question}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-gray-600 text-sm pb-4 pr-6">
                  {item.answer}
                </p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}