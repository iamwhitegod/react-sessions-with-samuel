import React from "react";
import { IoMoonOutline } from "react-icons/io5";

import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__navbar">
          <h1>Where in the world</h1>
          <button className="navbar__toggle-theme">
            <IoMoonOutline size={24} color="#444444" />
            <span>Dark Mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
