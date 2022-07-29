import React from "react";
import "./CountryCard.css";
import { Link } from "react-router-dom";

function CountryCard({ data }) {
  // console.log(data);
  return (
    <Link to={`/${data.cca3 ? data.cca3 : data.alpha3Code}`}>
      <article className="country">
        <img className="country__img" src={data.flags.png} alt="" />
        <div className="country__data">
          <h3 className="country__name">{`${
            data.name.common ? data.name.common : data.name
          }`}</h3>
          <p className="country__row">
            <strong>Population:</strong> {data.population}
          </p>

          <p className="country__row">
            <strong>Region:</strong> {data.region}
          </p>

          <p className="country__row">
            <strong>Capital:</strong> {data.capital}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
