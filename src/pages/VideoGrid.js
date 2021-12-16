import React from 'react';
import VimeoVideo from "../components/VimeoVideo";
import './VideoGrid.css';

const VideoGrid = (props) => {
    const {videos} = props;

    return (
        <div className="video-grid-container">
            <div className="videos-wrapper">
                {
                    videos && Object.keys(videos).reverse().map((key, index) => (
                        <VimeoVideo
                            height={200}
                            title={videos[key].title}
                            className="video-grid-iframe"
                            videoId={videos[key].videoId}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default VideoGrid;