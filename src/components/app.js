import React from 'react';
import {bindActionCreators} from "redux";
import {fetchCountries} from "../store/middleware/fetchCountries";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./header";
import Main from "./main";
const mapsDispatchToProps = dispatch => bindActionCreators({fetchCountries}, dispatch);
class App extends React.Component{
    render() {
        const {fetchCountries} = this.props;
        fetchCountries();
        return <Router>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Main}/>
            </Switch>
        </Router>
    }
}



export default  connect(null,mapsDispatchToProps)(App);