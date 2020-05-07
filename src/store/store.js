import {compose, createStore, applyMiddleware} from "redux";

import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";
const defaultState = {
    countries: ['AFG', 'RUS'],
    message: '',

}


const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f) );

export default store;