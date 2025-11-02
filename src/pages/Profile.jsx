import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPlus, FaTrash, FaArrowLeft } from 'react-icons/fa';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [savedLocations, setSavedLocations] = useState([]);
  const [newLocation, setNewLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login to view profile');
      navigate('/login');
      return;
    }

    fetchUserData();
    fetchBookings();
  }, []);

  const fetchUserData = async () => {
    try {
      const userData = localStorage.getItem('user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        // In a real app, you'd fetch saved locations from the backend
        setSavedLocations([]);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/bookings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(response.data.bookings || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast.error('Failed to load bookings');
    }
  };

  const handleAddLocation = () => {
    if (!newLocation.trim()) {
      toast.error('Please enter a location');
      return;
    }

    if (savedLocations.includes(newLocation.trim())) {
      toast.error('Location already saved');
      return;
    }

    setSavedLocations([...savedLocations, newLocation.trim()]);
    setNewLocation('');
    toast.success('Location saved');
    // In a real app, you'd save this to the backend
  };

  const handleDeleteLocation = (location) => {
    setSavedLocations(savedLocations.filter((loc) => loc !== location));
    toast.success('Location deleted');
    // In a real app, you'd delete this from the backend
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-6">
          {/* User Info Card */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-4 mr-4">
                <FaUser className="text-primary-600 dark:text-primary-400 text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Profile</h2>
                <p className="text-gray-600 dark:text-gray-400">Your account information</p>
              </div>
            </div>

            {user && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Name
                  </label>
                  <p className="text-lg font-semibold flex items-center">
                    <FaUser className="mr-2 text-primary-600 dark:text-primary-400" />
                    {user.name}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Email
                  </label>
                  <p className="text-lg font-semibold flex items-center">
                    <FaEnvelope className="mr-2 text-primary-600 dark:text-primary-400" />
                    {user.email}
                  </p>
                </div>

                <button
                  onClick={handleLogout}
                  className="btn-secondary w-full mt-6"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Saved Locations Card */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-primary-600 dark:text-primary-400" />
              Saved Locations
            </h3>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddLocation()}
                className="input-field flex-1"
                placeholder="Add a location"
              />
              <button
                onClick={handleAddLocation}
                className="btn-primary px-4"
              >
                <FaPlus />
              </button>
            </div>

            <div className="space-y-2">
              {savedLocations.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                  No saved locations yet
                </p>
              ) : (
                savedLocations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                  >
                    <span className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-primary-600 dark:text-primary-400" />
                      {location}
                    </span>
                    <button
                      onClick={() => handleDeleteLocation(location)}
                      className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bookings Section */}
        <div className="card mt-6">
          <h3 className="text-xl font-bold mb-4">Past Bookings</h3>
          {bookings.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No bookings yet. Book your first ride!
            </p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg">{booking.provider}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        <FaMapMarkerAlt className="inline mr-1" />
                        {booking.pickup} → {booking.drop}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        ₹{booking.fare} • {booking.time} • {new Date(booking.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

