import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getCountriesFromState } from "../store/reducer";
import List_element from "./list_element";
import Filters from "./filters";
import { fetchCountriesByRegion } from "../store/middleware/fetchCountriesByRegion";

const mapsStateToProps = (state) => {
  return {
    state: getCountriesFromState(state),
  };
};

class Home extends React.Component {
  componentDidMount = () => {
    if (this.props.state.countries.length == 0)
      this.props.dispatch(fetchCountriesByRegion());
  };
  render() {
    console.log(this.props);
    const { countries } = this.props.state;
    return (
      <StyledHome>
        <Filters />
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

export default connect(mapsStateToProps)(Home);

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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  flex-wrap: wrap;
  background: ${(props) => props.theme.bg};
  width: 100%;
  padding: 20px;
`;
