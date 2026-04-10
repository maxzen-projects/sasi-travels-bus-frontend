import {
  Phone,
  Navigation,
  Ticket,
  Monitor,
  Headphones,
  Users,
  Bus,
  Map
} from "lucide-react";
import { PiSeatBold } from "react-icons/pi";

export default function WhyChooseUs() {
  const features = [
    {
      icon: PiSeatBold,
      title: "COMFORTABLE",
      desc: "Travel with well-maintained, spacious seats designed to make every trip enjoyable and smooth."
    },
    {
      icon: Navigation,
      title: "GPS NAVIGATION",
      desc: "Stay informed with live bus tracking, accurate arrival updates, and real-time travel insights."
    },
    {
      icon: Ticket,
      title: "BUS TICKETS EASILY",
      desc: "Enjoy a seamless ticket booking experience with quick access, easy seat selection, and secure payments."
    },
    {
      icon: Monitor,
      title: "ENTERTAINMENT ON BOARD",
      desc: "Make your journey fun and relaxing with onboard entertainment designed to keep you engaged."
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER CARE",
      desc: "Reach our support team anytime for quick help with bookings, payments, and travel queries."
    },
    {
      icon: Users,
      title: "EXPERIENCED DRIVERS",
      desc: "Our buses are driven by trained professionals to ensure safe and comfortable rides."
    }
  ];

  return (
    <section className="relative py-14 sm:py-16 px-4 sm:px-6 bg-[#DDEFFF] bg-cover bg-center w-full">

      {/* Heading */}
      <h2 className="text-2xl sm:text-5xl font-semibold text-center text-[#0070FF] mb-8 sm:mb-12">
        WHY CHOOSE US
      </h2>

      {/* Description */}
      <p className="text-center text-start text-gray-900 max-w-full md:max-w-6xl mx-auto leading-relaxed text-base sm:text-lg md:text-lg px-2 mb-10">
        Choosing our bus ticket booking service ensures a comfortable, reliable, and hassle-free travel experience. 
        Our platform allows passengers to easily search routes, compare schedules, and book tickets online within minutes. 
        We focus on providing a user-friendly system so that anyone can reserve seats anytime and from anywhere. 
        Our buses are well-maintained and equipped with comfortable seating to ensure a pleasant journey for every passenger. 
        Safety is one of our top priorities, and our drivers are experienced and trained to provide secure travel. 
        We also offer multiple routes and flexible timings, making it easier for passengers to plan their trips according to their convenience. 
        In addition, our ticket prices are affordable, giving travelers a cost-effective way to reach their destinations. 
        With reliable schedules, quick booking, and dependable service, we aim to make every journey smooth and enjoyable. 
        By choosing our buses, passengers can travel with confidence, comfort, and convenience.
      </p>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-full border-2 border-[#0070FF] flex items-center justify-center">
              <item.icon size={24} className="text-[#0070FF]" />
            </div>

            <h3 className="text-sm font-semibold text-[#0070FF] mb-3 tracking-wide">
              {item.title}
            </h3>

            <p className="text-xs text-gray-700 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* Stats Section */}
      <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg py-10 px-8 sm:px-12
                        grid grid-cols-1 sm:grid-cols-3
                        gap-10 text-center sm:text-left">

          <StatItem icon={Bus} number="1200" label="Total vehicles" />
          <StatItem icon={Users} number="20K+" label="Happy Customers" />
          <StatItem icon={Map} number="200+" label="Total Routes" />

        </div>
      </div>

    </section>
  );
}

function StatItem({ icon: Icon, number, label }) {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-4">

      <Icon size={36} className="text-[#0070FF]" />

      <div>
        <p className="text-xl font-semibold text-black">{number}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>

    </div>
  );
}