import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  const { data } = props;
  return (
    <header className="header">
      <div className="text-header">
        <NavLink to="/">
          <h4>{data.title}</h4>
          <p>{data.subtitle}</p>
        </NavLink>
      </div>
      <ul className="header-links">
        {data.headerLinks.map((link) => (
          <li className="header-link" id={`link-${link}`}>
            <NavLink to={`/${link}`}>{link}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
