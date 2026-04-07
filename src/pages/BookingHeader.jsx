export default function BookingHeader({ from, to, date, activeStep }) {
  const steps = [
    "Seat Selection",
    "Boarding/Dropping",
    "Passenger Info",
    "Payment",
  ];

  const activeIndex = steps.indexOf(activeStep);

  return (
    <div className="bg-white shadow-sm border-b">

      {/* TOP ROUTE INFO */}
      <div className="px-4 md:px-8 lg:px-28 py-3 flex flex-col md:flex-row justify-between items-center gap-2">

        <div className="font-semibold text-sm md:text-base text-center md:text-left">
          {from} → {to}
          <span className="text-gray-400 text-xs md:text-sm ml-2">
            {date}
          </span>
        </div>

        {/* MOBILE ACTIVE STEP */}
        <div className="md:hidden text-sm text-gray-500">
          Step {activeIndex + 1} of {steps.length}
        </div>

           {/* DESKTOP / TABLET STEPS */}
      <div className="hidden md:flex justify-center items-center gap-20 lg:gap-24 text-sm">

        {steps.map((step, index) => {

          const isCompleted = index < activeIndex;
          const isActive = index === activeIndex;

          let stepClass = "text-gray-400";

          if (isActive) {
            stepClass =
              "bg-blue-600 text-white px-4 py-1 rounded-full font-semibold";
          } else if (isCompleted) {
            stepClass = "text-blue-600 font-semibold";
          }

          return (
            <span key={step} className={stepClass}>
              {step}
            </span>
          );
        })}

      </div>

      {/* MOBILE PROGRESS BAR */}
      <div className="md:hidden px-4 pb-3">

        <div className="flex items-center gap-2">

          {steps.map((_, index) => (
            <div
              key={index}
              className={`flex-1 w-10 h-1 rounded-full ${
                index <= activeIndex ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          ))}

        </div>

        <p className="text-center text-xs text-gray-600 mt-2 font-medium">
          {activeStep}
        </p>

      </div>

      </div>

   

    </div>
  );
}