import { useState, useEffect } from "react";
import { FaTimes, FaChevronDown, FaGoogle, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

export default function Login({ onClose }) {

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
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [otpError, setOtpError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const isMobileValid = /^[0-9]{10}$/.test(mobile);
  const isOtpValid = /^[0-9]{6}$/.test(otp);

  // Timer logic
  useEffect(() => {
    let interval;
    if (isResendDisabled && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [isResendDisabled, resendTimer]);

  const handleGenerateOtp = () => {
    setShowOtpInput(true);
    setIsResendDisabled(true);
    setResendTimer(30); // Start a 30-second timer
  };

  const handleResendOtp = () => {
    if (isResendDisabled) return;
    setIsResendDisabled(true);
    setResendTimer(30); // Restart the timer
  };

  const handleVerifyOtp = () => {
    // Mock OTP verification. In a real app, this would be an API call.
    if (otp === "123456") {
      setOtpError(""); // Clear any previous error
      login({ mobile });
      onClose();
      navigate("/");
    } else {
      setOtpError("Invalid OTP. Please try again.");
    }
  };

 return createPortal(
  <div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-3"
    onClick={onClose}
  >
    <div
      className="bg-white w-full max-w-[500px] rounded-2xl shadow-xl relative p-5 sm:p-6"
      onClick={(e) => e.stopPropagation()}
    >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full hover:bg-blue-100 z-10">
          <FaTimes />
        </button>

        {!showOtpInput ? (
          <>
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
            onChange={(e) => {
              const numericValue = e.target.value.replace(/[^0-9]/g, "");
              setMobile(numericValue);
            }}
            className="flex-1 px-3 py-2 sm:py-3 outline-none text-sm sm:text-base font-semibold"
            maxLength={10}
            inputMode="numeric"
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
          onClick={handleGenerateOtp}
          disabled={!isMobileValid || !captchaVerified}
          className={`w-full py-2.5 sm:py-3 rounded-full mt-4 font-semibold text-white text-sm sm:text-base
          ${
            isMobileValid && captchaVerified
              ? "bg-blue-600 hover:bg-blue-700"
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
          </>
        ) : (
          <>
            {/* Back Button */}
            <button 
              onClick={() => {
                setShowOtpInput(false);
                setOtpError(""); // Clear error on going back
              }} 
              className="absolute top-3 left-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200"
            >
              <FaArrowLeft />
            </button>

            <div className="mt-8">
              <h2 className="text-lg sm:text-2xl font-bold text-center">Verify OTP</h2>
              <p className="text-sm text-gray-600 text-center mt-2">
                OTP sent to <span className="font-semibold">{selectedCountry.code} {mobile}</span>
              </p>

              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");
                  setOtp(numericValue);
                  if (otpError) {
                    setOtpError("");
                  }
                }}
                className="w-full border rounded-lg px-4 py-3 mt-6 outline-none text-center text-lg tracking-widest focus:ring-2 focus:ring-blue-500 font-semibold"
                maxLength={6}
                inputMode="numeric"
              />
              {otpError && <p className="text-blue-500 text-xs mt-2 text-center">{otpError}</p>}

              <button
                onClick={handleVerifyOtp}
                disabled={!isOtpValid}
                className={`w-full py-3 rounded-full mt-6 font-semibold transition ${isOtpValid ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 cursor-not-allowed text-white'}`}
              >
                Verify OTP
              </button>

              <p
                onClick={handleResendOtp}
                className={`text-xs text-center mt-4 ${
                  isResendDisabled ? "text-gray-500" : "text-blue-600 cursor-pointer hover:text-blue-700"
                }`}
              >
                {isResendDisabled
                  ? `Resend OTP in ${resendTimer}s`
                  : "Resend OTP"}
              </p>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}