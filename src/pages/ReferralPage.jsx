import { Copy, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import refer from "../assets/Refer.jpeg";

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralCode = "sag35edmu54n";
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center p-4 sm:p-6">
      <div className="bg-white w-full max-w-4xl mt-16 rounded-2xl shadow-md p-5 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 text-gray-600 mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="font-semibold text-lg">Referrals</span>
        </div>

        {/* Title */}
        <h2 className="text-center text-blue-600 font-bold text-xl sm:text-2xl mb-8 leading-tight">
          Share Sasi Bus with your friends and enjoy rewards together!
        </h2>

        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <img
            src= {refer}
            alt="referral"
            className="w-full max-w-[280px] sm:max-w-xs object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base max-w-md mx-auto">
          Invite your friends using your referral code and both of you get a discount.
        </p>

        {/* Referral Code Box */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-col sm:flex-row items-center border border-blue-200 bg-blue-50/50 rounded-xl px-6 py-3 gap-4 w-full sm:w-auto">
            <span className="text-gray-700 font-medium">
              Referral code: <strong className="text-blue-700">{referralCode}</strong>
            </span>
            <div className="h-px w-full sm:h-6 sm:w-px bg-blue-200 hidden sm:block"></div>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 font-semibold transition-colors ${copied ? "text-green-600" : "text-blue-600 hover:text-blue-800"}`}
            >
              <Copy size={16} />
              {copied ? "Copied!" : "Copy code"}
            </button>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-8 max-w-2xl mx-auto">
          <h3 className="font-bold text-gray-800 text-lg mb-6">How it works</h3>

          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shrink-0">
                Step 1
              </span>
              <div>
                <p className="font-bold text-gray-800">Share your code</p>
                <p className="text-sm text-gray-500">
                  Send your personal referral code to your friend
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shrink-0">
                Step 2
              </span>
              <div>
                <p className="font-bold text-gray-800">Your friend signs up</p>
                <p className="text-sm text-gray-500">
                  Friend enters the code while signing up
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shrink-0">
                Step 3
              </span>
              <div>
                <p className="font-bold text-gray-800">Get Rewarded</p>
                <p className="text-sm text-gray-500">
                  You both receive Rewards or Discounts
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center sm:justify-end border-t pt-6">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-3 rounded-xl font-bold hover:bg-blue-700 transition active:scale-95 shadow-sm hover:shadow-md">
            Refer Now
          </button>
        </div>

      </div>
    </div>
  );
}