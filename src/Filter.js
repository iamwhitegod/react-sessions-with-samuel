import React, { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import "./Filter.css";

function Filter({ apThis }) {
  const [filterOption, setFilterOption] = useState(false);

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      const filter = window.location.hash.slice(1);
      apThis.getCountriesByRegion(filter);
      setFilterOption((prev) => !prev);
    });

    return () =>
      window.removeEventListener("hashchange", () => {
        console.log("removed listener");
      });
  }, []);

  return (
    <div className="form__dropdown">
      <button
        className={`form__dropdown-btn`}
        onClick={() => {
          setFilterOption((prev) => !prev);
        }}
      >
        <span>Filter by Region</span>
        <span className="down-arrow-icon">
          <IoChevronDownOutline size={24} />
        </span>
      </button>
      <div
        className={`form__dropdown-content ${
          filterOption ? "form__dropdown-content--show" : ""
        }`}
      >
        <a href="#africa">Africa</a>
        <a href="#americas">America</a>
        <a href="#asia">Asia</a>
        <a href="#europe">Europe</a>
        <a href="#oceania">Oceania</a>
      </div>
    </div>
  );
}

export default Filter;
