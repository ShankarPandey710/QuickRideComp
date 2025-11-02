import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Hero({ onSearch, loading }) {
  const [pickup, setPickup] = useState(localStorage.getItem("pickup") || "");
  const [drop, setDrop] = useState(localStorage.getItem("drop") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickup.trim() || !drop.trim()) {
      toast.error("Please enter both pickup and drop locations");
      return;
    }
    localStorage.setItem("pickup", pickup);
    localStorage.setItem("drop", drop);
    onSearch(pickup.trim(), drop.trim());
  };

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/map.jpg')" }}>
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            🚕 Compare Uber, Ola & Rapido Fares Instantly
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-600 dark:text-primary-400" />
              <input
                type="text"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="input-field pl-12"
                required
              />
            </div>
            
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600 dark:text-red-400" />
              <input
                type="text"
                placeholder="Drop Location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="input-field pl-12"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Comparing Fares...</span>
                </>
              ) : (
                "Compare Fare"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
