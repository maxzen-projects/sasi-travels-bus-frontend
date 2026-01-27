
const image = require('../assets/617.jpg');

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">

        <div className="bg-white p-6 rounded-xl shadow">
          <img src={image} alt="Safe Travel" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold">Safe Travel</h3>
          <p className="text-gray-600 mt-2">Verified buses and operators.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <img src={image} alt="Live Tracking" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold">Live Tracking</h3>
          <p className="text-gray-600 mt-2">Track your bus in real time.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <img src={image} alt="Easy Booking" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold">Easy Booking</h3>
          <p className="text-gray-600 mt-2">Book seats instantly via WhatsApp.</p>
        </div>

      </div>
    </section>
  );
}
