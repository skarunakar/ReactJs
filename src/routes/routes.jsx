import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import PocOne from "../POC1/PocOne.jsx";
import PocOneSetOne from "../POC1/PocOneSetOne.jsx";
import Layout from "../components/Layout.jsx";


class Routes extends React.Component {
    render() {
        return <Router history={hashHistory}>
            <Route path="/" component={Layout}>
               <Route path="exp-one" component={PocOne}>
                < Route path="/exp-one/show-1" component={PocOneSetOne}/>
                < Route path="/exp-one/show-10" component={PocOneSetOne}/>
                < Route path="/exp-one/show-100" component={PocOneSetOne}/>
                < Route path="/exp-one/show-1000" component={PocOneSetOne}/>
                 < Route path="/exp-one/show-10000" component={PocOneSetOne}/>
                 < Route path="/exp-one/show-100000" component={PocOneSetOne}/>
               </Route>
            </Route>
        </Router>;
    }
}

export default Routes;
