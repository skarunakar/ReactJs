import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import PocOne from "../POC1/PocOne.jsx";
import PocOneSetOne from "../POC1/PocOneSetOne.jsx";
import Layout from "../components/Layout.jsx";


class Routes extends React.Component {
    render() {
        return <Router history={hashHistory}>
            <Route path="/" component={Layout}>
            <Route path="poc_one" component={PocOne}/>
            <Route path="poc_one/data-set" component={PocOneSetOne}/>
                <Route path="poc_two" component={PocOne}/>
            </Route>
        </Router>;
    }
}

export default Routes;
