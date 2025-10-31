// import { useState } from "react";

// export default function LoginModal({ onClose, onLoginSuccess }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     onLoginSuccess(email);
//   };

//   return (
//     <div className="modal-backdrop">
//       <div className="modal">
//         <button className="close-btn" onClick={onClose}>
//           &times; 
//         </button>
//         <h2>🔐 Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }



// // src/components/LoginModal.jsx
// import { useState } from "react";

// export default function LoginModal({ onClose, onLoginSuccess }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password })
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         alert(data.message || "Login failed");
//       } else {
//         // save token and email
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("email", data.email);
//         onLoginSuccess(data.email);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Network error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="modal-backdrop">
//       <div className="modal">
//         <button className="close-btn" onClick={onClose}>
//           &times;
//         </button>
//         <h2>🔐 Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";

// const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

// export default function LoginModal({ onClose, onLoginSuccess }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/auth/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         alert(data.message || 'Login failed');
//         setLoading(false);
//         return;
//       }
//       // token and email returned
//       onLoginSuccess(data.email, data.token);
//     } catch (err) {
//       console.error(err);
//       alert('Network error during login');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="modal-backdrop">
//       <div className="modal">
//         <button className="close-btn" onClick={onClose}>
//           &times; 
//         </button>
//         <h2>🔐 Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";

export default function LoginModal({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      const data = res.data;
      // save token and email
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      onLoginSuccess(data.email);
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.message || "Login failed";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>🔐 Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
