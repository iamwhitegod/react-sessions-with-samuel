import React, { Component } from "react";

import Navigation from "./Navigation";
import Search from "./Search";
import CountriesList from "./CountriesList";
import CountryCard from "./CountryCard";
import Filter from "./Filter";

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
          <div className="container">
            <div className="search">
              <Search apThis={this} />
              <Filter apThis={this} />
            </div>

            <CountriesList>
              {this.state.countries &&
                this.state.countries.map((country) => (
                  <CountryCard
                    data={country}
                    key={`${Math.random() * 12 + 1}`.split(".")[1]}
                  />
                ))}
            </CountriesList>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
