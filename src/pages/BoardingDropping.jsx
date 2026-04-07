import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import BookingHeader from "../pages/BookingHeader";

export default function BoardingDropping() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [boarding, setBoarding] = useState(null);
  const [dropping, setDropping] = useState(null);

  if (!state) {
    return <div className="p-6 text-center">Session expired</div>;
  }

  const { selectedSeats, totalPrice, bus, from, to, date } = state;

  const boardingPoints = [
    { id: 1, name: "Lingampalli", sub: "Jyothi theatre towards lingampalli", time: "19:30" },
    { id: 2, name: "Chanda nagar", sub: "Near kinara grand hotel", time: "19:30" },
    { id: 3, name: "Gangaram", sub: "Malgya shopping mall", time: "19:30" },
    { id: 4, name: "Deepthi sri nagar", sub: "RS Brother shopping mall", time: "19:30" },
    { id: 5, name: "Madinaguda", sub: "Bajaj electronics showroom", time: "19:30" },
    { id: 6, name: "Miyapur Allwin X roads", sub: "Hotel Sridhar opp temple", time: "19:30" },
    { id: 7, name: "Madhapur", sub: "Near chutneys opp shilpakalavedika", time: "19:30" },
    { id: 8, name: "Kukatpally", sub: "Near metro station", time: "19:30" },
    { id: 9, name: "Ameerpet", sub: "Near KLM Shopping mall", time: "19:30" }
  ];

  const droppingPoints = [
    { id: 1, name: "Chikkaballapur Bypass", sub: "Near chikkaballapur bypass", time: "19:30" },
    { id: 2, name: "Devanahalli", sub: "", time: "19:30" },
    { id: 3, name: "Bial Airport", sub: "Near Bial Tollgate", time: "19:30" },
    { id: 4, name: "Sada Halli Tollgate", sub: "", time: "19:30" },
    { id: 5, name: "Yalahanka", sub: "", time: "19:30" },
    { id: 6, name: "Hebbal", sub: "", time: "19:30" },
    { id: 7, name: "Nagavara", sub: "", time: "19:30" },
    { id: 8, name: "Hennur", sub: "After under pass ORR towards hebbal", time: "19:30" },
    { id: 9, name: "HRBR Layout", sub: "", time: "19:30" }
  ];

  const handleProceed = () => {
    navigate("/passenger-details", {
      state: {
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
    <div className="min-h-screen bg-gray-100 mt-16">
      <BookingHeader
        from={from}
        to={to}
        date={date}
        activeStep="Boarding/Dropping"
      />

      <div className="p-4 md:p-10">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm">
          {/* BOARDING */}
          <div>
            <h2 className="text-2xl font-bold">Boarding points</h2>
            <p className="text-gray-400 text-sm mb-12">
              Select your Boarding point
            </p>

            <div className="space-y-3">
              {boardingPoints.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setBoarding(p)}
                  className={`flex items-center w-full md:w-[381px] h-[67px] justify-between p-4 rounded-xl cursor-pointer transition
                ${
                  boarding?.id === p.id
                    ? "bg-blue-100 border-2 border-blue-500"
                    : "bg-[#EEF5FE]"
                }
                `}
                >
                  <div>
                    <p className="font-semibold text-sm">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.sub}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{p.time}</span>

                    <div
                      className={`w-4 h-4 rounded-full border-2
                    ${
                      boarding?.id === p.id
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-500"
                    }
                    `}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-blue-600 text-sm mt-3 cursor-pointer">
              View all
            </p>
          </div>

          {/* DROPPING */}
          <div>
            <h2 className="text-2xl font-bold">Dropping points</h2>
            <p className="text-gray-400 text-sm mb-12">
              Select your Dropping point
            </p>

            <div className="space-y-3">
              {droppingPoints.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setDropping(p)}
                  className={`flex items-center w-full md:w-[381px] h-[67px] justify-between p-4 rounded-xl cursor-pointer transition
                ${
                  dropping?.id === p.id
                    ? "bg-blue-100 border-2 border-blue-500"
                    : "bg-[#EEF5FE]"
                }
                `}
                >
                  <div>
                    <p className="font-semibold text-sm">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.sub}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{p.time}</span>

                    <div
                      className={`w-4 h-4 rounded-full border-2
                    ${
                      dropping?.id === p.id
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-500"
                    }
                    `}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-blue-600 text-sm mt-3 cursor-pointer">
              View all
            </p>
          </div>
        </div>

        {/* CONTINUE BUTTON */}

        <div className="max-w-[300px] mx-auto mt-10">
          <button
            disabled={!boarding || !dropping}
            onClick={handleProceed}
            className="w-[300px] bg-[#0070FF] text-white py-3 rounded-xl font-semibold disabled:bg-gray-300"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}