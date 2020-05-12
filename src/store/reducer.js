import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
const hadleLocalStorage = ()=>{
    if(localStorage.getItem('state')) return JSON.parse(localStorage.getItem('state'));
    else return [];
}
function reducer(state ={countries: hadleLocalStorage()}, action) {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {countries:action.countries}
        default: return state;
    }
}

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    state: reducer
})

//SELECTORS
export const getCountriesFromState = (state)=> state.state;
export default createRootReducer;