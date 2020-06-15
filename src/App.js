import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import history from "./history";

// Components
import Admin from "./layouts/Admin.jsx";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";


import "./assets/css/material-dashboard-react.css";
import ProfilePage from "./views/ProfilePage/ProfilePage";


class App extends React.Component{

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/" component={Admin} />
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/profile" component={ProfilePage} />
                        <Route path="/landingPage" component={LandingPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;