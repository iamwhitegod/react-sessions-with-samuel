import React, { Component } from "react";

import Navigation from "./Navigation";
import Search from "./Search";
import CountriesList from "./CountriesList";
import CountryCard from "./CountryCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res);
        const data = res.json();

        return data;
      })
      .then((data) => {
        console.log(data);
        this.setState({ countries: data });
      });
  }

  render() {
    return (
      // <React.Fragment>
      //   <React.Fragment/>
      <>
        <Navigation />
        <main>
          <div className="container">
            <div className="search">
              <Search />
              {/* Filter */}
            </div>

            <CountriesList>
              {this.state.countries.map((country) => (
                <CountryCard data={country} />
              ))}
            </CountriesList>
          </div>
        </main>
      </>
    );
  }
}

export default App;
