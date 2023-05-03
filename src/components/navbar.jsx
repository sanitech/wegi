import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const toggle = () => {
    document.getElementById("toggle").classList.toggle("open-sidebar");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"} className="links">
          WEGI<span>Mechanic</span>
        </Link>
      </div>
      <div className="toggle">
        <i class="bi bi-list" onClick={() => toggle()}></i>
      </div>
    </div>
  );
}

export default Navbar;
