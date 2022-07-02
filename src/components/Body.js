import React from "react";
import {Switch, Route} from "react-router-dom";
import uuid from "react-uuid";
import Home from "../pages/Home";
import Project from "../pages/Project";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DemoReel from "../pages/DemoReel";
import VideoGrid from "./VideoGrid";
import Sketches from "../pages/Sketches";
import ShortFilm from '../pages/ShortFilm';

const Body = (props) => {
    const {data} = props;

    return (
        <Switch>
            <Route exact path="/project/:videoId">
                <Project {...props} />
            </Route>
            <Route exact path={`/other`} key={uuid()}>
                <Sketches data={data}/>
            </Route>
            <Route exact path={`/animation`} key={uuid()}>
                <VideoGrid data={data} videos={data.pages.animation?.videos}/>
            </Route>
            <Route exact path={`/rigging`} key={uuid()}>
                <VideoGrid data={data} videos={data.pages.rigging?.videos}/>
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
            <Route exact path={`/short-film`} key={uuid()}>
                <ShortFilm data={data}/>
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
