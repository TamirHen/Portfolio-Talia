import React from 'react';
import GoTo from "./GoTo";
import './VimeoVideo.css';
import {Link} from "react-router-dom";

const VimeoVideo = ({name, videoId}) => {
    return (
        <div className={`vimeo-video-container`}>
            <div className='vimeo-iframe-container'>
                <iframe
                    className={`vimeo-video`}
                    src={`https://player.vimeo.com/video/${videoId}?byline=false&portrait=false${name ? '&title=null' : ''}`}
                    frameBorder="0"
                    title={name}
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowFullScreen
                />
            </div>
            {name && <Link to={`/project/${videoId}`} className='video-name-wrapper'>
                <h4 className={'video-name'}>{name}</h4>
                <div className='goto-icon-wrapper'>
                    <GoTo/>
                </div>
            </Link>}
        </div>
    );
};

export default VimeoVideo;