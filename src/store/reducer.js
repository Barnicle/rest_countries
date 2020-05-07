function rootReducer(state, action) {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
            ...state,
            countries: action.countries
        };
        default: return state;
    }
}


export default rootReducer;