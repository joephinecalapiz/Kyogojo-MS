/** @format */

import React, { useState } from "react";

import { Signin } from "./landing_screen/auth_screen/signin";
import { Signup } from "./landing_screen/auth_screen/signup";
import Dashboard from "./dashboard-admin/dashboard";

import "./css/App.css";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Signin onFormSwitch={toggleForm} />
      ) : (
        <Signup onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
