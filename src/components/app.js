import React from "react";
import { bindActionCreators } from "redux";
import { fetchCountries } from "../store/middleware/fetchCountries";
import { connect } from "react-redux";
import Routes from "./routes";

const mapsDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchCountries }, dispatch);

// const Context = React.Context();

class App extends React.Component {
  componentDidMount = () => {
    const { fetchCountries } = this.props;
    fetchCountries();
  };
  render() {
    // const { fetchCountries } = this.props;
    // fetchCountries();
    return <Routes>{this.props.children}</Routes>;
  }
}

export default connect(null, mapsDispatchToProps)(App);
