import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaWallet, FaUniversity, FaCreditCard } from "react-icons/fa";
import BookingHeader from "../pages/BookingHeader";
import { SiPhonepe, SiGooglepay, SiPaytm } from "react-icons/si";

export default function PaymentPage() {

  const navigate = useNavigate();
  const { state } = useLocation();

  const [upi, setUpi] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [selectedBank, setSelectedBank] = useState("");
  const [searchBank, setSearchBank] = useState("");

  if (!state) return <div className="p-6 text-center">Invalid session</div>;

  const { totalPrice, from, to, date } = state;

  const banks = [
    { name: "State Bank of India", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg" },
    { name: "Canara Bank", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Canara_Bank_logo.svg" },
    { name: "ICICI Bank", icon: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
    { name: "HDFC Bank", icon: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
    { name: "Axis Bank", icon: "https://upload.wikimedia.org/wikipedia/commons/1/15/Axis_Bank_logo.svg" },
    { name: "Union Bank", icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/Union_Bank_of_India_Logo.svg" },
    { name: "Kotak Bank", icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kotak_Mahindra_Bank_logo.svg" },
    { name: "Bank of Baroda", icon: "https://upload.wikimedia.org/wikipedia/commons/5/55/Bank_of_Baroda_logo.svg" }
  ];

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(searchBank.toLowerCase())
  );

  const handlePayment = () => {
    alert("Payment Successful! Your ticket has been booked.");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <BookingHeader
        from={from}
        to={to}
        date={date}
        activeStep="Payment"
      />

      {/* AMOUNT BAR */}

      <div className="bg-white border-b px-10 py-4 flex justify-between">

        <div>
          <p className="text-gray-500 text-sm">Amount</p>
          <p className="font-semibold">₹{totalPrice}</p>
        </div>

        <div className="bg-blue-600 text-white px-4 py-3 mt-2 rounded-full text-sm">
          07:00
        </div>

      </div>


      {/* PAYMENT CONTAINER */}

      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-sm grid grid-cols-3">


        {/* LEFT PAYMENT OPTIONS */}

        <div className="p-8 border-r space-y-6">

          <button
            onClick={() => setPaymentMethod("upi")}
            className={`flex items-center gap-4 font-semibold ${
              paymentMethod === "upi" ? "text-blue-600" : "text-gray-700"
            }`}
          >
            <SiPhonepe size={24} />
            Pay via any UPI app
          </button>

          <button
            onClick={() => setPaymentMethod("card")}
            className={`flex items-center gap-4 ${
              paymentMethod === "card"
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            <FaCreditCard />
            Credit/Debit cards
          </button>

          <button
            onClick={() => setPaymentMethod("netbanking")}
            className={`flex items-center gap-4 ${
              paymentMethod === "netbanking"
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            <FaUniversity />
            Net Banking
          </button>

          <button
            onClick={() => setPaymentMethod("wallet")}
            className={`flex items-center gap-4 ${
              paymentMethod === "wallet"
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            <FaWallet />
            Wallets
          </button>

        </div>


        {/* RIGHT PAYMENT SECTION */}

        <div className="col-span-2 p-10">

          {/* UPI PAYMENT */}

          {paymentMethod === "upi" && (

            <div className="flex justify-between">

              <div className="max-w-md">

                <h2 className="text-xl font-semibold mb-2">
                  Scan and Pay
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                  Scan the QR with your preferred UPI app
                </p>

                <div className="flex gap-4 mb-6 text-2xl">
                  <SiPhonepe />
                  <SiGooglepay />
                  <SiPaytm />
                </div>

                <button className="bg-gray-200 text-gray-500 px-8 py-3 rounded-lg mb-6">
                  Generate QR code
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <hr className="flex-1" />
                  <span className="text-gray-400">or</span>
                  <hr className="flex-1" />
                </div>

                <p className="text-blue-600 text-sm mb-2">UPI ID</p>

                <input
                  placeholder="Enter UPI ID"
                  value={upi}
                  onChange={(e) => setUpi(e.target.value)}
                  className="border rounded-lg p-3 w-full mb-4"
                />

                <button 
                  onClick={handlePayment}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Verify and pay
                </button>

              </div>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay"
                className="w-44 h-44"
                alt="UPI QR Code"
              />

            </div>

          )}


          {/* CARD PAYMENT */}

          {paymentMethod === "card" && (

            <div className="max-w-md space-y-4">

              <h2 className="text-xl font-semibold">
                Card Payment
              </h2>
              <p className="text-[#0070FF] text-sm">
                Card Number
              
              <input
                placeholder="Card Number"
                className="border rounded-lg p-3 mt-1 w-full"
              />
              </p>  
              <div className="flex gap-4">
                <p className="text-[#0070FF] text-sm">
                  Expiry Date
                
                <input
                  placeholder="MM/YY"
                  className="border rounded-lg p-3 mt-1 w-full"
                />
                </p>

                <p className="text-[#0070FF] text-sm">
                  CVV     
                <input
                  placeholder="CVV"
                  className="border rounded-lg p-3 mt-1 w-full"
                />
                </p>
              </div>
              <p className="text-[#0070FF] text-sm">
                Card Holder Name
              <input
                placeholder="Card Holder Name"
                className="border rounded-lg p-3 mt-1 w-full"
              />
              </p>

              <button 
                onClick={handlePayment}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full"
              >
                Pay ₹{totalPrice}
              </button>

            </div>

          )}


          {/* NET BANKING */}

          {paymentMethod === "netbanking" && (

            <div className="max-w-lg">

              <h2 className="text-xl font-semibold mb-4">
                Net Banking
              </h2>

              {/* SEARCH */}

              <input
                placeholder="Search"
                value={searchBank}
                onChange={(e) => setSearchBank(e.target.value)}
                className="w-full bg-gray-100 rounded-full px-4 py-3 mb-6 outline-none"
              />

              <div className="space-y-4">

                {filteredBanks.map((bank) => (

                  <div
                    key={bank.name}
                    className="flex items-center justify-between border-b pb-4"
                  >

                    <div className="flex items-center gap-4">

                      <img
                        src={bank.icon}
                        alt={bank.name}
                        className="w-6 h-6 object-contain"
                      />

                      <span>{bank.name}</span>

                    </div>

                    <div className="flex items-center gap-4">

                      {selectedBank === bank.name && (
                        <button 
                          onClick={handlePayment}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                        >
                          Proceed to pay
                        </button>
                      )}

                      <input
                        type="radio"
                        checked={selectedBank === bank.name}
                        onChange={() => setSelectedBank(bank.name)}
                        className="w-5 h-5 accent-blue-600"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}


          {/* WALLET */}

          {paymentMethod === "wallet" && (

            <div className="max-w-md space-y-4">

              <h2 className="text-xl font-semibold">
                Wallet Payment
              </h2>

              <button className="border rounded-lg p-3 w-full text-left">
                Paytm Wallet
              </button>

              <button className="border rounded-lg p-3 w-full text-left">
                Amazon Pay
              </button>

              <button className="border rounded-lg p-3 w-full text-left">
                Mobikwik
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}