import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
// import { StyledButton, StyledLink } from "../styles/styledComponents";

class CountryPage extends React.Component {
  // formatPopulation = (population) => {
  //   return population
  //     .toString()
  //     .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)
  //     .join(",");
  // };

  // getCountriesNameByCode = (code) => {
  //   const [country] = this.props.state.countries.filter(
  //     (el) => el.alpha3Code === code
  //   );
  //   return country.name;
  // };

  // componentDidMount() {
  //   console.log(this.props.match.params.id);
  //   if (this.props.state === undefined)
  //     this.props.fetchCountriesByCode(this.props.match.params.id[0]);
  // }

  render() {
    console.log(this.props);
    // const state = this.props.state;
    // const [country] = state.countries.filter(
    //   (el) => el.alpha3Code === this.props.match.params.id
    // );
    return (
      <div>
        <p>Country</p>
      </div>
    );
  }
}

export default CountryPage;
const CountryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row;
  flex: 2;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  min-width: 320px;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1rem;
  }
`;
const SectionImg = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;

  margin: 20px;
  @media (max-width: 425px) {
    margin: 7px;
  }
`;
const StyledFlag = styled.img`
  width: 100%;
  max-width: 600px;
  min-width: 250px;
`;
const StyledArrow = styled(BsArrowLeft)`
  color: ${(props) => props.theme.text};
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  color: ${(props) => props.theme.text};
  max-width: 800px;
  min-width: 300px;
  margin: 30px;
  h2 {
    font-size: 2.2rem;
    margin: 10px;
  }
  ::last-child {
    margin-bottom: 2rem;
  }
  div {
    display: flex;
    flex-flow: row wrap;
  }
  @media (max-width: 425px) {
    margin: 0;
    h2 {
      font-size: 2rem;
      margin: 7px;
    }
  }
`;
const BorderCountriesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  min-width: 300px;
  div {
    display: flex;
    flex-flow: wrap;
  }
  h3,
  button {
    margin: 0.5rem;
  }
`;
const SectionInfoWrapper = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin: 0.5rem;
`;
const InfoList = styled.ul`
  list-style-type: none;
  margin-bottom: 50px;
  width: 200px;

  li {
    display: flex;
    flex-flow: row;
    margin: 0.5rem 0.5rem 0.5rem 0;

    h3 {
      margin-right: 5px;
    }
  }
  li,
  span {
    font-size: 1rem;
  }
`;
