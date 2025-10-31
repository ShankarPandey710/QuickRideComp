import React from "react";
import "./Contact.css"; 

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have questions, feedback, or
          partnership opportunities — feel free to reach out to us.
        </p>

        <div className="contact-section">
          <h3>📧 Email</h3>
          <p>support@quickridecompare.com</p>
        </div>

        <div className="contact-section">
          <h3>📞 Phone</h3>
          <p>+91 62079 77604</p>
        </div>

        <div className="contact-section">
          <h3>🏢 Office Address</h3>
          <p>
            QuickRideCompare Pvt. Ltd.<br />
            2nd Floor, Tech Park,<br />
            Hyderabad, Andhra Pradesh – 500081, India
          </p>
        </div>

        <div className="contact-section">
          <h3>🌐 Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">🔗 Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">🔗 Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">🔗 Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">🔗 LinkedIn</a></li>
          </ul>
        </div>

        <div className="contact-section">
          <h3>🕒 Working Hours</h3>
          <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
