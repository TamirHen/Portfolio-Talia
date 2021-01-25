import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Project from "../pages/Project";
import Grid from "./Grid";

const Body = (props) => {
  const { data } = props;
  console.log(data.pages.hlinks);
  return (
    <Switch>
      {data.pages.hlinks.map((hlink) => (
        <Route exact path={`/${hlink.name}`}>
          {hlink.grid && <Grid page="hlink" hlink={hlink} {...props} />}
        </Route>
      ))}
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
