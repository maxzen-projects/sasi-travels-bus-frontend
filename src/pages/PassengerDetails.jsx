import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import BookingHeader from "../pages/BookingHeader";


export default function PassengerDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
const [errors, setErrors] = useState({});
  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    gender: "Male",
  });

  const [contact, setContact] = useState({
    phone: "",
    email: "",
    location: "",
  });

  if (!state) {
    return <div className="p-6 text-center">Invalid session</div>;
  }

  const {
    selectedSeats,
    totalPrice,
    boarding,
    dropping,
    bus,
    from,
    to,
    date,
  } = state;

  const validateForm = () => {
    let newErrors = {};

    if (!passenger.name.trim()) {
      newErrors.name = "Passenger name is required";
    }

    if (!passenger.age || passenger.age < 1 || passenger.age > 100) {
      newErrors.age = "Enter valid age";
    }

    if (!contact.phone.match(/^[0-9]{10}$/)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    if (!contact.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Enter valid email address";
    }

    if (!contact.location.trim()) {
      newErrors.location = "Location required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {

    if (!validateForm()) return;

    navigate("/payment", {
      state: {
        passenger,
        contact,
        selectedSeats,
        totalPrice,
        boarding,
        dropping,
        bus,
        from,
        to,
        date,
      },
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 pb-32 mt-16">

      <BookingHeader
        from={from}
        to={to}
        date={date}
        activeStep="Passenger Info"
      />

      {/* PAGE CONTAINER */}
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">

        {/* LEFT SIDE - BUS SUMMARY */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border w-[340px]">

          {/* BUS NAME */}

          <h2 className="text-blue-600 font-bold text-xl">
            GRT Travels
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Bharat Benz Ac Seater/Sleeper(2+1)
          </p>

          <p className="text-gray-600 text-sm mt-2">
            1 Seat
          </p>


          {/* TIME LINE */}

          <div className="flex gap-4 mt-6">

            {/* LEFT TIME COLUMN */}
            <div className="flex flex-col justify-between text-right text-sm">

              <div>
                <p className="font-semibold text-gray-800">21:00</p>
                <p className="text-gray-400 text-xs">13 Mar</p>
              </div>

              <p className="text-gray-400 text-xs">09hrs 15mins</p>

              <div>
                <p className="font-semibold text-gray-800">06:00</p>
                <p className="text-gray-400 text-xs">14 Mar</p>
              </div>

            </div>


            {/* CENTER LINE */}
            <div className="flex flex-col items-center">

              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>

              <div className="w-[4px] h-16 bg-gray-400"></div>

              <div className="w-[4px] h-16 bg-gray-400"></div>

              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>

            </div>


            {/* RIGHT LOCATION */}
            <div className="flex flex-col justify-between">

              <div>
                <p className="font-semibold text-gray-800">
                  {boarding?.name}
                </p>
                <p className="text-gray-500 text-sm">
                  Avail free metro pickup drop at Miyapur metro
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  {dropping?.name}
                </p>
                <p className="text-gray-500 text-sm">
                  Near Bustop
                </p>
              </div>

            </div>

          </div>


          {/* FARE BREAKUP */}

          <div className="border rounded-xl mt-8">

            <div className="p-4 border-b">
              <h3 className="font-semibold">
                Fare Breakup
              </h3>
            </div>


            <div className="p-4 space-y-3 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">Base Fare</span>
                <span>₹1160</span>
              </div>

              <div className="flex justify-between text-blue-600">
                <span>Discount</span>
                <span>-₹100</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Grand Total</span>
                <span>₹1060</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Platform fee</span>
                <span>₹20</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Travel Protection</span>
                <span>₹20</span>
              </div>

            </div>


            <div className="border-t p-4 flex justify-between font-semibold">

              <span>Total Paid</span>
              <span>₹1100</span>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="md:col-span-2 space-y-6">

          {/* PASSENGER DETAILS */}

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">
              Passenger Details
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <input
                placeholder="Full Name"
                value={passenger.name}
                onChange={(e) =>
                  setPassenger({ ...passenger, name: e.target.value })
                }
                className="border rounded-lg p-3"
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <input
                type="number"
                placeholder="Age"
                value={passenger.age}
                onChange={(e) =>
                  setPassenger({ ...passenger, age: e.target.value })
                }
                className="border rounded-lg p-3"
              />

              {errors.age && (
                <p className="text-red-500 text-sm">{errors.age}</p>
              )}

              {/* Gender */}

              <div className="flex gap-4 items-center">

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={passenger.gender === "Male"}
                    onChange={() =>
                      setPassenger({ ...passenger, gender: "Male" })
                    }
                  />
                  Male
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={passenger.gender === "Female"}
                    onChange={() =>
                      setPassenger({ ...passenger, gender: "Female" })
                    }
                  />
                  Female
                </label>

              </div>
            </div>
          </div>

          {/* CONTACT DETAILS */}

          <div className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-semibold mb-4">
              Contact Details
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <input
                placeholder="Mobile Number"
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
                className="border rounded-lg p-3"
              />

              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
              <input
                placeholder="Email Address"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                className="border rounded-lg p-3"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                placeholder="Location"
                value={contact.location}
                onChange={(e) =>
                  setContact({ ...contact, location: e.target.value })
                }
                className="border rounded-lg p-3"
              />

              {errors.location && (
                <p className="text-red-500 text-sm">{errors.location}</p>
              )}
            </div>
          </div>

          {/* OFFERS */}

          <div className="bg-white rounded-xl shadow-sm p-6">

  <h2 className="font-semibold mb-4">
    Offers for You
  </h2>

  {/* OFFER CARD */}

  <div className="flex items-center justify-between border rounded-xl p-3 mb-4 bg-gray-50 hover:bg-gray-100 cursor-pointer">

    <div className="flex items-center gap-3">

      <span className="text-lg">🎉</span>

      <div className="flex items-center gap-2">

        <span className="text-sm font-medium text-gray-800">
          Student/corp.reward
        </span>

        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded">
          Exclusive Offer
        </span>

      </div>

    </div>

    <span className="text-gray-400 text-lg">›</span>

  </div>

  {/* COUPON INPUT */}

  <div className="flex gap-3">

    <input
      placeholder="Enter Coupon Code"
      className="border rounded-lg p-3 flex-1 outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700 transition">
      Apply
    </button>

  </div>

</div>

          {/* TRAVEL PROTECTION */}

          <div className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center">

            <div>
              <p className="font-semibold">Travel Protection</p>
              <p className="text-sm text-gray-500">
                Insure your ride with just ₹20
              </p>
            </div>

            <input type="checkbox" className="w-5 h-5" />

          </div>

        </div>

      </div>

      {/* BOTTOM PAYMENT BAR */}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">

        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <div>
            <p className="text-gray-500 text-sm">Total Amount</p>
            <p className="text-xl font-bold text-blue-600">
              ₹ {totalPrice}
            </p>
          </div>

          <button
            disabled={!passenger.name || !passenger.age || !contact.phone}
            onClick={handleProceed}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold disabled:bg-gray-300"
          >
            Proceed to pay
          </button>

        </div>

      </div>
    </div>
  );
}