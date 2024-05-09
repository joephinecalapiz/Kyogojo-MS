/** @format */

import React from "react";
import "../css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <div className="widgets">
        <div className="widget">Widget 1</div>
        <div className="widget">Widget 2</div>
        <div className="widget">Widget 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
