import { compose, createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import reducer from './reducer'

export const history = createBrowserHistory();

const store = createStore(
  reducer, //root reducer
  compose(
    applyMiddleware(routerMiddleware(history), thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
