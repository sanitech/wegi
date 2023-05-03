import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import FetchData from "../components/FetchData";

function ViewDetail() {
  const { state } = useLocation();

  return (
    <div>
      <Navbar />

      <FetchData data={state} />

      <Sidebar />
    </div>
  );
}

export default ViewDetail;
