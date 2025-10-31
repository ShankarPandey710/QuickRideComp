import React from "react";
import "./About.css"; 
export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2>About Us</h2>
        <p>
          <strong>QuickRideCompare</strong> is a smart ride-fare comparison platform that helps you
          find the <strong>cheapest and fastest rides</strong> across multiple ride-hailing
          services like <strong>Ola, Uber, and Rapido</strong> — all in one place.
        </p>

        <p>
          Instead of switching between different apps to check prices and availability,
          QuickRideCompare shows you:
        </p>

        <ul>
          <li>💰 <strong>Fare estimates</strong> – Compare ride costs instantly.</li>
          <li>⏱ <strong>ETA (Estimated Time of Arrival)</strong> – See which ride can reach you faster.</li>
          <li>🚗 <strong>Capacity details</strong> – Choose a ride that fits your needs (bike, auto, or car).</li>
          <li>🎯 <strong>One-click booking</strong> – Quickly proceed to book the ride of your choice.</li>
        </ul>
      </div>
    </div>
  );
}