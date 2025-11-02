import { useNavigate } from "react-router-dom";
import { FaMotorcycle, FaCar, FaTaxi } from "react-icons/fa";

const providerIcons = {
  Rapido: FaMotorcycle,
  Ola: FaCar,
  Uber: FaTaxi,
};

export default function RideCard({ ride, isCheapest = false }) {
  const navigate = useNavigate();
  const pickup = localStorage.getItem("pickup");
  const drop = localStorage.getItem("drop");
  const Icon = providerIcons[ride.provider] || FaCar;

  const handleBookClick = () => {
    if (!pickup || !drop) {
      return;
    }

    navigate("/booking", {
      state: {
        rideData: {
          provider: ride.provider,
          fare: ride.fare,
          time: ride.time,
          providerId: ride.providerId,
        },
        pickup,
        drop,
      },
    });
  };

  return (
    <div
      className={`card ${
        isCheapest
          ? "ring-4 ring-green-500 dark:ring-green-400 bg-green-50 dark:bg-green-900/20"
          : ""
      } transition-all duration-300 hover:shadow-xl hover:scale-105`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-4">
            <Icon className="text-primary-600 dark:text-primary-400 text-2xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {ride.provider}
              {isCheapest && (
                <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                  Best Price
                </span>
              )}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              <span className="font-semibold text-xl text-gray-900 dark:text-white">
                ₹{ride.fare}
              </span>
              <span className="mx-2">•</span>
              <span>ETA: {ride.time}</span>
            </p>
          </div>
        </div>

        <button
          onClick={handleBookClick}
          className="btn-primary px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
