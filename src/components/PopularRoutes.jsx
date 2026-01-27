// components/PopularRoutes.jsx
export default function PopularRoutes() {
  const routes = [
    "Hyderabad → Bangalore",
    "Chennai → Vizag",
    "Delhi → Jaipur",
    "Mumbai → Pune",
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Popular Routes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {routes.map((route) => (
          <div key={route} className="border p-4 rounded-lg shadow hover:shadow-lg">
            {route}
          </div>
        ))}
      </div>
    </section>
  );
}
