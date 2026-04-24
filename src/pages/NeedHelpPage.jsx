import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NeedHelpPage() {

  const navigate = useNavigate();

  const helpCategories = [
    { name: "Ticket Booking", path: "/faqspage" },
    { name: "Wallet", path: "/wallet" },
    { name: "Offers & Discount", path: "/offers-discounts" },
    { name: "Refferal Help", path: "/referral-help" },
    { name: "Payments & Refund", path: "/payments-refund" },
    { name: "Ticket Cancellation", path: "/cancel-ticket-help" },
    { name: "Other FAQ’s", path: "/faqs" },
    { name: "Ticket Resell", path: "/resell-help" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-6xl mx-auto pt-20 px-4">

        {/* HEADER */}

        <div className="flex items-center gap-3 mb-8">

          <FaArrowLeft
            className="cursor-pointer text-gray-600"
            onClick={() => navigate(-1)}
          />

          <h1 className="text-lg text-[#0070FF] font-semibold">
            Need any help
          </h1>

        </div>


        {/* MAIN CARD */}

        <div className="bg-white rounded-3xl shadow-md border-2 p-10">

          {/* CHAT TITLE */}

          <div className="flex justify-center items-center gap-2 mb-6">

            <span className="text-blue-600 font-semibold text-lg">
              Chat with GoBus
            </span>

          </div>

          <p className="text-center text-gray-600 mb-10">
            Hi, Please choose from the categories below.
          </p>


          {/* CATEGORY BUTTONS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

            {helpCategories.map((item, index) => (

              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="border-2 border-[#0070FF] text-gray-700 py-2 rounded-lg hover:bg-blue-50 transition"
              >
                {item.name}
              </button>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}