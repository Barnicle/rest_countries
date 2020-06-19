import { getSearchedCountries } from "../actions";

export const searchCountry = (name) => {
  if (!name) return dispatch => dispatch(getSearchedCountries([])) //if searchbar is empty
  return (dispatch) => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => dispatch(getSearchedCountries(data)));
  };
};
