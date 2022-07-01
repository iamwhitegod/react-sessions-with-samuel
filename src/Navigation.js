import React, { useState } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

import "./Navigation.css";

function Navigation() {
  const [theme, setTheme] = useState(true);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__navbar">
          <h1>Where in the world</h1>
          <button
            className="navbar__toggle-theme"
            onClick={() => setTheme((prev) => !prev)}
          >
            {theme ? (
              <IoMoonOutline size={24} color="#444444" />
            ) : (
              <IoMoonSharp size={24} />
            )}
            <span>Dark Mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
