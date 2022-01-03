import React from 'react';
import {useMediaQuery} from "react-responsive";
import './DemoReel.css';
import VimeoVideo from "../components/VimeoVideo";

function DemoReel({data}) {
    // const {mobile} = data.breakPoints;
    // const isMobile = useMediaQuery({
    //     query: `(max-width: ${mobile || "600px"})`,
    // });

    const {demoReel} = data.pages;
    const {videoId} = demoReel;

    return (
        <div className={"demo-reel-container"}>
            {
                videoId &&
                    <VimeoVideo
                        videoId={videoId}
                    />
            }
        </div>
    );
}

export default DemoReel;