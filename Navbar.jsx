import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaUserPlus,
  FaBars,
  FaChevronDown,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import "./Navbar.css";
import Login from "./Login"; // مكون تسجيل الدخول

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleCategories = () => setShowCategories(!showCategories);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-left">
        <img src="/images/logo.png" alt="Logo" className="logo" />

        <div className="browse-dropdown">
          <button className="browse-btn" onClick={toggleCategories}>
            <FaBars className="menu-icon" />
            Browse Category
            <FaChevronDown className="arrow-icon" />
          </button>

          {showCategories && (
            <ul className="category-menu">
              <li>Hotels</li>
              <li>Provinces</li>
              <li>Places</li>
              <li>Contact</li>
              <li>Information</li>
            </ul>
          )}
        </div>
      </div>

      <ul className="navbar-links">
        <li className="active">Home</li>
        <li>Places</li>
        <li>Provinces</li>
        <li>Contact</li>
        <li>Language</li>
      </ul>

      <div className="navbar-right">
        <button className="login-btn" onClick={toggleLogin}>
          <FaUser className="icon" /> Login
        </button>

        <button className="register-btn">
          <FaUserPlus className="icon" /> Register
        </button>

        <button className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {showLogin && (
        <div className="login-popup">
          <Login />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
