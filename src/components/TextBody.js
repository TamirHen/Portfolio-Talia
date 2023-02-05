import React from "react"
import {useMediaQuery} from "react-responsive"
import './TextBody.css'

const TextBody = (props) => {
    const {data, title, subtitle, text} = props
    const {mobile} = data.breakPoints;
    const isMobile = useMediaQuery({
        query: `(max-width: ${mobile || "600px"})`,
    });

    return (
        <div className="page-text-body" style={isMobile ? {margin: "20px 0 40px 0"} : {margin: "50px 0"}}>
            <div className="text-title">
                {title && <h4 style={{fontSize: isMobile ? "16px" : "18px"}}>{title}</h4>}
                {subtitle && <p style={{fontSize: isMobile ? "14px" : "16px"}}>{subtitle}</p>}
            </div>
            <div
                className="text-body"
                style={{fontSize: isMobile ? "14px" : "16px", marginTop: "30px"}}
            >
                <p className='description'>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default TextBody;
