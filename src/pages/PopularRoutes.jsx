  // import React, { useRef } from "react";
  // import { ChevronLeft, ChevronRight } from "lucide-react";
  // import bg1 from "../assets/bg1.png"

  // const routes = [
  //   {
  //     id: 1,
  //     from: "Hyderabad",
  //     to: "Bangalore",
  //     price: 2200,
  //     image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09b",
  //   },
  //   {
  //     id: 2,
  //     from: "Hyderabad",
  //     to: "Vizag",
  //     price: 2200,
  //     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  //   },
  //   {
  //     id: 3,
  //     from: "Hyderabad",
  //     to: "Chennai",
  //     price: 2200,
  //     image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
  //   },
  //   {
  //     id: 4,
  //     from: "Hyderabad",
  //     to: "Vijayawada",
  //     price: 2200,
  //     image: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d",
  //   },
  //   {
  //     id: 5,
  //     from: "Hyderabad",
  //     to: "Mumbai",
  //     price: 2200,
  //     image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66",
  //   },
  // ];

  // export default function PopularRoutes() {
  //   const scrollRef = useRef();

  //   const scroll = (direction) => {
  //     if (direction === "left") {
  //       scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  //     } else {
  //       scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //     }
  //   };

  //   return (
  //     <section
  //   className="relative py-16 bg-cover bg-center"
  //   style={{ backgroundImage: `url(${bg1})` }}
  // >
  //       {/* Overlay */}
  //       {/* <div className="absolute inset-0 bg-white"></div> */}

  //       <div className="relative max-w-7xl mx-auto px-6">
  //         {/* Heading */}
  //         <h2 className="text-center text-blue-600 font-bold text-2xl md:text-3xl mb-4 tracking-wide">
  //           POPULAR ROUTES
  //         </h2>

  //         {/* Description */}
  //         <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm md:text-base">
  //           Popular routes in a bus ticket booking app represent travel corridors
  //           with consistently high demand due to factors like daily commuting
  //           patterns, economic ties between cities, tourism flow, and limited
  //           alternative transport options. Highlighting these routes helps users
  //           discover commonly traveled journeys quickly and increases booking efficiency.
  //         </p>

  //         {/* Carousel Section */}
  //         <div className="relative">
  //           {/* Left Arrow */}
  //           <button
  //             onClick={() => scroll("left")}
  //             className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
  //           >
  //             <ChevronLeft size={20} />
  //           </button>

  //           {/* Cards Container */}
  //           <div
  //             ref={scrollRef}
  //             className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
  //           >
  //             {routes.map((route) => (
  //               <div
  //                 key={route.id}
  //                 className="min-w-[260px] bg-white rounded-xl shadow-lg overflow-hidden"
  //               >
  //                 <img
  //                   src={route.image}
  //                   alt={route.to}
  //                   className="h-40 w-full object-cover"
  //                 />

  //                 <div className="p-4">
  //                   <div className="flex justify-between text-sm text-gray-500 mb-2">
  //                     <span>{route.from}</span>
  //                     <span>Price</span>
  //                   </div>

  //                   <div className="flex justify-between items-center mb-4">
  //                     <h3 className="font-semibold text-lg">
  //                       {route.to}
  //                     </h3>
  //                     <span className="font-semibold">
  //                       ₹ {route.price}
  //                     </span>
  //                   </div>

  //                   <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">
  //                     BOOK NOW
  //                   </button>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>

  //           {/* Right Arrow */}
  //           <button
  //             onClick={() => scroll("right")}
  //             className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
  //           >
  //             <ChevronRight size={20} />
  //           </button>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }