// pages/Home.jsx
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import Features from "../components/Features";
import PopularRoutes from "../components/PopularRoutes";
import travelBg from "../assets/home.jpg";
import Amenities from "./Amenities";
import DownloadApp from "../pages/DownloadApp";
import FAQSection from "./FAQSection";
import WhyChooseUs from "./WhyChooseUs";
import TravelPoster from "./TravelPoster";
import SupportAndReviews from "./SupportAndReviews";
import OffersSlider from "./OffersSlider";
import bg from "../assets/background.jpeg";


export default function Home() {

  /* -----------------------
     PARALLAX EFFECT
  ----------------------- */

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
     

      {/* HERO SECTION */}

      <section className="relative overflow-hidden">

        {/* PARALLAX BACKGROUND */}

        <img
          src={travelBg}
          alt="Travel Banner"
          loading="lazy"
          className="w-full h-[70vh] sm:h-[80vh] object-cover"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/10"></div>

        {/* TEXT CONTENT */}

        <div className="absolute inset-0 flex items-center md:items-start justify-center md:justify-start pt-0 md:pt-32 px-6 sm:px-12 md:px-24 lg:px-32">

          <div className="max-w-2xl text-center md:text-left slide-in-right">

            {/* HEADING */}

           <h1 className="text-black font-bold leading-tight">
              <span className="block text-3xl sm:text-4xl md:text-5xl">
                Your Journey
              </span>
              <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl">
                of Exploration{" "}
                <span className="text-blue-600 font-serif">
                  Begins Here!
                </span>
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 text-black text-base sm:text-lg leading-relaxed slide-in-right">
              A reliable platform to book bus tickets online. Discover verified operators,
              flexible timings, secure payments, and comfortable travel options.
            </p>

          </div>

        </div>

      </section>

      {/* OTHER SECTIONS */}

      <SearchForm />
      <div className="-mt-28">
      <PopularRoutes /></div>
      <Features />
      <OffersSlider />
      <WhyChooseUs />
      <TravelPoster />
      <Amenities />
      
      
      <SupportAndReviews />
      <DownloadApp />
      <FAQSection />

    </div>
  );
}