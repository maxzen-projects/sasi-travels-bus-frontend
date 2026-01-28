import { useState } from "react";
import { FaTimes, FaChevronDown, FaGoogle, FaCheckCircle } from "react-icons/fa";

export default function Login({ isOpen, onClose }) {

  const countryCodes = [
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+1", name: "USA", flag: "🇺🇸" },
    { code: "+44", name: "UK", flag: "🇬🇧" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
    { code: "+971", name: "UAE", flag: "🇦🇪" },
    { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  ];

  const [mobile, setMobile] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const isMobileValid = /^[0-9]{10}$/.test(mobile);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-3" onClick={onClose}>

      <div className="bg-white w-full max-w-[500px] rounded-2xl shadow-xl relative p-5 sm:p-6" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full hover:bg-red-100">
          <FaTimes />
        </button>

        <p className="text-xs sm:text-sm text-gray-600">Login to get exciting offers</p>
        <h2 className="text-lg sm:text-2xl font-bold mt-2">What's your mobile number?</h2>

        {/* Mobile Input */}
        <div className="flex border rounded-lg mt-4 relative flex-col sm:flex-row">

          {/* Country Dropdown */}
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer border-b sm:border-b-0 sm:border-r"
          >
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="font-semibold">{selectedCountry.code}</span>
            <FaChevronDown className="text-xs" />
          </div>

          {/* Dropdown List */}
          {dropdownOpen && (
            <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-md w-full sm:w-64 h-40 overflow-y-auto z-50">
              {countryCodes.map((c, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCountry(c);
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  <span className="text-lg">{c.flag}</span>
                  <span>{c.name}</span>
                  <span className="ml-auto font-semibold">{c.code}</span>
                </div>
              ))}
            </div>
          )}

          <input
            type="text"
            placeholder="Mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="flex-1 px-3 py-2 sm:py-3 outline-none text-sm sm:text-base"
          />
        </div>

        {/* DEMO CAPTCHA */}
        <div
          onClick={() => setCaptchaVerified(!captchaVerified)}
          className={`mt-4 border rounded-lg p-3 flex items-center gap-3 cursor-pointer ${
            captchaVerified ? "border-green-500 bg-green-50" : ""
          }`}
        >
          {captchaVerified ? (
            <FaCheckCircle className="text-green-600 text-xl" />
          ) : (
            <div className="w-5 h-5 border rounded"></div>
          )}
          <span className="text-sm">I'm not a robot</span>
          <span className="ml-auto text-xs text-gray-500">reCAPTCHA</span>
        </div>

        {/* Generate OTP */}
        <button
          disabled={!isMobileValid || !captchaVerified}
          className={`w-full py-2.5 sm:py-3 rounded-full mt-4 font-semibold text-white text-sm sm:text-base
          ${
            isMobileValid && captchaVerified
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Generate OTP
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-gray-400 text-xs sm:text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="flex items-center justify-center gap-2 border rounded-lg py-2.5 w-full hover:bg-gray-50 text-sm sm:text-base">
          <FaGoogle className="text-blue-500 text-lg" />
          <span className="font-medium">Sign in with Google</span>
        </button>

        <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-3">
          By logging in, I agree to{" "}
          <span className="text-blue-600 cursor-pointer">Terms & Conditions</span> &{" "}
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
