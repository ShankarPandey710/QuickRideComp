import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import RideResults from "./components/Results";
import LoginModal from "./components/LoginModal";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import Contact from "./pages/Contact";
import ResultsPage from "./pages/ResultsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import "./App.css";

function AppContent() {
  const [rides, setRides] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userEmail, setUserEmail] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).email : null;
  });
  const [pickup, setPickup] = useState(localStorage.getItem("pickup") || "");
  const [drop, setDrop] = useState(localStorage.getItem("drop") || "");
  const [pendingRide, setPendingRide] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setIsLoggedIn(true);
      setUserEmail(JSON.parse(user).email);
    }
  }, []);

  const handleSearch = async (pickupInput, dropInput) => {
    setPickup(pickupInput);
    setDrop(dropInput);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/compare", {
        pickup: pickupInput,
        drop: dropInput,
      });

      const fetchedRides = res.data.rides || [];
      setRides(fetchedRides);
      navigate("/results", {
        state: {
          rides: fetchedRides,
          pickup: pickupInput,
          drop: dropInput,
          loading: false,
        },
      });
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to fetch ride comparisons. Please try again.");
      setRides([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUserEmail(userData.email);
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
    setUserEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLoginClick={() => setShowModal(true)}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero onSearch={handleSearch} loading={loading} />
              {rides.length > 0 && (
                <RideResults rides={rides} pickup={pickup} drop={drop} loading={loading} />
              )}
            </>
          }
        />
        <Route path="/results" element={<ResultsPage />} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {showModal && (
        <LoginModal
          onClose={() => setShowModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
