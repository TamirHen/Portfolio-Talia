import React from "react";

import "./Image.css";

const Image = (props) => {
  const { image, name, rowStart, rowEnd, columnStart, columnEnd } = props;
  return (
    <figure
      style={{
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        gridColumnStart: columnStart,
        gridColumnEnd: columnEnd,
      }}
    >
      <img className="image" src={image} alt={name} />
      <p className="figure-text">test</p>
    </figure>
  );
};

export default Image;
