import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./Search.css";

function Search({ apThis }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form
        className="search__form"
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          apThis.handleSubmit(value);

          setValue("");
        }}
      >
        <fieldset className="search__form-group">
          <IoSearch size={24} className="search__icon" />
          <input
            className="search__input"
            type="search"
            name="search"
            id="search"
            placeholder="Search over 100+ countries"
            value={value}
            onChange={(e) => handleChange(e)}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default Search;
