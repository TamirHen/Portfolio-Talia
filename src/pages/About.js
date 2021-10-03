import React from 'react';
import TextBody from "../components/TextBody";
import Iframe from 'react-iframe'
import {useMediaQuery} from "react-responsive";
import {ReactComponent as NewTabIcon} from '../assets/external-link.svg';
import './About.css';

function About({data}) {
    const {title, subtitle, description, cv} = data.pages.about;
    const {mobile} = data.breakPoints;
    const isMobile = useMediaQuery({
        query: `(max-width: ${mobile || "600px"})`,
    });

    return (
        <div className={"page-about"}>
            <TextBody
                title={title}
                subtitle={subtitle}
                text={description}
                data={data}
            />

            {
                isMobile ?
                    <a className={"cv-link"} target="_blank" href={cv}>
                        <span className={"open-cv-txt"}>My Resume</span>
                        <NewTabIcon/>
                    </a>
                    :
                    <Iframe url={cv}
                            width="100%"
                            height="800px"
                            id="talia-cv"
                            className="iframe-cv"
                            display="initial"
                            position="relative"
                            frameBorder="0"
                    />
            }
        </div>
    );
}

export default About;