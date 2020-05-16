import { compose, createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";
export const history = createBrowserHistory();

const defaultState = {
  countries: [],
  search: "",
};

const store = createStore(
  createRootReducer(history), //root reducer with router state
  compose(
    applyMiddleware(routerMiddleware(history), thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
