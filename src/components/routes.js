import React from "react";
import {Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import Home from "./home";
import {device} from "../styles/device";
import CountryPage from "./countryPage";
import {history} from "../store/store";

export default class Routes extends React.Component {
  render() {
    return <StyledApp>
      <Router history={history}>
            <Header toggleTheme={this.props.toggleTheme}/>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={'/country/:id'} component={CountryPage} ></Route>
          <Route  render={()=><NoFound>404</NoFound>}/>
        </Switch>
      </Router>
      </StyledApp>
    
  }
}
const StyledApp = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column;
`;
const NoFound = styled.div`
  position:absolute;
  left: 0;
  top:50%;
  transform: translateY(-50%);
  font-size: 20rem;
  width:100%;
  text-align: center;
  @media ${device.mobileM}{
  font-size:15rem;
  }
  `