import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const DUMMY_DATA = {
    headerLinks: ["Film", "Photography", "Design", "Genres", "Blog", "About"],
  };

  return (
    <header className="header">
      <div className="text-header">
        <h4>Talia's Portfolio</h4>
        <p>Subtitle here</p>
      </div>
      <ul className="header-links">
        {DUMMY_DATA.headerLinks.map((link) => (
          <li className="header-link" id={`link-${link}`}>
            <Link to="/">{link}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
