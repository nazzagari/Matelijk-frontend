import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx"
import NotFound from "./components/404.jsx"
import Login from "./components/Login.jsx"
import Members from "./components/Members.jsx";

export default () =>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/members" exact component={Members}/>
        <Route component={NotFound}/>
    </Switch>;