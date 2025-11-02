import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaMapMarkerAlt, FaClock, FaRupeeSign } from "react-icons/fa";

export default function BookingPage({ isLoggedIn, onLoginRequest }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const ride = location.state?.rideData;
  const pickup = location.state?.pickup || localStorage.getItem("pickup");
  const drop = location.state?.drop || localStorage.getItem("drop");

  if (!isLoggedIn) {
    onLoginRequest(ride);
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="card text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Please login to book your ride 🚗</h2>
          <button onClick={() => navigate("/")} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!ride) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="card text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">No ride selected</h2>
          <button onClick={() => navigate("/")} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        {
          provider: ride.provider,
          fare: ride.fare,
          time: ride.time,
          pickup,
          drop,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Booking confirmed! Check your email for confirmation.");
      
      navigate("/booking-confirmation", {
        state: {
          rideData: ride,
          pickup,
          drop,
          booking: response.data.booking,
        },
      });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Booking Details
        </h2>

        <div className="card mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-4">
              <span className="text-3xl">🚕</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {ride.provider}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Ride Service</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Route</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {pickup} → {drop}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaRupeeSign className="text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fare</p>
                <p className="font-semibold text-gray-900 dark:text-white text-xl">
                  ₹{ride.fare}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Time</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {ride.time}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleConfirm}
            disabled={loading}
            className="btn-primary flex-1 py-4 text-lg font-bold disabled:opacity-50"
          >
            {loading ? "Confirming..." : "Confirm Booking"}
          </button>
          <button
            onClick={() => navigate(-1)}
            className="btn-secondary px-6 py-4"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
