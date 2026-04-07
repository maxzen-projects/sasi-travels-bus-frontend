import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaCommentDots,
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
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { language, changeLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

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

  const textColor = isHome && !scrolled ? "text-black" : "text-gray-700";
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
          className="w-10 h-10 object-cover"
        />
        <div className="font-bold text-xl text-blue-600">
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
      className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition text-sm font-medium"
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
      className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition text-sm font-medium"
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
          onClick={() => { navigate("/referral-help"); setAccountOpen(false); }}
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

      {/* Floating Chat Button */}
      <button
        onClick={() => navigate("/help")}
        className="fixed bottom-6 right-6 z-50 bg-[#0070FF] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with Support"
      >
        <FaCommentDots size={24} />
        <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </button>
    </nav>
  );
}