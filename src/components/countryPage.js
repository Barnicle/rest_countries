import React from 'react';
import styled from "styled-components";
import {BsArrowLeft} from 'react-icons/bs';
import {getCountriesFromState} from "../store/reducer";
import {connect} from  'react-redux';
const mapsStateToProps = (state)=>{
	return {
		state: getCountriesFromState(state)
	}
}

//Full screen country's info
class CountryPage extends React.Component{
	render() {
		const state = this.props.state;
		  const country = state.countries.filter(el => el   .numericCode === this.props.match.params.id)[0]
	
		  
		  return <CountryWrapper>
			<StyledBackBtn onClick={()=>this.props.history.goBack()}><StyledArrow size={20}/>Back</StyledBackBtn>
			<CountryInfoWrapper>
			<StyledFlag src={country.flag} alt={country.name}/>
			<SectionWrapper>
				
				<h2>{country.name}</h2>
				<SectionInfoWrapper>
				<section>
				<div>Native name: <span>{country.nativeName}</span></div>
				<div>Population: <span>{country.population}</span></div>
				<div>Region: <span>{country.region}</span></div>
				<div>Sub Region: <span>{country.subregion}</span></div>
				<div>Capital: <span>{country.capital}</span></div>
				</section>
				<section>
				<div>Top Level Domain: <span>{country.topLevelDomain}</span></div>
				<div>Currencies: {country.currencies.map((el, index) => <span key={index}>{el.name}</span>)}</div>
				<div>Languages:  {country.languages.map((el, index) => <span key={index}>{el.name}</span>)}</div>
				</section>
				</SectionInfoWrapper>
				<div>
					<span>Border Countries</span>
					{country.borders?country.borders.map((el,index)=><CountryBtn key={index}>{el}</CountryBtn>):'None'}
				</div>
			</SectionWrapper>
			
			</CountryInfoWrapper>
		</CountryWrapper>
	}
}

export default connect(mapsStateToProps)(CountryPage);

const StyledFlag = styled.img`
width:30vw;
`
const StyledArrow = styled(BsArrowLeft)`
color:${props => props.theme.text};
`

const StyledBackBtn = styled.button`
width: 110px;
padding:5px;
margin-bottom:4rem;
display:flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: nowrap;
background: ${props=>props.theme.el_bg};
color:${props => props.theme.text};

border: 1px solid transparent;
border-radius: 4px;
`
const CountryWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
background: ${props=>props.theme.bg};
color:${props => props.theme.text};

padding:5rem;
`

const CountryInfoWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 70%;
`
const SectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
color:${props => props.theme.text};

>div, h2{
margin: 10px;
}
div > section > div{
margin-bottom:10px;
}
`

const SectionInfoWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const CountryBtn = styled.button`
background: ${props=>props.theme.el_bg};
color:${props => props.theme.text};
padding:2px;
margin:2px;
width: 70px;
border: 1px solid transparent;
border-radius: 4px;
`