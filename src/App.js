
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteFocusManager from "./utils/RouteFocusManager";
import ErrorBoundary from "./components/ErrorBoundary";

// Performance: Lazy load pages to code-split the application.
// This reduces the initial bundle size.
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SearchResult = lazy(() => import("./pages/SearchResult"));
const SeatSelection = lazy(() => import("./pages/SeatSelection"));
const PassengerDetails = lazy(() => import("./pages/PassengerDetails"));
const BoardingDropping = lazy(() => import("./pages/BoardingDropping"));
const Offers = lazy(() => import("./pages/Offers"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const MyBookings = lazy(() => import("./pages/MyBookings"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const WalletHelpPage = lazy(() => import("./pages/WalletHelpPage"));
const OffersDiscountPage = lazy(() => import("./pages/OffersDiscountPage"));
const ReferralHelpPage = lazy(() => import("./pages/ReferralHelpPage"));
const PaymentsRefundPage = lazy(() => import("./pages/PaymentsRefundPage"));
const CancelTicketHelpPage = lazy(() => import("./pages/CancelTicketHelpPage"));
const ResellHelpPage = lazy(() => import("./pages/ResellHelpPage"));
const NeedHelpPage = lazy(() => import("./pages/NeedHelpPage"));
const OffersPage = lazy(() => import("./pages/OffersPage"));
const ReferralPage = lazy(() => import("./pages/ReferralPage"));

export default function App() {
  return (
    <BrowserRouter>
      {/* Accessibility: Manages focus on route changes for screen readers */}
      <RouteFocusManager />
      <Navbar />
      {/* Accessibility: Use a <main> tag for the primary content of the page */}
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/results"
              element={
                <ErrorBoundary>
                  <SearchResult />
                </ErrorBoundary>
              }
            />
            <Route path="/select-seats" element={<SeatSelection />} />
            <Route path="/boarding-dropping" element={<BoardingDropping />} />
            <Route path="/passenger-details" element={<PassengerDetails />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/wallet" element={<WalletHelpPage />} />
            <Route path="/offers-discounts" element={<OffersDiscountPage />} />
            <Route path="/referral-help" element={<ReferralHelpPage />} />
            <Route path="/payments-refund" element={<PaymentsRefundPage />} />
            <Route path="/cancel-ticket-help" element={<CancelTicketHelpPage />} />
            <Route path="/help" element={<NeedHelpPage />} />
            <Route path="/resell-help" element={<ResellHelpPage />} />
            <Route path="/refer" element={<ReferralPage />} />

            <Route path="/offerss" element={<OffersPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}
