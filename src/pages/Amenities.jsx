import { Wifi, Plug, Bed, Monitor, MapPin } from "lucide-react";

export default function Amenities() {
  const amenities = [
    { icon: Wifi, label: "Wifi" },
    { icon: Monitor, label: "Entertainment" },
    { icon: Plug, label: "Charging Points" },
    { icon: Bed, label: "Blankets & Pillows" },    
    { icon: MapPin, label: "GPS Tracking" },
  ];

  return (
    <section className="bg-[#ddefff] py-14 sm:py-16 px-4 sm:px-6 w-full">
      
      {/* Title */}
      <h2 className="text-2xl sm:text-5xl text-[#0070FF] font-semibold text-center mb-8 sm:mb-10">
        Amenities
      </h2>

      {/* Icons Row */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-36 mb-8 sm:mb-10">
        {amenities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center gap-2 sm:gap-3 w-[190px] sm:w-auto">
              
              {/* Icon Circle */}
              <div className="bg-white p-3 sm:p-4 rounded-full shadow-md">
                <Icon className="text-blue-500" size={50} />
              </div>

              {/* Label */}
              <span className="bg-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm shadow text-center">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <p className="text-center text-start text-gray-900 max-w-full md:max-w-6xl mx-auto leading-relaxed text-base sm:text-lg md:text-lg px-2">
        Enjoy a comfortable and pleasant journey with modern bus amenities designed for your convenience. 
        Buses are equipped with comfortable reclining or sleeper seats, air conditioning, and ample legroom 
        to ensure a relaxed travel experience. Onboard features such as charging points, reading lights, and 
        clean blankets add comfort during long journeys. Select buses also offer Wi-Fi, entertainment systems, 
        GPS tracking, and professional staff for a safe and smooth ride. With well-maintained interiors and 
        essential facilities, these amenities make bus travel comfortable, convenient, and enjoyable for every passenger.
      </p>

    </section>
  );
}