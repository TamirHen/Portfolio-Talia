import React from 'react';
// import {useMediaQuery} from "react-responsive";
import './ShortFilm.css';
import TextBody from '../components/TextBody';

function ShortFilm({data}) {
    // const {mobile} = data.breakPoints;
    // const isMobile = useMediaQuery({
    //     query: `(max-width: ${mobile || "600px"})`,
    // });

    const {shortFilm} = data.pages;
    const {youtubeLink, title, subtitle, text} = shortFilm;

    return (
        <div className={"short-film-container"}>
            {
                <div className={`youtube-video-container`}>
                    <div className='youtube-iframe-container'>
                        <iframe className='youtube-video' src={youtubeLink}
                                title="Some Days | Animated Short Film" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                        />
                    </div>
                    <TextBody
                        title={title}
                        subtitle={subtitle}
                        text={text}
                        data={data}
                    />
                </div>
            }
        </div>
    );
}

export default ShortFilm;