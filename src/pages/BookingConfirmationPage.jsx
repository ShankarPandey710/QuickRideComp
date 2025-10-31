import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./BookingConfirmationPage.css";

export default function BookingConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCancelled, setIsCancelled] = useState(false); 

  const { rideData, pickup, drop } = location.state || {};
  const pickupPoint = pickup || localStorage.getItem("pickup");
  const dropPoint = drop || localStorage.getItem("drop");

  const arrivalTime = Math.floor(Math.random() * 10) + 2;

  if (!rideData) {
    return (
      <div className="booking-confirmation">
        <h2>No booking found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  const handleCancel = () => {
    setIsCancelled(true);
  };

  return (
    <div className="booking-confirmation">
      {!isCancelled ? (
        <>
          <motion.div
            className="confirmation-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            ✅
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Your Ride is Confirmed!
          </motion.h2>

          <motion.div
            className="confirmation-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>
              🚕 <strong>{rideData.name}</strong> is booked from{" "}
              <strong>{pickupPoint}</strong> to <strong>{dropPoint}</strong>.
            </p>

            <div className="route-visual">
              <span className="dot pickup-dot"></span>
              <motion.div
                className="route-line"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2 }}
              ></motion.div>
              <span className="dot drop-dot"></span>
            </div>

            <p>
              ⏱ <strong>Arrival Time:</strong> {arrivalTime} minutes
            </p>
            <p>
              📞 <strong>Rider Contact:</strong>{" "}
              <a href="tel:+919876543210">+91-6207977604</a>
            </p>
          </motion.div>

          <motion.button
            className="cancel-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCancel}
          >
            Cancel Ride
          </motion.button>

          <motion.button
            className="go-home-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
          >
            Go Home
          </motion.button>
        </>
      ) : (
        <>
          <motion.div
            className="cancelled-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ❌ <h2>Your Ride Has Been Cancelled</h2>
          </motion.div>

          <motion.button
            className="go-home-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
          >
            Go Home
          </motion.button>
        </>
      )}
    </div>
  );
}

