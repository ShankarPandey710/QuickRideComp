// import { useState } from "react";

// export default function Hero({ sortOption, setSortOption, onSearch }) {
//   const [pickup, setPickup] = useState("");
//   const [drop, setDrop] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!pickup || !drop) {
//       alert("Please fill both fields");
//       return;
//     }
//     onSearch(pickup, drop);
//   };

//   return (
//     <section className="hero">
//       <div className="overlay">
//         <h2>🚕 Compare Uber, Ola & Rapido Fares Instantly</h2>
//         <form className="search-box" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Pickup Location"
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Drop Location"
//               value={drop}
//               onChange={(e) => setDrop(e.target.value)}
//             />
//           </div>
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="price">Sort by Price</option>
//             <option value="eta">Sort by ETA</option>
//           </select>
//           <button type="submit">Compare Fare</button>
//         </form>
//       </div>
//     </section>
//   );
// }


// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ added import

// export default function Hero({ sortOption, setSortOption, onSearch }) {
//   const [pickup, setPickup] = useState("");
//   const [drop, setDrop] = useState("");
//   const navigate = useNavigate(); // ✅ added hook

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!pickup || !drop) {
//       alert("Please fill both fields");
//       return;
//     }

//     // ✅ Store pickup & drop in navigation state for next pages
//     onSearch(pickup, drop);
//     navigate("/results", { state: { pickup, drop } }); // <-- added this line
//   };

//   return (
//     <section className="hero">
//       <div className="overlay">
//         <h2>🚕 Compare Uber, Ola & Rapido Fares Instantly</h2>
//         <form className="search-box" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Pickup Location"
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Drop Location"
//               value={drop}
//               onChange={(e) => setDrop(e.target.value)}
//             />
//           </div>
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="price">Sort by Price</option>
//             <option value="eta">Sort by ETA</option>
//           </select>
//           <button type="submit">Compare Fare</button>
//         </form>
//       </div>
//     </section>
//   );
// }


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Hero({ sortOption, setSortOption, onSearch }) {
//   const [pickup, setPickup] = useState("");
//   const [drop, setDrop] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!pickup || !drop) {
//       alert("Please fill both fields");
//       return;
//     }

//     onSearch(pickup, drop);
//     localStorage.setItem("pickup", pickup);
//     localStorage.setItem("drop", drop);

//     navigate("/results", { state: { pickup, drop } });
//   };

//   return (
//     <section className="hero">
//       <div className="overlay">
//         <h2>🚕 Compare Uber, Ola & Rapido Fares Instantly</h2>
//         <form className="search-box" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Pickup Location"
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Drop Location"
//               value={drop}
//               onChange={(e) => setDrop(e.target.value)}
//             />
//           </div>
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="price">Sort by Price</option>
//             <option value="eta">Sort by ETA</option>
//           </select>
//           <button type="submit">Compare Fare</button>
//         </form>
//       </div>
//     </section>
//   );
// }


// import { useState } from "react";

// export default function Hero({ sortOption, setSortOption, onSearch }) {
//   const [pickup, setPickup] = useState("");
//   const [drop, setDrop] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!pickup || !drop) {
//       alert("Please fill both fields");
//       return;
//     }

//     onSearch(pickup, drop);
//     // no navigate here — AppContent will navigate after successful fetch
//   };

//   return (
//     <section className="hero">
//       <div className="overlay">
//         <h2>🚕 Compare Uber, Ola & Rapido Fares Instantly</h2>
//         <form className="search-box" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Pickup Location"
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Drop Location"
//               value={drop}
//               onChange={(e) => setDrop(e.target.value)}
//             />
//           </div>
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="price">Sort by Price</option>
//             <option value="eta">Sort by ETA</option>
//           </select>
//           <button type="submit">Compare Fare</button>
//         </form>
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";

// export default function Hero({ sortOption, setSortOption, onSearch }) {
//   const [pickup, setPickup] = useState(localStorage.getItem("pickup") || "");
//   const [drop, setDrop] = useState(localStorage.getItem("drop") || "");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!pickup || !drop) {
//       alert("Please fill both fields");
//       return;
//     }

//     localStorage.setItem("pickup", pickup);
//     localStorage.setItem("drop", drop);

//     onSearch(pickup, drop);
//   };

//   return (
//     <section className="hero">
//       <div className="overlay">
//         <h2>🚕 Compare Uber, Ola & Rapido Fares Instantly</h2>
//         <form className="search-box" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Pickup Location"
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Drop Location"
//               value={drop}
//               onChange={(e) => setDrop(e.target.value)}
//             />
//           </div>
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="price">Sort by Price</option>
//             <option value="eta">Sort by ETA</option>
//           </select>
//           <button type="submit">Compare Fare</button>
//         </form>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";

export default function Hero({ sortOption, setSortOption, onSearch }) {
  const [pickup, setPickup] = useState(localStorage.getItem("pickup") || "");
  const [drop, setDrop] = useState(localStorage.getItem("drop") || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(pickup,drop)

    // if (!pickup.trim() || !drop.trim()) {
    //   alert("Pickup or drop location missing!");
    //   return;
    // }

    localStorage.setItem("pickup", pickup);
    localStorage.setItem("drop", drop);

    onSearch(pickup.trim(), drop.trim());
  };

  return (
    <section className="hero">
      <div className="overlay">
        <h2>🚕 Compare Uber, Ola & Rapido Fares Instantly</h2>
        <form className="search-box" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Pickup Location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Drop Location"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
            />
          </div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="price">Sort by Price</option>
            <option value="eta">Sort by ETA</option>
          </select>
          <button type="submit">Compare Fare</button>
        </form>
      </div>
    </section>
  );
}
