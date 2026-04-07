import React from "react";
import image1 from "../assets/Bangalore.png";
import image2 from "../assets/vizag.jpg";
import image3 from "../assets/chennai.jpg";
import image4 from "../assets/vizag.jpg";
import bg1 from "../assets/bg-1.jpg";

// The data is constant, so it's best to define it outside the component.
// I've also cleaned up the formatting to prevent potential parsing issues.
const routes = [
  { from: "Hyderabad", to: "Banglore", price: 2200, image: image1 },
  { from: "Hyderabad", to: "Vizag", price: 2200, image: image2 },
  { from: "Hyderabad", to: "Chennai", price: 2200, image: image3 },
  { from: "Hyderabad", to: "Vijayawada", price: 2200, image: image4 },
  { from: "Hyderabad", to: "Banglore", price: 2200, image: image1 },
  { from: "Hyderabad", to: "Vizag", price: 2200, image: image2 },
];

// By extracting the route card into its own memoized component, we prevent
// unnecessary re-renders of individual cards, improving performance.
const RouteCard = React.memo(({ route }) => (
  <div className="min-w-[260px] bg-white rounded-xl shadow-md hover:shadow-lg transition">
    <img
      src={route.image}
      alt={`Bus route to ${route.to}`} // More descriptive alt text
      className="w-full h-44 object-cover rounded-t-xl"
      loading="lazy" // Lazy load images for better performance
    />
    <div className="p-4">
      <p className="text-sm text-gray-500 mb-1">{route.from} →</p>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg">{route.to}</h3>
        <p className="text-sm text-gray-600">
          Price - <span className="font-semibold">{route.price}</span>
        </p>
      </div>
<div className="relative w-full group rounded-md p-[3px]">

  {/* 🌈 Glow Aura */}
  {/* <div className="absolute -inset-[3px] rounded-md opacity-0 group-hover:opacity-100 transition duration-500 blur-md 
    bg-[linear-gradient(120deg,#ff00cc,#3333ff,#00ffcc,#ff00cc)] 
    bg-[length:300%_300%] animate-gradientMove">
  </div> */}

  {/* 🎨 Animated Border */}
  <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition duration-500 
    bg-[linear-gradient(120deg,#ff00cc,#3333ff,#00ffcc,#ff00cc)] 
    bg-[length:300%_300%] animate-gradientMove">
  </div>

  {/* 🚀 Button */}
  <button
    aria-label={`Book ticket from ${route.from} to ${route.to} for ${route.price}`}
    className="relative w-full bg-blue-600 text-white py-2 rounded-md 
    transition-all duration-300 
    hover:bg-white hover:text-black
    group-hover:scale-[1.02] active:scale-[0.97]"
  >
    BOOK NOW
  </button>

  {/* ✨ Shine Sweep */}
  {/* <div className="absolute inset-[3px] overflow-hidden rounded-md pointer-events-none z-10">
    <div className="shine absolute top-0 left-[-100%] w-[50%] h-full bg-white/30 blur-md rotate-12"></div>
  </div> */}

</div>
    </div>
  </div>
));

function PopularRoutes() {
  return (
    <section
      aria-labelledby="popular-routes-heading"
  className="py-24 bg-center -mt-16 bg-cover relative"
  // style={{ backgroundImage: `url(${bg1})` }}
>
  {/* Light overlay */}
  <div className="absolute inset-0 bg-white/80"></div>

  <div className="relative mt-16 w-full max-w-screen-xl mx-auto px-4">
    <h2
      id="popular-routes-heading"
      className="text-center text-blue-600 text-3xl font-bold mb-12"
    >
      POPULAR ROUTES
    </h2>

    <p className="text-center text-gray-700 max-w-4xl text-lg text-start mx-auto mb-24">
      Popular routes in a bus ticket booking app represent travel corridors with consistently high demand due to factors like daily commuting patterns, economic ties between cities, tourism flow, and limited alternative transport options. Highlighting these routes helps users discover commonly traveled journeys quickly, reduces search effort, and increases booking efficiency by leveraging collective user behavior and historical booking data.
    </p>

    <style>
      {`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          animation: gradientMove 3s ease infinite;
        }
        @keyframes shine-sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .group:hover .shine {
          animation: shine-sweep 1.5s ease-in-out infinite;
        }
      `}
    </style>
    <div className="w-full flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
      {routes.map((route, index) => (
        <RouteCard
          // Using a more stable and unique key for performance and to avoid potential bugs.
          key={`${route.from}-${route.to}-${index}`}
          route={route}
        />
      ))}
    </div>
  </div>
</section>
  );
}

// Memoizing the component prevents it from re-rendering if the parent component
// updates for reasons unrelated to PopularRoutes.
export default React.memo(PopularRoutes);