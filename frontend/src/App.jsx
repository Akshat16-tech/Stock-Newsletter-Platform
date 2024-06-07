import React, { useState } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Markets from "./components/Markets/Markets";
import Navigation from './components/Navigation/Navigation';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import StockDetails from "./components/StockDetails/StockDetails";
import NotFound from "./components/NotFound/NotFound";
import Auth from "./components/Auth/Auth";
import PurchasedStocks from "./components/PurchasedStocks/PurchasedStocks";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import PurchasedStockDetails from "./components/PurchasedStockDetails/PurchasedStockDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Guide from "./components/Guide/Guide";
import Careers from "./components/Careers/Careers";
import { Route, Routes, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

const App = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const isAuthenticated = user ? true : false; // Replace with your authentication logic

  return (
    <div className="font-inter">
      <ScrollToTop>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/stock/:id" element={<StockDetails />} />
          <Route path="/dashboard" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/purchased" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <PurchasedStocks />
            </ProtectedRoute>
          } />
          <Route path="/purchased/:id" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <PurchasedStockDetails />
            </ProtectedRoute>
          } />
          <Route path="/transaction/:id" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <TransactionForm />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;