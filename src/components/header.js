import React from "react";
import styled from "styled-components";
import { BsMoon } from "react-icons/bs";
import { device } from "../styles/device";
import { connect } from "react-redux";
import { fetchCountriesByRegion } from "../store/middleware/fetchCountriesByRegion";
import { searchCountry } from "../store/middleware/searchCountry";
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountriesByRegion: (region) =>
      dispatch(fetchCountriesByRegion(region)),
    searchCountry: (value) => dispatch(searchCountry(value)),
  };
};
class Header extends React.Component {
  componentDidMount = () => {
    this.props.fetchCountriesByRegion();
  };
  render() {
    return (
      <StyledHeader>
        <Header__title>Where in the world?</Header__title>
        <Header__button onClick={this.props.toggleTheme}>
          <StyledMoonLogo size={17} />
          Dark Mode
        </Header__button>
      </StyledHeader>
    );
  }
}

export default connect(null, mapDispatchToProps)(Header);
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 320px;
  background: ${(props) => props.theme.el_bg};
  border-bottom: 2px solid ${(props) => props.theme.bg};
  padding: 2rem;
  @media ${device.mobileM} {
    justify-content: space-between;
    padding: 2rem 1rem 2rem 1rem;
    flex: 1 100px;
  }
`;
const StyledMoonLogo = styled(BsMoon)`
  color: ${(props) => props.theme.text};
`;

const Header__title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  margin-left: 2rem;
  color: ${(props) => props.theme.text};
  @media ${device.mobileM} {
    margin-left: 0;
  }
`;

const Header__button = styled.button`
  margin-right: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  background: ${(props) => props.theme.el_bg};
  color: ${(props) => props.theme.text};
  width: 100%;
  max-width: 9rem;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  @media ${device.mobileM} {
    margin-right: 0;
  }
`;
