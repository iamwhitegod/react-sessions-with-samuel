import React from "react";
import "./CountryCard.css";

function CountryCard({ data }) {
  return (
    <article className="country">
      <img className="country__img" src={data.flags?.png} alt="" />
      <div className="country__data">
        <h3 className="country__name">{data.name?.common}</h3>
        <p className="country__row">
          <strong>Population:</strong> {data?.population}
        </p>

        <p className="country__row">
          <strong>Region:</strong> {data?.region}
        </p>

        <p className="country__row">
          <strong>Capital:</strong> {data?.capital}
        </p>
      </div>
    </article>
  );
}

export default CountryCard;
