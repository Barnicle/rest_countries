import { getCountries } from "../actions";

export const fetchCountriesByRegion = (region = "all") => {
  console.log(region);
  let countries;
  return (dispatch) => {
    if (region === "all")
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("state", JSON.stringify(data));
          return dispatch(getCountries(data));
        });
    else
      fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("state", JSON.stringify(data));
          return dispatch(getCountries(data));
        });
  };
};
export const fetchCountriesByCode = (code) => {
  return (dispatch) => {
    fetch(`
https://restcountries.eu/rest/v2/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("state", JSON.stringify(data));
        return dispatch(getCountries(data));
      });
  };
};
