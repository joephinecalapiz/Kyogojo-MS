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
      <div className="logo">
        <div className="logo">
          {/* Using the imported logo */}
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <h2>Kyogojo Engineering & Water Service Cooperative</h2>
      <form className="register-form " onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
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
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
