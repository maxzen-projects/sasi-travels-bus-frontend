import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/context/LanguageContext";
import { AuthProvider } from "./components/context/AuthContext";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import SeatSelection from "./pages/SeatSelection";
import BoardingDropping from "./pages/BoardingDropping";
import PassengerDetails from "./pages/PassengerDetails";
import PaymentPage from "./pages/PaymentPage";
import MyBookings from "./pages/MyBookings";
import ProfilePage from "./pages/ProfilePage";
import NeedHelpPage from "./pages/NeedHelpPage";
import FAQPage from "./pages/FAQPage";
import CancelTicketHelpPage from "./pages/CancelTicketHelpPage";
import OffersDiscountPage from "./pages/OffersDiscountPage";
import PaymentsRefundPage from "./pages/PaymentsRefundPage";
import ReferralHelpPage from "./pages/ReferralHelpPage";
import ResellHelpPage from "./pages/ResellHelpPage";
import OffersPage from "./pages/OffersPage";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<SearchResult />} />
            <Route path="/select-seats" element={<SeatSelection />} />
            <Route path="/boarding-dropping" element={<BoardingDropping />} />
            <Route path="/passenger-details" element={<PassengerDetails />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/help" element={<NeedHelpPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/cancel-ticket-help" element={<CancelTicketHelpPage />} />
            <Route path="/offers-discounts" element={<OffersDiscountPage />} />
            <Route path="/payments-refund" element={<PaymentsRefundPage />} />
            <Route path="/referral-help" element={<ReferralHelpPage />} />
            <Route path="/resell-help" element={<ResellHelpPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other help page routes from NeedHelpPage.jsx if they have their own components */}
            {/* e.g. <Route path="/wallet" element={<WalletHelpPage />} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}