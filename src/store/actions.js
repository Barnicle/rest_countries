
export const getCountries = (countries)=>{
    return {
        type: 'GET_COUNTRIES',
        countries
    }
}
export const searchCountry = (search)=>{
    return {
        type: 'SEARCH_COUNTRY',
        search
    }
}