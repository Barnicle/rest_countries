import React, { Component } from "react";
import Filters from "./Filters";
import Item from "./Item";
class Items extends Component {
  state = {
    countries: null,
  };
  fetchData = async () => {
    let countries;
    await fetch("https://restcountries.eu/rest/v2/all").then((res) =>
      res.json().then((res) => (countries = res))
    );
    this.setState({
      countries,
    });
  };
  componentDidMount = () => {
    this.fetchData();
  };
  render() {
    const { countries } = this.state;
    // console.log(countries);
    return (
      <div>
        {countries && <Filters />}
        {/* <CountryWrapper> */}
        {countries &&
          countries.map((el, index) => <Item key={index} country={el} />)}
        {/* </CountryWrapper> */}
      </div>
    );
  }
}

export default Items;
