import bus from "../assets/bus.png";

export default function Preloader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-[#0f172a]">
      
      {/* Loader Bar */}
      <div className="loader-bar h-6 mb-4">
        <img src={bus} className="bus-progress" alt="bus" />
      </div>

      {/* Loading Text */}
      <p className="text-white text-lg font-semibold animate-pulse">
        Loading buses...
      </p>

    </div>
  );
}
