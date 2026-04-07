import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

import sbi from "../assets/sbilogo.png";
import hdfc from "../assets/HDFClogo 1.png";
import axis from "../assets/axislogo-removebg-preview 1.png";
import idbi from "../assets/idbilogo 1.png";

import sb from "../assets/sbi.png";
import ax from "../assets/axis.png";
import id from "../assets/idbi.png";

export default function OffersSlider() {

  const scrollRef = useRef(null);

  const offers = [
    {
      title: "Get Rs 150 off on Bus",
      subtitle: "Valid upto Mar 15",
      img: sb,
      code: "SBI13",
      bankLogo: sbi,
    },
    {
      title: "Get 20% off Axis card",
      subtitle: "Valid upto May 30",
      img: ax,
      code: "AXIS20",
      bankLogo: axis,
      logoSize: "h-9",
    },
    {
      title: "Get 20% off HDFC card",
      subtitle: "Valid upto May 30",
      img: id,
      code: "HDFC20",
      bankLogo: hdfc,
      logoSize: "h-8",
    },
    {
      title: "Upto 20% off",
      subtitle: "Valid upto Feb 28",
      img: sb,
      code: "IDBI13",
      bankLogo: idbi,
    },
  ];

  const [data, setData] = useState([...offers, ...offers]);

  const scrollRight = () => {

    const slider = scrollRef.current;
    const card = slider.children[0];

    const scrollAmount = card.offsetWidth + 16;

    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });

  };

  const handleScroll = () => {

    const slider = scrollRef.current;

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 200) {
      setData((prev) => [...prev, ...offers]);
    }

  };

  return (
    <section className="py-10 sm:py-14 relative">

      <style>
        {`
        .scrollbar-hide::-webkit-scrollbar { display:none }
        .scrollbar-hide { -ms-overflow-style:none; scrollbar-width:none }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#0070FF] mb-8 sm:mb-12">
          OFFERS FOR YOU
        </h2>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab snap-x snap-mandatory"
        >

          {data.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}

        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="absolute right-2 sm:right-0 top-[65%] -translate-y-1/2 bg-white shadow-lg w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:scale-105 transition"
        >
          <ChevronRight size={22}/>
        </button>

      </div>

    </section>
  );
}


function OfferCard({ title, subtitle, img, code, bankLogo, logoSize = "h-7" }) {

  return (
    <div
      className="
      snap-start
      flex-[0_0_85%]
      sm:flex-[0_0_45%]
      md:flex-[0_0_30%]
      lg:flex-[0_0_22%]
      bg-white
      rounded-2xl
      shadow-md
      border border-gray-200
      overflow-hidden
      hover:shadow-lg
      transition
      "
    >

      <div
        className="relative h-28 sm:h-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/10"></div>

        <div className="absolute bottom-3 left-3 text-white">

          <h3 className="text-sm sm:text-lg font-semibold">
            {title}
          </h3>

          <p className="text-xs sm:text-sm opacity-90">
            {subtitle}
          </p>

        </div>

      </div>

      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 text-xs sm:text-sm">

        <p className="text-gray-600">
          Coupon code{" "}
          <span className="text-[#0070FF] font-semibold">
            {code}
          </span>
        </p>

        <img
          src={bankLogo}
          alt="bank"
          className={`${logoSize} max-w-[60px] object-contain`}
        />

      </div>

    </div>
  );

}