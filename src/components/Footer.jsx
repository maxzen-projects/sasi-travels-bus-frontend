import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Book Tickets", to: "/#book-tickets" },
  { label: "Routes", to: "/#routes" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0070FF] text-white pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SasiBus</h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            SasiBus provides a reliable and comfortable bus booking experience.
            Travel across cities with ease, safety, and affordable pricing.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <div className="bg-white text-[#0070FF] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>
            <div className="bg-white text-[#0070FF] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaTwitter />
            </div>
            <div className="bg-white text-[#0070FF] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaInstagram />
            </div>
            <div className="bg-white text-[#0070FF] p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link className="hover:text-white transition" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>Online Ticket Booking</li>
            <li>Live Bus Tracking</li>
            <li>Customer Support</li>
            <li>Comfortable Seating</li>
            <li>Secure Payments</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <div className="flex items-center gap-3 mb-3 text-sm text-blue-100">
            <MdLocationOn size={18} />
            <p>Andhra Pradesh, India</p>
          </div>

          <div className="flex items-center gap-3 mb-3 text-sm text-blue-100">
            <MdPhone size={18} />
            <p>+91 9866825647</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-blue-100">
            <MdEmail size={18} />
            <p>support@sasibus.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-400 mt-10 pt-4 text-center text-sm text-blue-100">
        &copy; {new Date().getFullYear()} SasiBus. All rights reserved.
      </div>
    </footer>
  );
}
