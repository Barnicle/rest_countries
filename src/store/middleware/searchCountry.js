import { getCountries } from "../actions";

export const searchCountry = (name) => {
  return (dispatch) => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => dispatch(getCountries(data)));
  };
};
