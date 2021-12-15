import React from "react";
import Grid from "../components/Grid";
import {Link} from "react-router-dom";
import './Home.css';
import {useMediaQuery} from "react-responsive";


const Home = (props) => {
    const {data} = props;
    const {mobile} = data.breakPoints;
    const isMobile = useMediaQuery({
        query: `(max-width: ${mobile || "600px"})`,
    });
    // return <Grid page="home" {...props} />;
    return (
        data &&
        <div className={"home-container"} style={{flexDirection: isMobile ? 'column' : 'row'}}>
            <div className={"home-btn-wrapper"}>
                <Link to={"/animation"}>
                    <img className={"home-btn"} src={data.pages.home.animationImage} alt={"Animation"}/>
                    <h2>Animation</h2>
                </Link>
            </div>
            <div className={"home-btn-wrapper"}>
                <Link to={"/rigging"}>
                    <img className={"home-btn"} src={data.pages.home.riggingImage} alt={"Rigging"}/>
                    <h2>Rigging</h2>
                </Link>
            </div>
            <div className={"home-btn-wrapper"}>
                <Link to={"/sketches"}>
                    <img className={"home-btn"} src={data.pages.home.sketchesImage} alt={"Sketches"}/>
                    <h2>Sketches</h2>
                </Link>
            </div>
        </div>
    );
};

export default Home;
