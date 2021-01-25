import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Project from "../pages/Project";

const Body = (props) => {
  return (
    <Switch>
      <Route exact path="/project/:cubeId">
        <Project {...props} />
      </Route>
      <Route path="/">
        <Home {...props} />
      </Route>
    </Switch>
  );
};

export default Body;
