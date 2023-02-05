import React from 'react';
import VimeoVideo from "./VimeoVideo";
import uuid from "react-uuid";
import './VideoGrid.css';
import {useMediaQuery} from "react-responsive";

const VideoGrid = (props) => {
    const {videos} = props;
    // const isMobile = useMediaQuery({
    //     query: `(max-width: 750px)`,
    // })

    return (
        <div className="video-grid-container">
            <div className="videos-wrapper">
                {
                    videos && videos.sort((x,y) => y.position - x.position).map((video, index) => (
                        <div className='vimeo-video-wrapper'
                             key={uuid()}
                        >
                            <VimeoVideo
                                name={video.title}
                                videoId={video.videoId}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default VideoGrid;
