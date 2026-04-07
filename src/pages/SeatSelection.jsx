import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { GiSteeringWheel } from "react-icons/gi";
import BookingHeader from "../pages/BookingHeader";
import SeatDeck from "../components/seat/SeatDeck";
import SeatLegend from "../components/seat/SeatLegend";
import BusDetailsPanel from "../components/seat/BusDetailsPanel";

import { layoutConfigs } from "../data/layoutConfigs";
import { generateSeats } from "../utils/generateSeats";

export default function SeatSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const { bus, from, to, date } = location.state || {};

  const busType = bus?.layoutType || "1+2";
  const layoutConfig = layoutConfigs[busType] || layoutConfigs["1+2"];

  const [seats, setSeats] = useState(() => {
    const initialSeats = generateSeats(layoutConfig);

    return initialSeats.map((seat) => {
      // Ensure originalStatus exists so we can revert to it when deselecting
      const s = { ...seat, originalStatus: seat.status || "available" };
      if (["L5", "L6", "U5", "U6"].includes(seat.id)) {
        return { ...s, ladiesOnly: true };
      }
      return s;
    });
  });

  const HOLD_TIME_SECONDS = 300;

  const [timeLeft, setTimeLeft] = useState(HOLD_TIME_SECONDS);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showExpiredBanner, setShowExpiredBanner] = useState(false);

  const selectedSeats = seats.filter((s) => s.status === "selected");

  useEffect(() => {
    if (selectedSeats.length > 0 && !isTimerActive) {
      setIsTimerActive(true);
      setTimeLeft(HOLD_TIME_SECONDS);
      setShowExpiredBanner(false);
    } else if (selectedSeats.length === 0 && isTimerActive) {
      setIsTimerActive(false);
      setShowExpiredBanner(false);
    }
  }, [selectedSeats.length, isTimerActive]);

  useEffect(() => {
    if (!isTimerActive) return;

    if (timeLeft <= 0) {
      setIsTimerActive(false);
      setShowExpiredBanner(true);

      setSeats((prev) =>
        prev.map((s) =>
          s.status === "selected"
            ? { ...s, status: s.originalStatus }
            : s
        )
      );
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft]);

  const onSeatClick = useCallback((id) => {
    setSeats((prev) =>
      prev.map((s) =>
        s.id === id && s.status !== "sold"
          ? {
              ...s,
              status:
                s.status === "selected"
                  ? s.originalStatus
                  : "selected",
            }
          : s
      )
    );
  }, []);

  const seatMap = useMemo(() => Object.fromEntries(seats.map((seat) => [seat.id, seat])), [seats]);

  const totalPrice = useMemo(() => selectedSeats.reduce(
    (sum, s) => sum + (s.price || 0),
    0
  ), [selectedSeats]);

  const handleProceed = useCallback(() => {
    navigate("/boarding-dropping", {
      state: { selectedSeats, totalPrice, bus, from, to, date },
    });
  }, [navigate, selectedSeats, totalPrice, bus, from, to, date]);

  // If state is missing, the page was likely accessed directly.
  if (!bus) {
    return <div className="p-8 text-center text-xl">Invalid session. Please start your search again from the homepage.</div>;
  }

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (timeLeft % 60)
    .toString()
    .padStart(2, "0");

  return (
    <div className="min-h-screen mt-16 bg-slate-100">

      <BookingHeader
        from={from}
        to={to}
        date={date}
        activeStep="Seat Selection"
      />

      {/* PAGE CONTENT */}

      <div className="w-full mx-auto px-10 md:px-16 py-6">

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDE - SEAT LAYOUT */}

         <div className="bg-white h-full rounded-2xl p-2 sm:p-4 md:p-6 shadow-sm w-full lg:w-[55%]">

  <div className="flex flex-wrap justify-center gap-3 sm:gap-6">

    {layoutConfig?.lower && (
      <div className="relative">
        <GiSteeringWheel className="absolute top-8 right-10 text-2xl text-gray-400" aria-hidden="true" />
        <SeatDeck
          title="LOWER"
          layout={layoutConfig.lower.layout}
          seatMap={seatMap}
          onSeatClick={onSeatClick}
        />
      </div>
    )}

    {layoutConfig?.upper && (
      <SeatDeck
        title="UPPER"
        layout={layoutConfig.upper.layout}
        seatMap={seatMap}
        onSeatClick={onSeatClick}
      />
    )}

  </div>

  <div className="mt-6">
    <SeatLegend />
  </div>

</div>

          {/* RIGHT SIDE - BUS DETAILS */}

          <div className="w-full lg:w-[45%]" aria-live="polite">
            <BusDetailsPanel
              bus={bus}
              selectedSeats={selectedSeats}
              totalPrice={totalPrice}
              handleProceed={handleProceed}
              minutes={minutes}
              seconds={seconds}
              expired={showExpiredBanner}
            />
          </div>

        </div>

      </div>

    </div>
  );
}