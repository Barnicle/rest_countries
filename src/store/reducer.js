

const defaultState = {
  countries: [],
  searchedCountries: [],
};


function reducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return { ...state, countries: action.countries };
    case "GET_SEARCHED_COUNTRIES":
      return { ...state, searchedCountries: action.countries };
    default:
      return state;
  }
}


export default reducer;

//SELECTORS
export const getCountriesFromState = (state) => state;
export const getSearchedCountriesFromState = (state) => state.searchedCountries;

