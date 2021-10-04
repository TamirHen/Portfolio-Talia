import React from 'react';
import {useMediaQuery} from "react-responsive";
import {ReactComponent as NewTabIcon} from '../assets/external-link.svg';
import './Contact.css';
import EmailForm from "../components/EmailForm";

function Contact({data}) {
    const {mobile} = data.breakPoints;
    const isMobile = useMediaQuery({
        query: `(max-width: ${mobile || "600px"})`,
    });

    return (
        <div className={"contact-container"}>
            {
                data && <>
                    <h2 className={"contact-header"}>{data.pages.contact.title}</h2>
                    <p>{data.pages.contact.text}</p>
                </>
            }
            <EmailForm/>
        </div>
    );
}

export default Contact;