import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="text-header">
        <NavLink to="/">
          <h4>{props.data.title}</h4>
          <p>{props.data.subtitle}</p>
        </NavLink>
      </div>
      <ul className="header-links">
        {props.data.headerLinks.map((link) => (
          <li className="header-link" id={`link-${link}`}>
            <NavLink to="/">{link}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
