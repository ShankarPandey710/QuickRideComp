import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RideResults from "./components/Results";
import LoginModal from "./components/LoginModal";
import About from "./pages/About";
import Contact from "./pages/Contact";
// --- NEW --- Import the new BookingPage component
import BookingPage from "./pages/BookingPage";
import RoutesData from "./components/RoutesData";
import "./App.css";

function AppContent() {
  const [rides, setRides] = useState([]);
  const [sortOption, setSortOption] = useState("price");
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (pickup, drop) => {
    const routeKey = `${pickup.toLowerCase()}-${drop.toLowerCase()}`;
    let generated = RoutesData[routeKey] || [];
    if (sortOption === "price") {
      generated.sort((a, b) => a.fare - b.fare);
    } else {
      generated.sort((a, b) => a.eta - b.eta);
    }
    setRides(generated);
  };

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true);
    setCurrentUser(email);
    setShowModal(false);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        userEmail={currentUser}
        onLoginClick={() => setShowModal(true)}
        onLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero
                sortOption={sortOption}
                setSortOption={setSortOption}
                onSearch={handleSearch}
              />
              {rides.length > 0 && <RideResults rides={rides} />}
            </div>
          }
        />
        {/* --- NEW --- Add the route for the booking page */}
        <Route path="/booking" element={<BookingPage />} />

        {!isLoggedIn && (
          <>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </>
        )}
      </Routes>
      {showModal && (
        <LoginModal
          onClose={() => setShowModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}