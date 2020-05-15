import React from "react";
import styled from "styled-components";
import {device} from "../styles/device";
import {IoMdSearch} from 'react-icons/io';
import {fetchCountriesByRegion} from "../store/middleware/fetchCountriesByRegion";
import {connect} from "react-redux";
const mapDispatchToProps = (dispatch)=> {
	return {fetchCountriesByRegion:(region)=> dispatch(fetchCountriesByRegion(region))}
}


 class Filters extends React.Component {
	handleSearch = (e)=>{
		e.preventDefault();
		// e.target.placeholder='';
	}
	handleSelectRegion =(e)=>{
		const region = e.target.value;
		this.props.fetchCountriesByRegion(region);
	}
	 render() {
		return <FilterWrapper>
			<InputWrapper>
				<Input placeholder={`Search for a country...`} onFocus={this.handleSearch}/>
				<IoSearch size={20}/>
			</InputWrapper>
			<Select defaultValue={"placeholder"} onChange={this.handleSelectRegion}>
				<option disabled={true}  hidden value="placeholder">Filter by: Region</option>
				<option value={'africa'}>Africa</option>
				<option value={'americas'}>America</option>
				<option value={'asia'}>Asia</option>
				<option value={'europe'}>Europe</option>
				<option value={'oceania'}>Oceania</option>
			</Select>
		</FilterWrapper>
	}
}
const IoSearch = styled(IoMdSearch)`
position:absolute;
left: 20px;
top:50%;
transform: translateY(-50%);
color: ${props => props.theme.input?props.theme.input: props.theme.text};
`


export default connect(null, mapDispatchToProps)(Filters);

const InputWrapper = styled.div`
position:relative;
width: 100%;
max-width:450px;
min-width: 250px;

`

const Input = styled.input`
width:100%;
background:${props => props.theme.el_bg};
box-shadow: 0 0 5px ${props => props.theme.bg};
padding: 1.1rem 1.1rem 1.1rem 3rem;
border: 1px solid transparent;
border-radius: 5px;
font-size: 1.2rem;
margin: 1rem;
::placeholder{
color: ${props => props.theme.input?props.theme.input: props.theme.text};
}
`
const Select = styled.select`
max-width:250px;
padding:15px;
background:${props => props.theme.el_bg};
color: ${props =>  props.theme.text};
box-shadow: 0 0 5px ${props => props.theme.bg};
border: 1px solid transparent;
border-radius: 5px;
font-size: 1.5rem;
margin:1rem;
::options{
color: ${props => props.theme.input?props.theme.input: props.theme.text};
}
`

const FilterWrapper = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
flex-wrap:wrap;
width:85%;
margin:50px;
background: ${props=>props.theme.bg};
@media ${device.mobileM}{
justify-content: flex-start;
}
`