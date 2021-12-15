import React from 'react';

const VimeoVideo = ({height, title, videoId, className}) => {
    return (
        <iframe
            className={"vimeo-video " + className}
            src={`https://player.vimeo.com/video/${videoId}`}
            frameBorder="0"
            title={title}
            height={height?.toString()}
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
        />
    );
};

export default VimeoVideo;