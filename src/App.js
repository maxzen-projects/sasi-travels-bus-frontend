
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteFocusManager from "./utils/RouteFocusManager";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer"
import { ROUTES } from "./constants/routes";
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
const FAQSPage = lazy(() => import("./pages/FAQSSPage"));
const Contact = lazy(() => import("./pages/Contact"));


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
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route
              path={ROUTES.RESULTS}
              element={
                <ErrorBoundary>
                  <SearchResult />
                </ErrorBoundary>
              }
            />
            <Route path={ROUTES.SEAT} element={<SeatSelection />} />
            <Route path={ROUTES.BOARDING_DROPPING} element={<BoardingDropping />} />
            <Route path={ROUTES.PASSENGER_DETAILS} element={<PassengerDetails />} />
            <Route path={ROUTES.PAYMENT} element={<PaymentPage />} />
            <Route path={ROUTES.OFFERS} element={<Offers />} />
            <Route path={ROUTES.MY_BOOKINGS} element={<MyBookings />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTES.FAQS} element={<FAQPage />} />
            <Route path="/wallet" element={<WalletHelpPage />} />
            <Route path="/offers-discounts" element={<OffersDiscountPage />} />
            <Route path="/referral-help" element={<ReferralHelpPage />} />
            <Route path="/payments-refund" element={<PaymentsRefundPage />} />
            <Route path="/cancel-ticket-help" element={<CancelTicketHelpPage />} />
            <Route path="/help" element={<NeedHelpPage />} />
            <Route path="/resell-help" element={<ResellHelpPage />} />
            <Route path="/refer" element={<ReferralPage />} />
            <Route path="/faqspage" element={<FAQSPage />} />
            <Route path="/offerss" element={<OffersPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
          </Routes>
        </Suspense>
        
      </main>
      <Footer/>
    </BrowserRouter>
  );
}
