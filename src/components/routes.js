import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import Main from "./home";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Main} />
        </Switch>
      </Router>
    );
  }
}
