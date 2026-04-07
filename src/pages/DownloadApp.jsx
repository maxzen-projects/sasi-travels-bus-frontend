import downloadbg from "../assets/downloadbg.jpg";
import playstoreImg from "../assets/playstore.png";
import appstoreImg from "../assets/appstore.png";
import qrImg from "../assets/qr.jpg";

export default function DownloadApp() {
  return (
    <section
      className="relative py-16 sm:py-20"
      style={{
        backgroundImage: `url(${downloadbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 text-white text-center md:text-left">

          {/* LEFT */}
          <div className="space-y-4">

            <h2 className="text-2xl sm:text-4xl font-semibold">
              Grab 10% Off now
            </h2>

            <p className="text-sm sm:text-lg">
              Download App to unlock offer!
            </p>

            <button className="bg-white text-[#0070FF] px-6 py-2 rounded-md font-medium shadow-md">
              Use Code: FIND10
            </button>

          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center gap-6 text-center">

            <h3 className="text-lg sm:text-2xl font-medium">
              Download Find Bus App on
            </h3>

            {/* Google Play */}
            <div className="bg-white rounded-xl px-5 py-3 shadow-lg w-52 flex items-center gap-3">

              <img
                src={playstoreImg}
                alt="Google Play"
                className="h-8 sm:h-10"
              />

              <div className="text-black text-left">
                <p className="text-xs">Get it on</p>
                <p className="text-base sm:text-lg font-semibold">
                  Google Play
                </p>
              </div>

            </div>

            {/* App Store */}
            <div className="bg-white rounded-xl px-5 py-3 shadow-lg w-52 flex items-center gap-3">

              <img
                src={appstoreImg}
                alt="App Store"
                className="h-8 sm:h-10"
              />

              <div className="text-black text-left">
                <p className="text-xs">Download on</p>
                <p className="text-base sm:text-lg font-semibold">
                  App Store
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <div className="bg-white p-4 rounded-xl shadow-lg">

              <img
                src={qrImg}
                alt="QR Code"
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}