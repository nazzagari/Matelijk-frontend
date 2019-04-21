import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx"
import NotFound from "./components/404.jsx"

export default () =>
    <Switch>
        <Route path="/" exact components={Home}/>
        <Route component={NotFound}/>
    </Switch>;