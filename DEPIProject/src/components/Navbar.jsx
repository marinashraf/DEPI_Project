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
import { Link } from "react-router-dom";

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
    <nav  className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div  id="nav-section" className="navbar-left">
        <img src="/imges/egypt/logo.png" alt="Logo" className="logo" />

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
        <Link className="home-links" to="/" 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>

  <a href="#places-section">Provinces</a>
           <Link className="home-Contact" to="/Contact">Contact</Link>
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

