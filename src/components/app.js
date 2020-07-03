import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Routes from "./routes";

const light__theme = {
  bg: "hsl(0, 0%, 98%)", //Very Light Gray
  text: "hsl(200, 15%, 8%)", //Very Dark Blue
  input: "hsl(0, 0%, 52%)", //Dark Gray
  el_bg: "hsl(0, 0%, 100%)", //White
  shadow: "hsl(200, 0%, 60%)",
};

const dark__theme = {
  bg: "hsl(207, 26%, 17%)", //Very Dark Blue
  el_bg: "hsl(209, 23%, 22%)", //Dark Blue
  text: "hsl(0, 0%, 100%)", //White
  shadow: "hsl(200, 10%, 10%)",
};
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
  box-sizing: border-box;
}
*::after,
*::before {
  margin: 0;
}

body, html{
  height: 100vh;
}

#root{
  height: 100%;
}
`;
const App = () => {
  const savedTheme = localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : "light";
  const [theme, setTheme] = useState(savedTheme);
  const handleTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  const toggleTheme = () =>
    theme === "light" ? handleTheme("dark") : handleTheme("light");

  return (
    <ThemeProvider theme={theme === "light" ? light__theme : dark__theme}>
      <GlobalStyle />
      <Routes toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};
export default App;
