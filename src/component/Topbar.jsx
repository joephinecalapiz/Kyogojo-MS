/** @format */

import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "../css/Topbar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="logo">Your Logo</div>
      <div className="actions">
        <div className="action">
          <FaBell />
        </div>
        <div className="action">
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
