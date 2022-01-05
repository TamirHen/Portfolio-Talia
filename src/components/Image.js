import React from "react";
// import { Link } from "react-router-dom";

import "./Image.css";

const Image = (props) => {
  const {
    image,
    name,
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
      {/*{page === "project" ? (*/}
        <img className={"image"} src={image} alt={name} />
        {/*) : (*/}
        {/*  <Link to={`/project/${id}`}>*/}
        {/*    <img className={"image fade"} src={image} alt={name} />*/}
        {/*  </Link>*/}
        {/*)}*/}
    </figure>
  );
};

export default Image;
