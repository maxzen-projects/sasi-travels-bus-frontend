import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaClock } from "react-icons/fa";

import offerBg2 from "../assets/offersBg2.png";
import offerBg3 from "../assets/offersBg3.jpg";
import offerBg4 from "../assets/offersBg4.png";

import offerI1 from "../assets/offerI1.png";
import offerI2 from "../assets/offersI2.png";
import offerI3 from "../assets/offersI3.png";

export default function Offers() {

  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -320,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 320,
      behavior: "smooth"
    });
  };

  /* -----------------------------
     AUTO SLIDE
  ----------------------------- */

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!scrollRef.current) return;

  //     scrollRef.current.scrollBy({
  //       left: 320,
  //       behavior: "smooth"
  //     });
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  /* -----------------------------
     DRAG SCROLL
  ----------------------------- */

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  /* -----------------------------
     OFFERS DATA
  ----------------------------- */

  const offers = [
  {
    label: "Lastmin.",
    title: "Limited time",
    subtitle: "steal deals",
    subtitleClass: "text-xl font-bold",
    backgroundColor: "#F1CCF7",
    icon: <img src={offerI1} alt="" className="w-12 sm:w-16" />,
    iconPosition: "bottom"
  },
  {
    backgroundImage: offerBg2,
    label: "Women.ofr",
    title: "Special offers",
    subtitle: "for students and corporate employees",
    subtitleClass: "sm:text-lg md:text-xl font-bold",
    icon: <img src={offerI2} alt="" className="w-12 sm:w-16" />,
    iconPosition: "top"
  },
  {
    backgroundImage: offerBg3,
    label: "Free.dt",
    title: "FREE DATE",

    subtitle: "Min 50% offer",
    subtitleClass: "sm:text-2xl md:text-3xl",
    icon: <img src={offerI3} alt="" className="w-12 sm:w-16" />,
    iconPosition: "top"
  },
  {
    backgroundImage: offerBg4,
    label: "Just for you",
    title: "Specially chosen buses",
    titleClass: "text-xl",
    subtitleClass: "text-sm",
    icon: <FaClock className="text-3xl text-white" />,
    iconPosition: "bottom"
  }
];

  return (
    <div className="mt-12 py-12 bg-[#ECFFFE]">

      <div className="md:w-[90%] mx-auto px-10 sm:px-6 lg:px-10 relative">

        {/* LEFT ARROW */}

        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
        >
          <FaChevronLeft />
        </button>

        {/* CAROUSEL */}

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="
          flex
          gap-10
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          cursor-grab
          scrollbar-hide
          "
        >

          {offers.map((offer, index) => (

            <div
              key={index}
              className="
              snap-start
              min-w-[220px]
              sm:min-w-[260px]
              md:min-w-[300px]
              lg:min-w-[333px]
              h-[160px]
              sm:h-[180px]
              md:h-[200px]
              lg:h-[208px]
              rounded-3xl
              p-5
              relative
              bg-cover
              bg-center
              flex
              flex-col
              gap-3
              "
              style={{
                backgroundImage: offer.backgroundImage
                  ? `url(${offer.backgroundImage})`
                  : "none",
                backgroundColor: offer.backgroundColor
              }}
            >

              <span className="bg-white px-3 py-1 rounded-lg text-xs sm:text-sm w-fit font-medium">
                {offer.label}
              </span>

              <div className="max-w-[220px]">

                <h2 className="text-xl sm:text-lg md:text-xl md:mt-4 font-bold text-black">
                  {offer.title}
                </h2>

                {offer.subtitle && (
                  <p className={`${offer.subtitleClass} text-black`}>
  {offer.subtitle}
</p>
                )}

              </div>

              {/* ICON */}

              <div
                className={`absolute right-5 ${
                  offer.iconPosition === "top" ? "top-5" : "bottom-5"
                }`}
              >
                {offer.icon}
              </div>

            </div>

          ))}

        </div>

        {/* RIGHT ARROW */}

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
        >
          <FaChevronRight />
        </button>

      </div>

    </div>
  );
}