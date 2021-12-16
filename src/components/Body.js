import React from "react";
import {Switch, Route} from "react-router-dom";
import uuid from "react-uuid";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Grid from "./Grid";
import TextBody from "./TextBody";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DemoReel from "../pages/DemoReel";
import VideoGrid from "../pages/VideoGrid";

const Body = (props) => {
    const {data} = props;

    return (
        <Switch>
            {/*{data.pages.hlinks.map((hlink) => (*/}
            {/*    hlink.name === 'About' ?*/}
            {/*        <Route exact path={`/${hlink.name}`} key={uuid()}>*/}
            {/*            <About data={data}/>*/}
            {/*        </Route>*/}
            {/*        :*/}
            {/*        <Route exact path={`/${hlink.name}`} key={uuid()}>*/}
            {/*            <>*/}
            {/*                {hlink.header && (*/}
            {/*                    <h4 style={{margin: "50px, 0px, 30px, 0px"}}>{hlink.header}</h4>*/}
            {/*                )}*/}

            {/*                {hlink.grid && <Grid page="hlink" hlink={hlink} {...props} />}*/}
            {/*                {(hlink.title || hlink.subtitle || hlink.text) && (*/}
            {/*                    <TextBody*/}
            {/*                        title={hlink.title || ""}*/}
            {/*                        subtitle={hlink.subtitle || ""}*/}
            {/*                        text={hlink.text || ""}*/}
            {/*                        data={data}*/}
            {/*                    />*/}
            {/*                )}*/}
            {/*            </>*/}
            {/*        </Route>*/}
            {/*))}*/}
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
