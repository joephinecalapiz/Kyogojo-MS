/** @format */
import React, { useEffect, useState } from "react";

import logo from "../../assets/kyogojo.png"; // Importing the logo image

export const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div className="auth-form-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <h2>Kyogojo Engineering & Water Service Cooperative</h2>

      <form className="register-form " onSubmit={handleSubmit}>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <br />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <br />
        <div className="button-container">
          <button type="submit">Register</button>
        </div>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
