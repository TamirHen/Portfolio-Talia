import React from "react";
import { Link } from "react-router-dom";

import "./Image.css";

const Image = (props) => {
  const {
    image,
    name,
    genre,
    rowStart,
    rowEnd,
    columnStart,
    columnEnd,
  } = props;
  return (
    <figure
      style={{
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        gridColumnStart: columnStart,
        gridColumnEnd: columnEnd,
      }}
    >
      <Link to={`/project/${name}`}>
        <img className="image" src={image} alt={name} />
        <div className="figure-text">
          <p style={{ fontWeight: "bold" }}>{name}</p>
          <p style={{ fontSize: "14px", marginTop: "3px" }}>{genre}</p>
        </div>
      </Link>
    </figure>
  );
};

export default Image;
