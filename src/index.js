import React from "react";
import ReactDOM from "react-dom";
import {ConnectedRouter} from "connected-react-router";
import App from "./components/app";
import { Provider } from "react-redux";
import store, {history} from "./store/store";
import "./styles/index.scss";


ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
    <App />
      </ConnectedRouter>
  </Provider>,
  document.querySelector("#root")
);
