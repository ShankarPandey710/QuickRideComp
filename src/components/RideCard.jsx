// import { useNavigate } from 'react-router-dom';

// export default function RideCard({ ride }) {

//   const navigate = useNavigate();

//   const handleBookClick = () => {
//     navigate('/booking', { state: { rideData: ride } });
//   };

//   return (
//     <div className="ride-card">
//       <div>
//         <h3>{ride.name}</h3>
//         <p>
//           Fare: ₹{ride.fare} | ETA: {ride.eta} min
//         </p>
//         <small>Capacity: {ride.capacity} persons</small>
//       </div>

//       <button className="book-btn" onClick={handleBookClick}>
//         Book
//       </button>
//     </div>
//   );
// }


import { useNavigate, useLocation } from "react-router-dom";

export default function RideCard({ ride }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pickup = localStorage.getItem("pickup"); // get from previous page
  const drop = localStorage.getItem("drop"); // get from previous page

  const handleBookClick = () => {
    if (!pickup || !drop) {
      alert("Pickup or drop location missing!");
      return;
    }

    // ✅ Pass pickup & drop to booking confirmation page
    navigate("/booking", {
      state: { rideData: ride, pickup, drop },
    });
  };

  return (
    <div className="ride-card">
      <div>
        <h3>{ride.name}</h3>
        <p>
          Fare: ₹{ride.fare} | ETA: {ride.eta} min
        </p>
        <small>Capacity: {ride.capacity} persons</small>
      </div>

      <button className="book-btn" onClick={handleBookClick}>
        Book
      </button>
    </div>
  );
}
