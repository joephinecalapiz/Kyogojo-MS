/** @format */

import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import Font Awesome icons for email, lock, eye-open, and eye-closed

import logo from "../../assets/kyogojo.png"; // Importing the logo image

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State variable to track password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="auth-form-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <h2>Kyogojo Engineering & Water Service Cooperative</h2>

      <form className="login-form input-container" onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className="icon-input-email"
        />
        <br />

        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type={showPassword ? "text" : "password"} // Conditional rendering based on password visibility
          placeholder=" ********"
          id="password"
          name="password"
          className="icon-input-password"
        />
        {showPassword ? (
          <FaEyeSlash className="eye-icon" onClick={togglePasswordVisibility} />
        ) : (
          <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
        )}

        <div className="remember-forgot-container">
          <div>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Log In</button>
        </div>
      </form>

      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
