import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Shop from "./Shop";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;