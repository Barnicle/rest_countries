import {getCountries} from "../actions";

export const fetchCountriesByRegion= (name) => {
	return dispatch => {
		fetch(`https://restcountries.eu/rest/v2/name/${name}`)
		.then(res => res.json())
		.then(data => dispatch(getCountries(data)));
	}
}

