import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {getCountries} from "../actions";

export function fetchCountries(region='europe') {

return dispatch => {
    fetch(`https://restcountries.eu/rest/v2/region/${region}`).then(res => res.json()).then(data =>    dispatch(getCountries(data))
);
}
}