import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class List_element extends React.Component {
  render() {
    const { country } = this.props;
    const population = country.population
      .toString()
      .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)
      .join(",");

    return (
      <Wrapper>
        <StyledLink to={`/country/${country.alpha3Code}`}>
          <Image src={country.flag} alt={country.name}></Image>
          <StyledCountryName>{country.name}</StyledCountryName>
          <StyledCountryInfo>
            <li>{`Population: ${population}`}</li>
            <li>{`Region: ${country.region}`}</li>
            <li>{`Capital: ${country.capital}`}</li>
          </StyledCountryInfo>
        </StyledLink>
      </Wrapper>
    );
  }
}
export default List_element;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid ${(props) => props.theme.bg};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledCountryName = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  margin: 2rem;
`;
const StyledCountryInfo = styled.ul`
  margin: 2rem 2rem 5rem 2rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  list-style-type: none;
  font-weight: 600;
  li {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const Wrapper = styled.div`
  margin: 50px;
  width: 300px;
  // min-width: 280px;
  // max-width: 350px;
  height: 420px;
  background: ${(props) => props.theme.el_bg};
  box-shadow: 0 0 10px ${(props) => props.theme.shadow};
  border-radius: 8px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
`;
