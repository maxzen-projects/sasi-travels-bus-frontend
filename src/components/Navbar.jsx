import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaExpandAlt,
  FaCompressAlt,
} from "react-icons/fa";
import {
  MdLocalOffer,
  MdHelp,
  MdCancel,
  MdSearch,
} from "react-icons/md";
import Login from "../pages/Login";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "./context/LanguageContext";
import { useAuth } from "./context/AuthContext";
import logo from "../assets/sasiLogo-removebg-preview.png";
import robo from "../assets/roboLogo.png";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatFullScreen, setIsChatFullScreen] = useState(false);

  const { language, changeLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const helpCategories = [
    { name: "Ticket Booking", path: "/faqspage" },
    { name: "Wallet", path: "/wallet" },
    { name: "Offers & Discount", path: "/offers-discounts" },
    { name: "Referral Help", path: "/referral-help" },
    { name: "Payments & Refund", path: "/payments-refund" },
    { name: "Ticket Cancellation", path: "/cancel-ticket-help" },
    { name: "Other FAQ’s", path: "/faqs" },
    { name: "Ticket Resell", path: "/resell-help" },
  ];

  const isHome = location.pathname === "/";

  /* Detect scroll (only needed for home page) */
  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const textColor = isHome && !scrolled ? "text-white" : "text-gray-700";
  const navBg =
    isHome && !scrolled ? "bg-transparent" : "bg-white shadow-sm";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between transition-all duration-300 ${navBg}`}
    >
      {/* ================= LEFT: LOGO + LINKS ================= */}
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="SasiBus Logo"
          className="w-18 h-14 object-cover"
        />
        <div className={`font-bold text-2xl ${isHome && !scrolled ? "text-white" : "text-blue-600"}`}>
          SasiBus
        </div>

        {/* <ul
          className={`hidden md:flex gap-8 font-medium ${textColor}`}
        >
          <li className="cursor-pointer text-white hover:text-blue-600">
            {t("thingsToDo")}
          </li>
          <li className="cursor-pointer text-white hover:text-blue-600">
            {t("help")}
          </li>
        </ul> */}
      </div>

      {/* ================= RIGHT: DESKTOP ================= */}
      <div
        className={`hidden md:flex items-center gap-6 text-sm font-medium ${textColor}`}
      >
        {/* Language Selector Trigger */}
        {/* <button
          onClick={() => setIsLanguageOpen(true)}
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <span className="uppercase">{language?.code || "EN"}</span>
          <FaChevronDown className="text-xs" />
        </button> */}

        {/* Country */}
        {/* <div className="flex items-center gap-1 text-white cursor-pointer">
          <img
            src="https://flagcdn.com/w20/in.png"
            alt="India"
            className="w-5 h-4 rounded-sm"
          />
          <FaChevronDown className="text-xs" />
        </div> */}

        {/* Currency */}
        {/* <div className="flex items-center gap-1 text-white cursor-pointer">
          <span>INR</span>
          <FaChevronDown className="text-xs" />
        </div> */}

        {/* Account */}
        <div className="relative">
  {/* BEFORE LOGIN */}
  {!user && (
    <button
      onClick={() => setIsLoginOpen(true)}
      className={`flex items-center gap-2 px-4 py-2 border rounded-full transition text-sm font-medium ${
        isHome && !scrolled ? "border-white text-white hover:bg-white/10" : "border-blue-500 text-blue-600 hover:bg-blue-50"
      }`}
    >
      <FaUserCircle className="text-lg" />
      Login / Sign up
      <FaChevronDown className="text-xs" />
    </button>
  )}

  {/* AFTER LOGIN */}
  {user && (
    <button
      onClick={() => setAccountOpen(!accountOpen)}
      className={`flex items-center gap-2 px-4 py-2 border rounded-full transition text-sm font-medium ${
        isHome && !scrolled ? "border-white text-white hover:bg-white/10" : "border-blue-500 text-blue-600 hover:bg-blue-50"
      }`}
    >
      <FaUserCircle className="text-lg" />
      My Account
      <FaChevronDown className="text-xs" />
    </button>
  )}

          {accountOpen && user && (
  <>
    {/* Click outside */}
    <div
      className="fixed inset-0 z-40"
      onClick={() => setAccountOpen(false)}
    />

    {/* Dropdown */}
    <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl z-50 py-2">
      <ul className="text-sm text-blue-600 font-medium">

        <li
          onClick={() => { navigate("/profile"); setAccountOpen(false); }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
        >
          <FaUserCircle className="text-blue-600" />
          Profile
        </li>
        
        
        <li
          onClick={() => { navigate("/my-bookings"); setAccountOpen(false); }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
        >
          <MdSearch className="text-blue-600" />
          My Bookings
        </li>

        <li
          onClick={() => { navigate("/offers"); setAccountOpen(false); }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
        >
          <MdLocalOffer className="text-blue-600" />
          Offers
        </li>

        <li
          onClick={() => { navigate("/refer"); setAccountOpen(false); }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
        >
          <MdLocalOffer className="text-blue-600" />
          Refer & Earn
        </li>

        <li
          onClick={() => { navigate("/help"); setAccountOpen(false); }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
        >
          <MdHelp className="text-blue-600" />
          Help
        </li>

        <li
          onClick={() => { navigate("/cancel-ticket-help"); setAccountOpen(false); }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
        >
          <MdCancel className="text-blue-600" />
          Cancel Ticket
        </li>

        <li
          onClick={() => {
            logout();
            setAccountOpen(false);
          }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
        >
          <FaTimes className="text-blue-600" />
          Logout
        </li>

      </ul>
    </div>
  </>
)}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <button
        className={`md:hidden text-xl ${textColor}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-full right-0 w-full max-w-xs bg-white shadow-lg rounded-lg p-4 md:hidden z-50">
            <ul className="text-base text-blue-600 font-medium space-y-1">
              {!user && (
                <li className="border-b pb-2 mb-2">
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setMenuOpen(false);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer rounded-lg"
                  >
                    <FaUserCircle className="text-blue-600" />
                    Login / Sign up
                  </button>
                </li>
              )}
              {user && (
                <>
                  <li
                    onClick={() => { navigate("/profile"); setMenuOpen(false); }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer rounded-lg"
                  >
                    <FaUserCircle className="text-blue-600" />
                    Profile
                  </li>
                  <li
                    onClick={() => { navigate("/my-bookings"); setMenuOpen(false); }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer rounded-lg"
                  >
                    <MdSearch className="text-blue-600" />
                    My Bookings
                  </li>
                  <li
                    onClick={() => { navigate("/offers"); setMenuOpen(false); }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer rounded-lg"
                  >
                    <MdLocalOffer className="text-blue-600" />
                    Offers
                  </li>
                  <li
                    onClick={() => { navigate("/help"); setMenuOpen(false); }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer rounded-lg"
                  >
                    <MdHelp className="text-blue-600" />
                    Help
                  </li>
                  <li
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer rounded-lg border-t mt-2 pt-3"
                  >
                    <FaTimes className="text-blue-600" />
                    Logout
                  </li>
                </>
              )}
            </ul>
          </div>
        </>
      )}

      {/* Modals */}
      {isLoginOpen && (
        <Login onClose={() => setIsLoginOpen(false)} />
      )}

      <LanguageSelector
        isOpen={isLanguageOpen}
        onClose={() => setIsLanguageOpen(false)}
        onSelect={changeLanguage}
        selected={language}
      />

      {/* Floating Chat Popup */}
      {isChatOpen && (
        <div
          className={`fixed z-[60] bg-white shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col
          ${isChatFullScreen 
            ? "inset-4 md:inset-10 rounded-2xl" 
            : "bottom-24 right-6 w-[90vw] max-w-[380px] h-[500px] rounded-2xl"}`}
        >
          {/* Header */}
          <div className="bg-[#0070FF] text-white p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <img src={robo} alt="Support" className="w-6 h-6 object-contain" />
              <span className="font-semibold text-sm sm:text-base">Support Chat</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsChatFullScreen(!isChatFullScreen)}
                className="hover:text-gray-200 transition-colors p-1"
                title={isChatFullScreen ? "Minimize" : "Maximize"}
              >
                {isChatFullScreen ? <FaCompressAlt size={16} /> : <FaExpandAlt size={16} />}
              </button>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="hover:text-gray-200 transition-colors p-1"
              >
                <FaTimes size={18} />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <p className="text-center text-gray-600 mb-8 font-medium text-sm sm:text-base">
              Hi there! 👋 How can we help you today?
            </p>
            
            <div className={`grid gap-4 ${isChatFullScreen ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1"}`}>
              {helpCategories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setIsChatOpen(false);
                  }}
                  className="border-2 border-[#0070FF] text-[#0070FF] py-3 px-4 rounded-xl hover:bg-blue-50 transition font-medium text-sm text-center shadow-sm hover:shadow-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t bg-white text-center shrink-0">
            <p className="text-[10px] sm:text-xs text-gray-400">Powered by SasiBus Support</p>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#0070FF] text-white p-0 rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with Support"
      >
        <img src={robo} alt="Chat" className="w-16 h-16 object-contain" />
        <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </button>
    </nav>
  );
}