import React from "react";
import {Switch, Route} from "react-router-dom";
import uuid from "react-uuid";
import Home from "../pages/Home";
import Project from "../pages/Project";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DemoReel from "../pages/DemoReel";
import VideoGrid from "../pages/VideoGrid";
import Sketches from "../pages/Sketches";

const Body = (props) => {
    const {data} = props;

    return (
        <Switch>
            <Route exact path={`/sketches`} key={uuid()}>
                <Sketches data={data}/>
            </Route>
            <Route exact path={`/animation`} key={uuid()}>
                <VideoGrid videos={data.pages.animation?.videos}/>
            </Route>
            <Route exact path={`/rigging`} key={uuid()}>
                <VideoGrid videos={data.pages.rigging?.videos}/>
            </Route>
            <Route exact path={`/about`} key={uuid()}>
                <About data={data}/>
            </Route>
            <Route exact path={`/contact`} key={uuid()}>
                <Contact data={data}/>
            </Route>
            <Route exact path={`/demo-reel`} key={uuid()}>
                <DemoReel data={data}/>
            </Route>
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
