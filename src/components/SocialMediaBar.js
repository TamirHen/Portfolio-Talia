import React from 'react';
import './SocialMediaBar.css';
import {ReactComponent as BehanceIcon} from '../assets/behance_icon.svg';
import {ReactComponent as DribbleIcon} from '../assets/dribbble_icon.svg';
import {ReactComponent as InstagramIcon} from '../assets/instagram_icon.svg';
import {ReactComponent as LinkedinIcon} from '../assets/linkedin_icon.svg';
import {ReactComponent as VimeoIcon} from '../assets/vimeo_icon.svg';
import {ReactComponent as WhatsappIcon} from '../assets/whatsapp_icon.svg';

function SocialMediaBar({socialMediaData}) {
    const {behance, dribble, instagram, linkedin, vimeo, whatsapp} = socialMediaData;
    return (
        <div className={"social-media-wrapper"}>
            <div className={"icon-wrapper"}>
                <a href={behance} target="_blank">
                    <BehanceIcon/>
                </a>
            </div>
            <div className={"icon-wrapper"}>
                <a href={dribble} target="_blank">
                    <DribbleIcon/>
                </a>
            </div>
            <div className={"icon-wrapper"}>
                <a href={instagram} target="_blank">
                    <InstagramIcon/>
                </a>
            </div>
            <div className={"icon-wrapper"}>
                <a href={linkedin} target="_blank">
                    <LinkedinIcon/>
                </a>
            </div>
            <div className={"icon-wrapper"}>
                <a href={vimeo} target="_blank">
                    <VimeoIcon/>
                </a>
            </div>
            <div className={"icon-wrapper"}>
                <a href={whatsapp} target="_blank">
                    <WhatsappIcon/>
                </a>
            </div>
        </div>
    );
}

export default SocialMediaBar;