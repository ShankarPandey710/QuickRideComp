import React from "react";

const routeDistances = {
  "Vijayawada-Guntur": 30,
  "Vijayawada-Tenali": 35,
  "Guntur-Tenali": 20,
  "Guntur-Ongole": 110,
  "Guntur-Narasaraopeta": 60,
};

const fareRates = {
  rapido: 3,
  ola: 4,
  uber: 5,
};


const avgSpeeds = {
  rapido: 40,
  ola: 35,
  uber: 45,
};

const generateRoutesData = () => {
  const data = {};
  Object.entries(routeDistances).forEach(([route, distance]) => {
    data[route] = [
      {
        name: "🚲 Rapido Bike",
        brand: "rapido",
        capacity: 1,
        fare: distance * fareRates.rapido,
        eta: Math.round((distance / avgSpeeds.rapido) * 60),
      },
      {
        name: "🚘 Ola Auto",
        brand: "ola",
        capacity: 2,
        fare: distance * fareRates.ola,
        eta: Math.round((distance / avgSpeeds.ola) * 60),
      },
      {
        name: "🚗 Uber Mini",
        brand: "uber",
        capacity: 3,
        fare: distance * fareRates.uber,
        eta: Math.round((distance / avgSpeeds.uber) * 60),
      },
    ];
  });
  return data;
};

const RoutesData = generateRoutesData();

export default RoutesData;


// RoutesData.js


// export const pickupPoints = [
//   "Vijayawada",
//   "Guntur",
//   "Tenali",
//   "Ongole",
//   "Narasaraopeta",
// ];

// export const dropPoints = [
//   "Vijayawada",
//   "Guntur",
//   "Tenali",
//   "Ongole",
//   "Narasaraopeta",
// ];

// const routeDistances = {
//   "Vijayawada-Guntur": 30,
//   "Vijayawada-Tenali": 35,
//   "Guntur-Tenali": 20,
//   "Guntur-Ongole": 110,
//   "Guntur-Narasaraopeta": 60,
//   "Vijayawada-Ongole": 150,
//   "Tenali-Ongole": 95,
//   "Tenali-Narasaraopeta": 70,
// };

// const fareRates = { rapido: 3, ola: 4, uber: 5 };
// const avgSpeeds = { rapido: 40, ola: 35, uber: 45 };

// const generateRoutesData = () => {
//   const data = {};
//   Object.entries(routeDistances).forEach(([route, distance]) => {
//     data[route] = [
//       {
//         name: "🚲 Rapido Bike",
//         brand: "rapido",
//         capacity: 1,
//         fare: distance * fareRates.rapido,
//         eta: Math.round((distance / avgSpeeds.rapido) * 60),
//       },
//       {
//         name: "🚘 Ola Auto",
//         brand: "ola",
//         capacity: 2,
//         fare: distance * fareRates.ola,
//         eta: Math.round((distance / avgSpeeds.ola) * 60),
//       },
//       {
//         name: "🚗 Uber Mini",
//         brand: "uber",
//         capacity: 3,
//         fare: distance * fareRates.uber,
//         eta: Math.round((distance / avgSpeeds.uber) * 60),
//       },
//     ];
//   });
//   return data;
// };


// // inside AppContent in App.jsx - replace existing handleSearch
// const handleSearch = async (pickupInput, dropInput) => {
//   setPickup(pickupInput);
//   setDrop(dropInput);

//   const routeKey = `${pickupInput}-${dropInput}`;
//   try {
//     const res = await fetch(`http://localhost:5000/api/routes/${encodeURIComponent(routeKey)}`);
//     const data = await res.json();
//     let generated = data.rides || [];

//     if (sortOption === "price") {
//       generated.sort((a, b) => a.fare - b.fare);
//     } else {
//       generated.sort((a, b) => a.eta - b.eta);
//     }

//     setRides(generated);
//     navigate("/results");
//   } catch (err) {
//     console.error(err);
//     alert("Failed to fetch routes from server.");
//   }
// };


// const RoutesData = generateRoutesData();
// export default RoutesData;
