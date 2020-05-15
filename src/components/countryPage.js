import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { getCountriesFromState } from "../store/reducer";
import { connect } from "react-redux";
const mapsStateToProps = (state) => {
	return {
		state: getCountriesFromState(state),
	};
};

class CountryPage extends React.Component {
	formatPopulation = (population) => {
		return  population.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g).join(',');
	}
	render() {
		const state = this.props.state;
		const [country] = state.countries.filter(
		  (el) => el.numericCode === this.props.match.params.id
		);
		const {flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages} = country;
		return (
		  <CountryWrapper>
			  <SectionImg>
				  <StyledButton
				    margin={'3.5rem'}
					onClick={() => this.props.history.goBack()}
				  >
					  <StyledArrow size={20} />
					  Back
				  </StyledButton>
				  <StyledFlag src={flag} alt={name} />
			  </SectionImg>
			  <SectionWrapper>
				  <h2>{name}</h2>
				  <SectionInfoWrapper>
					  <InfoList>
						  <li>Native name: {nativeName}</li>
						  <li>Population: {this.formatPopulation(population)}</li>
						  <li>Region: {region}</li>
						  <li>Sub Region: {subregion}</li>
						  <li>Capital: {capital}</li>
					  </InfoList>
					  <InfoList>
						  <li>Top Level Domain: ${topLevelDomain}</li>
						  <li>Currencies:
							  {currencies.map((el, index) => (
								<span key={index}>{el.name}</span>
							  ))}
						  </li>
					  <li>Languages:
						  {languages.map((country, index) => (
						    <span key={index}>{country.name}</span>
						  ))}
					  </li>
					  </InfoList>
				  </SectionInfoWrapper>
				  <BorderCountriesWrapper>
					  <span>Border Countries</span>
					  {country.borders
					    ? country.borders.map((country, index) => (
						  <StyledButton margin={'0.5rem'} key={index}>{country}</StyledButton>
					    ))
					    : "None"}
				  </BorderCountriesWrapper>
			  </SectionWrapper>

		  </CountryWrapper>
		);
	}
}

export default connect(mapsStateToProps)(CountryPage);
const CountryWrapper = styled.div`
  grid-aria: "header";
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: row;
	flex: 2;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  over-flow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SectionImg = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledFlag = styled.img`
  width: 100%;
  max-width:500px;
  min-width:250px;
  padding: 10px;

`;
const StyledArrow = styled(BsArrowLeft)`
  color: ${(props) => props.theme.text};
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px;
  margin: ${props => props.margin || '0'};
  width: ${(props) => props.width || "10rem"};
  background: ${(props) => props.theme.el_bg};
  color: ${(props) => props.theme.text};
  border: 1px solid transparent;
  border-radius: 4px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.text};
  h2 {
    font-size:3rem;
    margin: 10px;
  }
    ::last-child{
  margin-bottom: 2rem;
  }
`;
const BorderCountriesWrapper = styled.div`
display: flex;
flex-flow: row wrap;
// justify-content: space-around;
align-items: center;
width: auto;

`
const SectionInfoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  li{
    font-size:1.5rem;

  }
  @media (max-width: 768px) {
    flex-direction: column;
  }

`;
const InfoList = styled.ul`
  list-style-type:none;
margin-bottom: 50px;
  //   margin-bottom: 10px;
`;
