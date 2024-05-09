/** @format */

import React, { useEffect, useState } from "react";

import logo from "../../assets/kyogojo.png"; // Importing the logo image

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="auth-form-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <h2>Kyogojo Engineering & Water Service Cooperative</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>

        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
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
