import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

import "./Header.css";

const Header = (props) => {
  const { data } = props;
  const isShrinkMenu = useMediaQuery({
    query: `(max-width: ${data.breakPoints.menu || "800px"})`,
  });
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="text-header">
        <NavLink to="/">
          <h4>{data.title}</h4>
          <p>{data.subtitle}</p>
        </NavLink>
      </div>
      {isShrinkMenu ? (
        <Hamburger
          size="28"
          toggled={isMenuActive}
          toggle={setIsMenuActive}
          onToggle={() => {}}
        />
      ) : (
        <ul className="header-links">
          {data.headerLinks.map((link) => (
            <li className="header-link" id={`link-${link}`}>
              <NavLink to={`/${link}`}>{link}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
