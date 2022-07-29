import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CountryDetails.css";

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getCountryByName = async ({ country }) => {
      if (!country) return;
      try {
        const res = await fetch(
          `https://restcountries.com/v2/alpha/${country}`
          // https://restcountries.com/v3.1/alpha/{code}
        );

        const data = await res.json();
        setCountry(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getCountryByName(params);
  }, [params]);

  return (
    <div className="country-details" style={{ color: "white" }}>
      <button className="country-details__btn--back" onClick={goBack}>
        Back
      </button>

      {country && (
        <div className="country-details__container">
          <div className="country-details__img">
            <img src={country.flags.svg} alt={`${country.name.common} flag`} />
          </div>
          <div className="country-details__details">Country DEtails</div>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
