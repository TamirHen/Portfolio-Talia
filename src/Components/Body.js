import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "../pages/Home";

const Body = (props) => {
  return (
    <Switch>
      <Route exact path="/project/:name">
        <div>
          <Link to="/">project</Link>
        </div>
      </Route>
      <Route path="/">
        <Home {...props} />
      </Route>
    </Switch>
  );
};

export default Body;
