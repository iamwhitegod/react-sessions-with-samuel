import React from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import "./Navigation.css";

function Navigation({ apThis, theme }) {
  // const [theme, setTheme] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__navbar">
          <h1>Where in the world</h1>
          <button
            className="navbar__toggle-theme"
            onClick={() => apThis.toggleTheme()}
          >
            {theme ? (
              <IoMoonOutline size={24} className="navbar__icon" />
            ) : (
              <IoSunnyOutline size={24} className="navbar__icon" />
            )}
            <span>Dark Mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
