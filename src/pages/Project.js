/* eslint-disable eqeqeq */
import React from "react";
import './Project.css';
import Grid from "../components/Grid";
import TextBody from "../components/TextBody";
import {useParams} from "react-router-dom";
import VimeoVideo from "../components/VimeoVideo";
import {
    Link,
    useHistory
} from "react-router-dom";

const Project = (props) => {
    const {videoId} = useParams();
    const history = useHistory();
    const {data} = props;
    const video = data.pages.animation.videos.find((video) => video && video.videoId == videoId)
        || data.pages.rigging.videos.find((video) => video && video.videoId == videoId);
    if (!video) {
        return <div style={{textAlign: 'center', marginTop: '100px'}}>
            <h2>Page not found</h2>
            <br/>
            <Link onClick={history.goBack}>Return</Link>
        </div>
    }

    return (
        <>
            {
                videoId &&
                <div className={`project-video-wrapper`}>
                    <VimeoVideo
                        videoId={videoId}
                    />
                </div>
            }
            <Grid page={video.projectPage} {...props} />
            <TextBody
                title={video.title}
                subtitle={video.projectPage?.subtitle}
                text={video.projectPage?.description}
                data={data}
            />
        </>
    );
};

export default Project;
