import { useState } from "react";

export default function Signup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Real-time validation function
  const validate = () => {
    let newErrors = {};

    // Name
    if (!name.trim()) newErrors.name = "Name is required";

    // Mobile number validation (10 digits only)
    if (!/^[0-9]{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Strong password validation
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } 
    else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain at least 1 uppercase letter";
    } 
    else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least 1 number";
    } 
    else if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password = "Password must contain 1 special character";
    }

    // Confirm password
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Registration Successful! Please Login.");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-3" onClick={onClose}>
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-[420px] relative" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 font-bold text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-red-600 text-center mb-5">
          Sign Up
        </h2>

        <div className="space-y-3">

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Mobile */}
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => {
                if (/^[0-9]*$/.test(e.target.value)) setMobile(e.target.value);
              }}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md mt-5 font-semibold transition"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
