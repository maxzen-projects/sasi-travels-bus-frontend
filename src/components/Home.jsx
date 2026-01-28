// pages/Home.jsx
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import Features from "./Features";
import PopularRoutes from "./PopularRoutes";
import travelBg from "../assets/travel bg.webp";
// import Footer from "./Footer"; // The Footer.jsx file was not provided in the context.

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center">

  {/* Image */}
  <img
    src={travelBg}
    alt="Travel Banner"
    className="w-full h-[450px] object-cover"
  />

  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">
    <h1 className="text-4xl font-bold">Book Your Bus Tickets Easily</h1>
    <p className="mt-3 text-lg">Fast, Safe and Reliable Bus Booking</p>
  </div>

</section>



      <SearchForm />
      <Features />
      <PopularRoutes />
      
      {/* <Footer /> // Commented out because Footer.jsx was not provided. */}
    </div>
  );
}
