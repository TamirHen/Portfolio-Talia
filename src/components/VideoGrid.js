import React from 'react';
import VimeoVideo from "./VimeoVideo";
import uuid from "react-uuid";
import './VideoGrid.css';
import {useMediaQuery} from "react-responsive";

const VideoGrid = (props) => {
    const {videos} = props;
    const isMobile = useMediaQuery({
        query: `(max-width: 750px)`,
    });

    console.log(isMobile)
    return (
        <div className="video-grid-container">
            <div className="videos-wrapper">
                {
                    videos && Object.keys(videos).reverse().map((key, index) => (
                        <div className='vimeo-video-wrapper'>
                            <VimeoVideo
                                key={uuid()}
                                name={videos[key].title}
                                videoId={videos[key].videoId}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default VideoGrid;