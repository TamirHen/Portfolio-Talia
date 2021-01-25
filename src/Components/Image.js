import React from "react";
import { Link } from "react-router-dom";

import "./Image.css";

const Image = (props) => {
  const {
    id,
    image,
    name,
    genre,
    rowStart,
    rowEnd,
    columnStart,
    columnEnd,
    page,
  } = props;
  return (
    <figure
      style={{
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        gridColumnStart: columnStart,
        gridColumnEnd: columnEnd,
        cursor: page === "home" ? "pointer" : "unset",
      }}
    >
      <Link to={`/project/${id}`}>
        <img
          className={`image ${page === "home" && "fade"}`}
          src={image}
          alt={name}
        />
        {page === "home" && (
          <div className="figure-text">
            <p style={{ fontWeight: "bold" }}>{name}</p>
            <p style={{ fontSize: "14px", marginTop: "3px" }}>{genre}</p>
          </div>
        )}
      </Link>
    </figure>
  );
};

export default Image;
