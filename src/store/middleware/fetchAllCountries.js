import {getCountries} from "../actions";

export const fetchAllCountries= () => {
	return dispatch => {
		fetch('https://restcountries.eu/rest/v2/all')
		.then(res => res.json())
		.then(data => dispatch(getCountries(data)));
	}
}