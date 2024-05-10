/** @format */

// Dashboard.js

import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";

import "../css/Sidebar.css";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <span>
      <Topbar />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </span>
  );
};

export default Dashboard;
