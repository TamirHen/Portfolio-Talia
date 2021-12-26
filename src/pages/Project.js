/* eslint-disable eqeqeq */
import React from "react";
import Grid from "../components/Grid";
import TextBody from "../components/TextBody";
import {useParams} from "react-router-dom";
import VimeoVideo from "../components/VimeoVideo";

const Project = (props) => {
    const {videoId} = useParams();
    const {data} = props;
    const video = data.pages.animation.videos.find((video) => video.videoId == videoId)
        || data.pages.rigging.videos.find((video) => video.videoId == videoId);

    return (
        <>
            {
                videoId &&
                <VimeoVideo
                    className="demo-reel-iframe"
                    videoId={videoId}
                />
            }
            <Grid page="project" {...props} />
            <TextBody
                title={video.title}
                subtitle="This is a subtitle"
                text="This is a text"
                data={data}
            />
        </>
    );
};

export default Project;
