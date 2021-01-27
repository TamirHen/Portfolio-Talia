import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

import "./Header.css";

const Header = (props) => {
  const { data } = props;
  const isShrinkMenu = useMediaQuery({
    query: `(max-width: ${data.breakPoints.menu || "800px"})`,
  });
  const [isMenuActive, setIsMenuActive] = useState(false);
  const getLinks = () => {
    return (
      <ul
        className={
          isShrinkMenu ? `mobile-nav ${isMenuActive && "open"}` : "header-links"
        }
      >
        {data.headerLinks.map((link) => (
          <li className="header-link" id={`link-${link}`}>
            <NavLink to={`/${link}`}>{link}</NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <header className="header">
        <div className="text-header">
          <NavLink to="/">
            <h4>{data.title}</h4>
            <p>{data.subtitle}</p>
          </NavLink>
        </div>
        {isShrinkMenu ? (
          <Hamburger
            size="24"
            toggled={isMenuActive}
            toggle={setIsMenuActive}
            onToggle={() => {}}
          />
        ) : (
          <nav>{getLinks()}</nav>
        )}
      </header>
      {isMenuActive && isShrinkMenu && <nav>{getLinks()}</nav>}
    </>
  );
};

export default Header;
