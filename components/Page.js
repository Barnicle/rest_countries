import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Meta from "./Meta";
import Header from "./Header";
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

const Inner = styled.div`
  min-width: 300px;
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
  }
`;

const Page = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "light" ? light__theme : dark__theme}>
        <GlobalStyle />
        <Meta />
        <Header toogleTheme={toggleTheme} />
        <Inner>{props.children}</Inner>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Page;
