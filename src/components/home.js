import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCountriesFromState } from "../store/reducer";
import List_element from "./list_element";
import Filters from "./filters";

const mapsStateToProps = (state) => {
  return {
    state: getCountriesFromState(state),
  };
};

class Home extends React.Component {

  render() {
    console.log(this.props);
    // const { countries } = this.props.state;
    const countries = this.props.state.searchedCountries.length !== 0? this.props.state.searchedCountries : this.props.state.countries;
    return (
      <StyledHome>
          {countries && <Filters />}
        <CountryWrapper>
          
          {countries &&
            countries.map((el, index) => (
              <List_element country={el} id={index} key={index}>
                {el.name}
              </List_element>
            ))}
        </CountryWrapper>
      </StyledHome>
    );
  }
}

export default withRouter(connect(mapsStateToProps)(Home));

const StyledHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
  align-items: center;
  min-width: 320px;
  background: ${(props) => props.theme.bg};
  width: 100%;
`;

const CountryWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  background: ${(props) => props.theme.bg};
  width: 100%;
`;
