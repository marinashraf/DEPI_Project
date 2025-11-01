
// Login.jsx
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-box">
      <h2>Sign In</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button className="login-btn">Sign In</button>
      <div className="login-links">
        <a href="#" className="forgot">Forgot Password?</a>
        <a href="#" className="signup">Sign Up</a>
      </div>
    </div>
  );
}

export default Login;
