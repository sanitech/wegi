import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <div className="sidebar" id="toggle">
        <ul>
          <li>
            <Link to={"/record"} className="links">
              <i class="bi bi-record-btn"></i>
              Record Items
            </Link>
          </li>
          <li>
            <Link to={"/"} className="links">
              <i class="bi bi-binoculars"></i>
              view items
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
