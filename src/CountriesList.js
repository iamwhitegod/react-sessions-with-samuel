import React from "react";
import "./CountriesList.css";

function CountriesList({ children }) {
  return <div className="countries-list">{children}</div>;
}

export default CountriesList;
