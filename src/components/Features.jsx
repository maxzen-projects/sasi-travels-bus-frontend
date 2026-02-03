import { useLanguage } from "./context/LanguageContext";

const image = require('../assets/617.jpg');

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">

        <div className="bg-white p-6 rounded-xl shadow">
          <img src={image} alt="Safe Travel" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold">{t("safeTravel")}</h3>
          <p className="text-gray-600 mt-2">{t("verifiedBuses")}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <img src={image} alt="Live Tracking" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold">{t("liveTracking")}</h3>
          <p className="text-gray-600 mt-2">{t("trackBusRealTime")}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <img src={image} alt="Easy Booking" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold">{t("easyBooking")}</h3>
          <p className="text-gray-600 mt-2">{t("bookSeatsWhatsApp")}</p>
        </div>

      </div>
    </section>
  );
}
