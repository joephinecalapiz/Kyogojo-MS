/** @format */

import React from "react";
import "../css/Navbar.css";

const Navbar = (props) => {
  return (
    <navbar>
      <button onClick={props.onClick}>Click Me!</button>
    </navbar>
  );
};

export default Navbar;
