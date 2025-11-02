import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaMapMarkerAlt, FaRupeeSign, FaClock } from "react-icons/fa";

export default function BookingConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { rideData, pickup, drop, booking } = location.state || {};
  const pickupPoint = pickup || localStorage.getItem("pickup");
  const dropPoint = drop || localStorage.getItem("drop");

  if (!rideData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="card text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">No booking found</h2>
          <button onClick={() => navigate("/")} className="btn-primary">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full mb-6">
            <FaCheckCircle className="text-green-600 dark:text-green-400 text-6xl" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
        >
          Your Ride is Confirmed! 🎉
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="card mb-6"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {rideData.provider}
            </h3>
            {booking && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Booking ID: {booking._id}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400 mt-1 text-xl" />
              <div className="flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Route</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {pickupPoint}
                    </p>
                  </div>
                  <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-600 ml-1.5 h-8"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {dropPoint}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <FaRupeeSign className="text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fare</p>
                  <p className="font-bold text-xl text-gray-900 dark:text-white">
                    ₹{rideData.fare}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Time</p>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {rideData.time}
                  </p>
                </div>
              </div>
            </div>

            {booking && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Status: <span className="font-semibold text-green-600 dark:text-green-400">{booking.status}</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Confirmation email has been sent to your registered email address.
                </p>
              </div>
            )}
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="btn-primary flex-1 py-4 text-lg font-semibold"
          >
            Go Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/profile")}
            className="btn-secondary py-4 px-6"
          >
            View Profile
          </motion.button>
        </div>
      </div>
    </div>
  );
}
