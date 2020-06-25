import React from "react";
import styled from "styled-components";
import { BsMoon } from "react-icons/bs";
import StyledHeader from "./styles/StyledHeader";
const Header = (props) => {
  return (
    <StyledHeader>
      <Header__title>Where in the world?</Header__title>
      <Header__button onClick={props.toogleTheme}>
        <StyledMoonLogo size={12} />
        Dark Mode
      </Header__button>
    </StyledHeader>
  );
};

export default Header;

const StyledMoonLogo = styled(BsMoon)`
  color: ${(props) => props.theme.text};
`;

const Header__title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${(props) => props.theme.text};
`;

const Header__button = styled.button`
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background: white;
  color: ${(props) => props.theme.text};
  width: 100%;
  max-width: 12rem;
  white-space: nowrap;
  border: 1px solid transparent;
  margin-left: auto;
  margin-right: 0;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;
