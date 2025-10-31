import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Hero from "./components/Hero";
import RideResults from "./components/Results";
import LoginModal from "./components/LoginModal";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import Contact from "./pages/Contact";
import ResultsPage from "./pages/ResultsPage";

import "./App.css";

function AppContent() {
  const [rides, setRides] = useState([]);
  const [sortOption, setSortOption] = useState("price");
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("email") || null);
  const [pickup, setPickup] = useState(localStorage.getItem("pickup") || "");
  const [drop, setDrop] = useState(localStorage.getItem("drop") || "");
  const [pendingRide, setPendingRide] = useState(null);

  const navigate = useNavigate();

  const handleSearch = async (pickupInput, dropInput) => {
    setPickup(pickupInput);
    setDrop(dropInput);

    try {
      const res = await axios.get("http://localhost:5000/api/rides", {
        params: { pickup: pickupInput, drop: dropInput, sort: sortOption },
      });

      const fetchedRides = res.data.rides || [];
      setRides(fetchedRides);
      navigate("/results");
    } catch (err) {
      console.error(err);
      alert("Failed to fetch rides from server");
      setRides([]);
    }
  };

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true);
    setCurrentUser(email);
    setShowModal(false);

    if (pendingRide) {
      navigate("/booking", { state: { rideData: pendingRide } });
      setPendingRide(null);
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
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
            <>
              <Hero
                sortOption={sortOption}
                setSortOption={setSortOption}
                onSearch={handleSearch}
              />
              {rides.length > 0 && (
                <RideResults rides={rides} pickup={pickup} drop={drop} />
              )}
            </>
          }
        />
        <Route
          path="/results"
          element={<ResultsPage rides={rides} pickup={pickup} drop={drop} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              isLoggedIn={isLoggedIn}
              onLoginRequest={(ride) => {
                setPendingRide(ride);
                setShowModal(true);
              }}
            />
          }
        />
        <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
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
