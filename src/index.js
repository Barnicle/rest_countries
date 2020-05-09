import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/app";
import { Provider } from "react-redux";
import store from "./store/store";
import "./styles/index.scss";
const theme = {
  light_mode: {
    bg: " hsl(0, 0%, 98%)", //Very Light Gray
    txt: "hsl(200, 15%, 8%)", //Very Dark Blue
    input: "hsl(0, 0%, 52%)", //Dark Gray
  },
  dark_mode: {
    bg: "hsl(207, 26%, 17%)", //Very Dark Blue
    elem: "hsl(209, 23%, 22%)", //Dark Blue
  },
  primary_cl: "hsl(0, 0%, 100%)", //White
};

const Context = React.createContext();

ReactDOM.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </Provider>,
  document.querySelector("#root")
);
