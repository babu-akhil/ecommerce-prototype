import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Shop from "./Shop";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;