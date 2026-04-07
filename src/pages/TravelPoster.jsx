import banner from "../assets/bus-banner.png";
import bannermob from "../assets/bus-banner-mob.png";

export default function TravelPoster() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative rounded-2xl overflow-hidden ">

          {/* Desktop Image */}
          <img
            src={banner}
            alt="Travel Together"
            className="hidden sm:block w-full h-[250px] object-cover"
          />

          {/* Mobile Image */}
          <img
            src={bannermob}
            alt="Travel Together"
            className="block sm:hidden w-full object-cover"
          />

          {/* Text on Image */}
          <div className="absolute right-4 sm:right-16 top-[83%] sm:top-1/2 -translate-y-1/2 text-white text-center sm:text-left px-2">

            <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">
              Travel Together
            </h2>

            <p className="text-xs sm:text-sm mb-4 sm:mb-5 max-w-[220px] sm:max-w-[260px]">
              Group bus travel is convenient and affordable, keeping
              everyone together for a comfortable and enjoyable trip.
            </p>

            <a href="https://sasibus.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-[#0070FF] px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:scale-105 transition">
                Explore Now
              </button>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}