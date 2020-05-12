import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";






class List_element extends React.Component{
	
	render() {
		const {country} = this.props;
		const population = country.population.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g).join(',');

		return <Wrapper>
				<StyledLink to={`/country/${country.numericCode}`}>
			<Image src={country.flag} alt={country.name}></Image>
			<StyledCountryName>{country.name}</StyledCountryName>
			<StyledCountryInfo>
				<div><span>Population:</span> {population}</div>
				<div><span>Region:</span> {country.region}</div>
				<div><span>Capital:</span> {country.capital}</div>
			</StyledCountryInfo>
		</StyledLink>
		</Wrapper>
		
	}
}
export default List_element;

const Image = styled.img`
width:100%;
border-bottom: 2px solid ${props => props.theme.bg};
height: 200px;
object-fit: cover;
`

const StyledLink = styled(Link)`
text-decoration: none;
`
const StyledCountryName = styled.h2`
font-size: 2.2rem;
color:${props => props.theme.text};
margin:3rem;
`
const StyledCountryInfo = styled.div`
margin:2rem 2rem 5rem 3rem;
display:flex;
flex-direction: column;
color:${props => props.theme.text};
div, span{
font-size:1.6rem;
}
span{
font-weight: 600;
}
`

const Wrapper = styled.div`
width: auto;
min-width:280px;
max-width:350px;
margin: 50px;
background: ${props => props.theme.el_bg};
box-shadow: 0 0 10px ${props => props.theme.shadow};
border-radius: 8px;
overflow: hidden;
outline: none;
cursor:pointer;
`