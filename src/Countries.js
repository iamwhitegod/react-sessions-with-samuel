import React from "react";
import CountriesList from "./CountriesList";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import Search from "./Search";

function Countries({ countries, apThis }) {
  return (
    <div className="container">
      <div className="search">
        <Search apThis={apThis} />
        <Filter apThis={apThis} />
      </div>

      <CountriesList>
        {countries &&
          countries.map((country) => (
            <CountryCard
              data={country}
              key={`${Math.random() * 12 + 1}`.split(".")[1]}
            />
          ))}
        {/* CountryDetails */}
      </CountriesList>
    </div>
  );
}

export default Countries;
