import React from "react";
import {Route, Router, Switch, Link, Redirect} from "react-router-dom";
import history from "./history";
import Admin from "./layouts/Admin.jsx";

import "./assets/css/material-dashboard-react.css";


class App extends React.Component{

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/admin" component={Admin} />
                        <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;