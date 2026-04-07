import { Star, User } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Reviews() {
  const scrollRef = useRef(null);

  const reviews = [
    { name: "Prerana Sri", text: "Customer service is excellent and responsive." },
    { name: "Aravindh", text: "Safe and punctual bus service. Highly recommended." },
    { name: "Rahul", text: "Drivers are experienced and polite." },
    { name: "Vijay Sharma", text: "Very smooth journey and booking process was easy." },
    { name: "Ashok Kumar", text: "Amazing travel experience. Clean and comfortable buses." },
  ];

  const infiniteReviews = [...reviews, ...reviews];

  /* INFINITE AUTO SCROLL */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame;

    const autoScroll = () => {
      container.scrollLeft += 0.5;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#f5f9ff]">

      {/* Hide Scrollbar */}
      <style>
        {`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}
      </style>

      {/* TITLE */}
      <h2 className="text-center text-[#0070FF] text-lg md:text-xl font-bold mb-10 md:mb-12 px-4">
        WHAT DO CUSTOMERS SAY ABOUT US?
      </h2>

      {/* REVIEWS */}
      <div className="relative overflow-hidden">

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-scroll scrollbar-hide py-4 px-4 md:px-6"
        >

          {infiniteReviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[260px] md:min-w-[320px]
              bg-white border-2 border-[#0070FF]
              rounded-xl p-5 md:p-6 shadow-md
              transition-all duration-300
              hover:scale-105 hover:shadow-xl"
            >

              {/* STARS */}
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* NAME */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm">
                  {review.name}
                </h3>
                <User size={18} className="text-[#0070FF]" />
              </div>

              {/* TEXT */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {review.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}