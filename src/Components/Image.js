import React from "react";

import "./Image.css";

const Image = (props) => {
  return (
    <figure className={`image-wrap-${props.size}`}>
      <img className="image" src={props.image} alt={props.name} />
    </figure>
  );
};

export default Image;
