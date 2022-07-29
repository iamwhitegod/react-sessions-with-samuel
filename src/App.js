import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Countries from "./Countries";
import CountryDetails from "./CountryDetails";

import Navigation from "./Navigation";
// import Countries from "./Countries";
// import CountryDetails from "./CountryDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      darkMode: localStorage.getItem("darkMode") || null,
    };

    this.getSearch = this.getSearch.bind(this);
    this.getCountriesByRegion = this.getCountriesByRegion.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        const data = res.json();

        return data;
      })
      .then((data) => {
        console.log(data);
        this.setState({ countries: data });
      });
  }

  // componentDidUpdate() {

  // }

  toggleTheme() {
    this.setState({ darkMode: !this.state.darkMode });
    localStorage.setItem("darkMode", !this.state.darkMode);
  }

  async getCountriesByRegion(region) {
    try {
      const res = await fetch(`https://restcountries.com/v2/region/${region}`);

      if (!res.ok)
        throw new Error("Region not found. Please try another region.");

      const data = await res.json();
      this.setState({ countries: data });
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  async getSearch(searchQuery) {
    try {
      const res = await fetch(
        `https://restcountries.com/v2/name/${searchQuery}`
      );

      if (!res.ok)
        throw new Error(
          "Search not found. Please try searching for another country."
        );

      const data = await res.json();
      console.log(data);
      this.setState({ countries: data });
    } catch (err) {
      console.error(err.message);
    }
  }

  handleSubmit(search) {
    this.getSearch(search);
  }

  render() {
    return (
      // <React.Fragment>
      //   <React.Fragment/>
      <div className={`app ${this.state.darkMode ? "dark-mode" : ""}`}>
        <Navigation theme={this.state.darkMode} apThis={this} />
        <main>
          {/* <Countries countries={this.state.countries} apThis={this} /> */}
          <Routes>
            <Route
              path="/"
              element={
                <Countries countries={this.state.countries} apThis={this} />
              }
            />
            <Route path="/:country" element={<CountryDetails />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
