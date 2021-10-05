import React from "react";
import uuid from "react-uuid";

import "./Footer.css";
import SocialMediaBar from "./SocialMediaBar";

const Footer = (props) => {
    return (
        <footer>
            <section className="upper footer-section">
                {props.data.footerText.split("\n").map((line) => (
                    <p className="text-line" key={uuid()}>
                        {line}
                    </p>
                ))}
                {props.data.socialMedia && <SocialMediaBar socialMediaData={props.data.socialMedia}/>}
            </section>
            <section className="lower footer-section">
                <a href="https://github.com/TamirHen-Portfolio"
                   target={"_blank"}>{`©${new Date().getFullYear()} Tamir Hen. All rights reserved.`}</a>
            </section>
        </footer>
    );
};

export default Footer;
