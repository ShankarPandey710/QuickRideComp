// import { useLocation, useNavigate } from "react-router-dom";
// import "./BookingPage.css";

// export default function BookingPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const ride = location.state?.rideData; 

//   if (!ride) {
//     return (
//       <div className="booking-page">
//         <h2>No ride selected</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       <div className="ride-details">
//         <h3>{ride.name}</h3>
//         <p>
//           <strong>Route:</strong> {ride.route || "Pickup → Drop"} <br />
//           <strong>Fare:</strong> ₹{ride.fare} <br />
//           <strong>ETA:</strong> {ride.eta} minutes <br />
//           <strong>Capacity:</strong> {ride.capacity} persons
//         </p>
//       </div>

//       <button
//         className="confirm-btn"
//         onClick={() => alert(`Your ${ride.name} ride is booked!`)}
//       >
//         Confirm Booking
//       </button>

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Go Back
//       </button>
//     </div>
//   );
// }


// import { useLocation, useNavigate } from "react-router-dom";
// import "./BookingPage.css";

// export default function BookingPage({ isLoggedIn, onLoginRequest }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const ride = location.state?.rideData; 

//   // ✅ Check if user is logged in
//   if (!isLoggedIn) {
//     onLoginRequest();
//     return (
//       <div className="booking-page">
//         <h2>Please login to book your ride 🚗</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   if (!ride) {
//     return (
//       <div className="booking-page">
//         <h2>No ride selected</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       <div className="ride-details">
//         <h3>{ride.name}</h3>
//         <p>
//           <strong>Route:</strong> {ride.route || "Pickup → Drop"} <br />
//           <strong>Fare:</strong> ₹{ride.fare} <br />
//           <strong>ETA:</strong> {ride.eta} minutes <br />
//           <strong>Capacity:</strong> {ride.capacity} persons
//         </p>
//       </div>

//       <button
//         className="confirm-btn"
//         onClick={() => alert(`Your ${ride.name} ride is booked!`)}
//       >
//         Confirm Booking
//       </button>

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Go Back
//       </button>
//     </div>
//   );
// }



// import { useLocation, useNavigate } from "react-router-dom";
// import "./BookingPage.css";

// export default function BookingPage({ isLoggedIn, onLoginRequest }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const ride = location.state?.rideData; 

//   if (!isLoggedIn) {
//     onLoginRequest(ride);
//     return (
//       <div className="booking-page">
//         <h2>Please login to book your ride 🚗</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   if (!ride) {
//     return (
//       <div className="booking-page">
//         <h2>No ride selected</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       <div className="ride-details">
//         <h3>{ride.name}</h3>
//         <p>
//           <strong>Route:</strong> {ride.route || "Pickup → Drop"} <br />
//           <strong>Fare:</strong> ₹{ride.fare} <br />
//           <strong>ETA:</strong> {ride.eta} minutes <br />
//           <strong>Capacity:</strong> {ride.capacity} persons
//         </p>
//       </div>

//       <button
//         className="confirm-btn"
//         onClick={() => alert(`Your ${ride.name} ride is booked!`)}
//       >
//         Confirm Booking
//       </button>

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Go Back
//       </button>
//     </div>
//   );
// }



// import { useLocation, useNavigate } from "react-router-dom";
// import "./BookingPage.css";

// export default function BookingPage({ isLoggedIn, onLoginRequest }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const ride = location.state?.rideData; 

//   if (!isLoggedIn) {
//     onLoginRequest(ride);
//     return (
//       <div className="booking-page">
//         <h2>Please login to book your ride 🚗</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   if (!ride) {
//     return (
//       <div className="booking-page">
//         <h2>No ride selected</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   const handleConfirm = () => {
//     // simulate rider contact
//     const updatedRide = {
//       ...ride,
//       contact: "+91-9876543210",
//     };

//     // Navigate to confirmation page
//     navigate("/booking-confirmation", {
//       state: {
//         ride: updatedRide,
//         pickup: ride.pickup || "Your Pickup",
//         drop: ride.drop || "Your Drop",
//       },
//     });
//   };

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       <div className="ride-details">
//         <h3>{ride.name}</h3>
//         <p>
//           <strong>Route:</strong> {ride.route || "Pickup → Drop"} <br />
//           <strong>Fare:</strong> ₹{ride.fare} <br />
//           <strong>ETA:</strong> {ride.eta} minutes <br />
//           <strong>Capacity:</strong> {ride.capacity} persons
//         </p>
//       </div>

//       <button className="confirm-btn" onClick={handleConfirm}>
//         Confirm Booking
//       </button>

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Go Back
//       </button>
//     </div>
//   );
// }


// import { useLocation, useNavigate } from "react-router-dom";
// import "./BookingPage.css";

// export default function BookingPage({ isLoggedIn, onLoginRequest }) {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const ride = location.state?.rideData;
//   const pickup = location.state?.pickup;
//   const drop = location.state?.drop;

//   // ✅ If user not logged in, trigger login and save ride for later
//   if (!isLoggedIn) {
//     onLoginRequest(ride);
//     return (
//       <div className="booking-page">
//         <h2>Please login to book your ride 🚗</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   if (!ride) {
//     return (
//       <div className="booking-page">
//         <h2>No ride selected</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       <div className="ride-details">
//         <h3>{ride.name}</h3>
//         <p>
//           <strong>Route:</strong> {pickup} → {drop} <br />
//           <strong>Fare:</strong> ₹{ride.fare} <br />
//           <strong>ETA:</strong> {ride.eta} minutes <br />
//           <strong>Capacity:</strong> {ride.capacity} persons
//         </p>
//       </div>

//       {/* ✅ Confirm Booking — navigate to confirmation page */}
//       <button
//         className="confirm-btn"
//         onClick={() =>
//           navigate("/booking-confirmation", {
//             state: { rideData: ride, pickup, drop },
//           })
//         }
//       >
//         Confirm Booking
//       </button>

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Go Back
//       </button>
//     </div>
//   );
// }


// import { useLocation, useNavigate } from "react-router-dom";
// import "./BookingPage.css";
// const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

// export default function BookingPage({ isLoggedIn, onLoginRequest }) {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const ride = location.state?.rideData;
//   const pickup = location.state?.pickup || localStorage.getItem('pickup');
//   const drop = location.state?.drop || localStorage.getItem('drop');

//   // If user not logged in, trigger login and save ride for later
//   if (!isLoggedIn) {
//     onLoginRequest(ride);
//     return (
//       <div className="booking-page">
//         <h2>Please login to book your ride 🚗</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   if (!ride) {
//     return (
//       <div className="booking-page">
//         <h2>No ride selected</h2>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     );
//   }

//   const handleConfirm = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Login expired. Please login again.');
//       onLoginRequest(ride);
//       return;
//     }

//     try {
//       const body = {
//         rideName: ride.name,
//         brand: ride.brand,
//         fare: ride.fare,
//         eta: ride.eta,
//         capacity: ride.capacity,
//         pickup,
//         drop
//       };

//       const res = await fetch(`${API_BASE}/api/bookings`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(body)
//       });

//       const data = await res.json();
//       if (!res.ok) {
//         alert(data.message || 'Booking failed');
//         return;
//       }

//       // navigate to confirmation with booking data
//       navigate('/booking-confirmation', {
//         state: { rideData: ride, pickup, drop, booking: data.booking }
//       });

//     } catch (err) {
//       console.error(err);
//       alert('Network error while booking');
//     }
//   };

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       <div className="ride-details">
//         <h3>{ride.name}</h3>
//         <p>
//           <strong>Route:</strong> {pickup} → {drop} <br />
//           <strong>Fare:</strong> ₹{ride.fare} <br />
//           <strong>ETA:</strong> {ride.eta} minutes <br />
//           <strong>Capacity:</strong> {ride.capacity} persons
//         </p>
//       </div>

//       <button className="confirm-btn" onClick={handleConfirm}>
//         Confirm Booking
//       </button>

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Go Back
//       </button>
//     </div>
//   );
// }


import { useLocation, useNavigate } from "react-router-dom";
import "./BookingPage.css";
import axios from "axios";

export default function BookingPage({ isLoggedIn, onLoginRequest }) {
  const location = useLocation();
  const navigate = useNavigate();

  const ride = location.state?.rideData;
  const pickup = location.state?.pickup || localStorage.getItem("pickup");
  const drop = location.state?.drop || localStorage.getItem("drop");

  // If user not logged in, trigger login and save ride for later
  if (!isLoggedIn) {
    onLoginRequest(ride);
    return (
      <div className="booking-page">
        <h2>Please login to book your ride 🚗</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  if (!ride) {
    return (
      <div className="booking-page">
        <h2>No ride selected</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        { rideId: ride._id, pickup, drop },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const booking = res.data.booking;
      // go to confirmation with booking info and ride details
      navigate("/booking-confirmation", {
        state: { rideData: ride, pickup, drop, booking }
      });
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.message || "Booking failed";
      alert(msg);
    }
  };

  return (
    <div className="booking-page">
      <h2>Booking Details</h2>

      <div className="ride-details">
        <h3>{ride.name}</h3>
        <p>
          <strong>Route:</strong> {pickup} → {drop} <br />
          <strong>Fare:</strong> ₹{ride.fare} <br />
          <strong>ETA:</strong> {ride.eta} minutes <br />
          <strong>Capacity:</strong> {ride.capacity} persons
        </p>
      </div>

      <button className="confirm-btn" onClick={handleConfirm}>
        Confirm Booking
      </button>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Go Back
      </button>
    </div>
  );
}
