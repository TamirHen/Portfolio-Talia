import React, {useState} from "react";
import {useMediaQuery} from "react-responsive";
import {NavLink} from "react-router-dom";
import Hamburger from "hamburger-react";
import uuid from "react-uuid";
import "./Header.css";
import {ReactComponent as LogoIcon} from "../assets/logo_name.svg";

const Header = (props) => {
    const {data, padding} = props;
    const {headerLinks} = data;
    const isShrinkMenu = useMediaQuery({
        query: `(max-width: ${data.breakPoints?.menu || "900px"})`,
    });
    const [isMenuActive, setIsMenuActive] = useState(false);
    const getLinks = () => {
        return (
            <>
                {isMenuActive && (
                    <div
                        className="grey-screen"
                        onClick={() => setIsMenuActive(false)}
                    />
                )}
                <ul
                    className={
                        isShrinkMenu
                            ? `mobile-nav ${isMenuActive ? "open" : "close"}`
                            : "header-links"
                    }
                >
                    {headerLinks && Object.keys(headerLinks)
                        .sort((a, b) => headerLinks[a].order - headerLinks[b].order)
                        .map((key, index) => (
                            <li key={uuid()} className="header-link"
                                id={`link-${headerLinks[key].name.replace(" ", "-").toLowerCase()}`}>
                                <NavLink activeStyle={{color: "#1D3EC3"}} onClick={() => setIsMenuActive(false)}
                                         to={`/${headerLinks[key].name.replace(" ", "-").toLowerCase()}`}>
                                    {headerLinks[key].name}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
            </>
        );
    };

    return (
        <>
            <header className="header" style={{padding: padding}}>
                <div className="text-header">
                    <NavLink to="/">
                        {/*<h4>{data.title}</h4>*/}
                        <div className="logo-icon">
                            <LogoIcon/>
                        </div>
                        {data.subtitle && <p>{data.subtitle}</p>}
                    </NavLink>
                </div>
                {isShrinkMenu ? (
                    <Hamburger
                        size="24"
                        toggled={isMenuActive}
                        toggle={setIsMenuActive}
                    />
                ) : (
                    <nav>{getLinks()}</nav>
                )}
            </header>
            {isShrinkMenu && <nav>{getLinks()}</nav>}
        </>
    );
};

export default Header;
