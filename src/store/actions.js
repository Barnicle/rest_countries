
export const getCountries = (countries)=>{
    return {
        type: 'GET_COUNTRIES',
        countries
    }
}
export const getSearchedCountries= (countries)=>{
    return {
        type: 'GET_SEARCHED_COUNTRIES',
        countries
    }
}
