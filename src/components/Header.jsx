// import { Link } from "react-router-dom";

// export default function Header({ onLoginClick, isLoggedIn, userEmail, onLogout }) {
//   const userName = userEmail ? userEmail.split('@')[0] : '';

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="./Plogo.png" alt="logo" />
//         <h1 className="title">🚕 QuickRideCompare</h1>
//       </div>

//       <nav>
//         {isLoggedIn ? (
//           <div className="account-info">
//             <span className="user-welcome">👤{userName}</span>
//             <button className="login-btn" onClick={onLogout}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
//             <button className="login-btn" onClick={onLoginClick}>
//               👤 Login
//             </button>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }

import { Link } from "react-router-dom";

export default function Header({ onLoginClick, isLoggedIn, userEmail, onLogout }) {
  const userName = userEmail ? userEmail.split('@')[0] : '';

  return (
    <header className="header">
      <div className="logo">
        <img src="./Plogo.png" alt="logo" />
        <h1 className="title">🚕 QuickRideCompare</h1>
      </div>

      <nav>
        {isLoggedIn ? (
          <div className="account-info">
            <span className="user-welcome">👤{userName}</span>
            <button className="login-btn" onClick={onLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button className="login-btn" onClick={onLoginClick}>
              👤 Login
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
