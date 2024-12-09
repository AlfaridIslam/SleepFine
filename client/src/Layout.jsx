// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Adjust path as needed
import GoToTop from "./components/GoToTop/GoToTop";
import Whatsaap from "./components/Whatsapp/Whatsapp";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <GoToTop />
      <Whatsaap />
    </>
  );
};

export default Layout;