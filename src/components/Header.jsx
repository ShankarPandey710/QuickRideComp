import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Header({ onLoginClick, isLoggedIn, userEmail, onLogout }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const user = isLoggedIn ? (JSON.parse(localStorage.getItem('user') || '{}')) : null;
  const userName = user?.name || (userEmail ? userEmail.split('@')[0] : '');

  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/Plogo.png" alt="logo" className="h-12 w-12 ml-20 rounded-full border-2 border-white/30" />
            <h1 className="text-2xl md:text-3xl font-bold ml-64 ">🚕 QuickRideCompare</h1>
          </Link>

          <nav className="flex items-center gap-4 md:gap-6">
            {!isLoggedIn && (
              <>
                <Link to="/" className="hover:text-yellow-300 transition-colors hidden md:block">
                  Home
                </Link>
                <Link to="/about" className="hover:text-yellow-300 transition-colors hidden md:block">
                  About
                </Link>
                <Link to="/contact" className="hover:text-yellow-300 transition-colors hidden md:block">
                  Contact
                </Link>
              </>
            )}
            
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button> */}

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
                >
                  <FaUser className="text-lg" />
                  <span className="hidden md:inline">{userName}</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <FaSignOutAlt />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <FaUser />
                <span>Login</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
