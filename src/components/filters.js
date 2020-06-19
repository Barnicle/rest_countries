import React from "react";
import styled from "styled-components";
import { device } from "../styles/device";
import { IoMdSearch } from "react-icons/io";
import { withRouter } from "react-router-dom";

import { fetchCountries } from "../store/middleware/fetchCountries";
import { searchCountry } from "../store/middleware/searchCountry";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountriesByRegion: (region) =>
      dispatch(fetchCountries(region)),
    searchCountry: (value) => dispatch(searchCountry(value)),
  };
};

class Filters extends React.Component {
  handleSearch = (e) => {
    console.log(e.target.value);
    this.props.searchCountry(e.target.value);
  };
  handleSelectRegion = (e) => {
    const region = e.target.value;
    this.props.fetchCountriesByRegion(region);
  };
  componentDidMount = () => {
    this.props.fetchCountriesByRegion();
  };
  render() {
    return (
      <FilterWrapper>
        <InputWrapper>
          <Input
            placeholder={`Search for a country...`}
            onChange={this.handleSearch}
          />
          <IoSearch size={20} />
        </InputWrapper>
        <Select defaultValue={"placeholder"} onChange={this.handleSelectRegion}>
          <option disabled={true} hidden value="placeholder">
            Filter by: Region
          </option>
          <option value={"africa"}>Africa</option>
          <option value={"americas"}>America</option>
          <option value={"asia"}>Asia</option>
          <option value={"europe"}>Europe</option>
          <option value={"oceania"}>Oceania</option>
        </Select>
      </FilterWrapper>
    );
  }
}
const IoSearch = styled(IoMdSearch)`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) =>
    props.theme.input ? props.theme.input : props.theme.text};
`;

export default withRouter(connect(null, mapDispatchToProps)(Filters));

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  min-width: 250px;
  margin-bottom: 35px;
  @media (max-width:${device.tablet}) {
  max-width:700px;
  }
`;

const Input = styled.input`
  width: 100%;
  background: ${(props) => props.theme.el_bg};
  box-shadow: 0 0 5px ${(props) => props.theme.bg};
  padding: 1.1rem 1.1rem 1.1rem 5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 1.2rem;
  
  ::placeholder {
    color: ${(props) =>
      props.theme.input ? props.theme.input : props.theme.text};
  }
`;
const Select = styled.select`
position: relative;
  width: 250px;
  padding: 15px;
  background: ${(props) => props.theme.el_bg};
  color: ${(props) => props.theme.text};
  box-shadow: 0 0 5px ${(props) => props.theme.bg};
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 1.5rem;
  margin-bottom: 40px;
outline: none;
  @media screen and (min-width:${device.tablet}) {
  margin-right:4rem;
  }
  @media screen and (max-width:${device.tablet}) {
  width: 100%;
  }
`;
const styledOption = styled.option`
    color: ${(props) =>
  props.theme.input ? props.theme.input : props.theme.text};
`
const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  padding: 20px;
  background: ${(props) => props.theme.bg};
  @media (max-width: 768px) {
  width:100%;
  flex-flow: column;
  align-items: flex-start;
  }
`;
