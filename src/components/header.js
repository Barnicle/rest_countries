import React from "react";
import styled from "styled-components";

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Header__title>Where in the world?</Header__title>
        <Header__button>Dark mode</Header__button>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px solid hsl(0, 0%, 98%);
  padding: 2rem;
`;

const Header__title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  margin-left: 2rem;
`;

const Header__button = styled.button`
  font-size: 1.2rem;
  text-align: center;
  margin-right: 2rem;
`;
