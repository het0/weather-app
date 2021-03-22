import React from "react";
import { Route, Switch } from "react-router-dom";

import "./application.css";

import { HomePage } from "./pages/HomePage/HomePage";

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);

export { App };
