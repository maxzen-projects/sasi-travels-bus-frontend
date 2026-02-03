import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { MdLocalOffer, MdHelp, MdCancel, MdSearch, MdLanguage, MdNotifications } from "react-icons/md";
import Login from "./Login";
import Signup from "./Signup";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "./context/LanguageContext";
import { useAuth } from "./context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm px-4 md:px-16 py-3 flex items-center justify-between relative">

      {/* Logo */}
      <div className="flex items-center gap-8">
        <div className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
          BusGo
        </div>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-red-600">{t("thingsToDo")}</li>
          <li className="cursor-pointer hover:text-red-600">{t("help")}</li>
        </ul>
      </div>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">

        {/* Country Flag */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://flagcdn.com/w20/in.png"
            alt="India"
            className="w-5 h-4 rounded-sm"
          />
          <FaChevronDown className="text-xs" />
        </div>

        {/* Currency */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span>INR</span>
          <FaChevronDown className="text-xs" />
        </div>

        {/* Account Icon */}
        <div className="relative">
          <FaUserCircle
            className="text-2xl cursor-pointer hover:text-red-600"
            onClick={() => setAccountOpen(!accountOpen)}
          />

          {/* Overlay to close dropdown */}
          {accountOpen && (
            <div className="fixed inset-0 z-40" onClick={() => setAccountOpen(false)}></div>
          )}

          {/* Dropdown Menu */}
          {accountOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white shadow-xl rounded-lg border z-50">

              {/* Login & Signup */}
              <div className="p-3 border-b">
                {!user ? (
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setAccountOpen(false);
                    }}
                    className="w-full bg-red-600 text-white py-2 rounded-md mb-2"
                  >
                    {t("loginSignup")}
                  </button>
                ) : (
                  <div className="text-center">
                    <p className="font-bold text-gray-800 mb-2">Hi, {user?.name || user?.mobile || user?.sub?.split('@')[0]}</p>
                    <button
                      onClick={() => {
                        logout();
                        setAccountOpen(false);
                      }}
                      className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50"
                    >
                      {t("logout")}
                    </button>
                  </div>
                )}

                {/* <button
                  onClick={() => {
                    setIsSignupOpen(true);
                    setAccountOpen(false);
                  }}
                  className="w-full border py-2 rounded-md hover:bg-gray-100"
                >
                  Sign Up
                </button> */}
              </div>

              {/* Menu Items */}
              <ul className="text-sm text-gray-700">
                <li className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
                  <MdLocalOffer /> Offers
                </li>
                <li className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
                  <MdHelp /> Help
                </li>
                <li className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
                  <MdCancel /> Cancel Ticket
                </li>
                <li className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
                  <MdSearch /> Search Ticket
                </li>
                <li
                  className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setIsLanguageOpen(true);
                    setAccountOpen(false);
                  }}
                >
                  <MdLanguage /> Language ({language.name})
                </li>
                <li className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
                  <MdNotifications /> Notifications
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
        <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)}></div>
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>Things to Do</li>
            <li>Help</li>
            <li>Manage Booking</li>
          </ul>

          <button
            onClick={() => setIsLoginOpen(true)}
            className="mt-4 border px-4 py-2 rounded-md w-full"
          >
            Login
          </button>
        </div>
        </>
      )}

      {/* Login Modal */}
      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
      {isSignupOpen && <Signup onClose={() => setIsSignupOpen(false)} />}

      <LanguageSelector
        isOpen={isLanguageOpen}
        onClose={() => setIsLanguageOpen(false)}
        onSelect={changeLanguage}
        selected={language}
      />
    </nav>
  );
}
