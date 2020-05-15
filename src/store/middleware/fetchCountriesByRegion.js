import {getCountries} from "../actions";

export const fetchCountriesByRegion= (region) => {
    return dispatch => {
        fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('state', JSON.stringify(data));
            return dispatch(getCountries(data))
            }
        
    );
    }
}

