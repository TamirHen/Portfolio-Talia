/* eslint-disable eqeqeq */
import React from "react";

import Image from "./Image";

const Grid = (props) => {
  const { data, page, cubeId } = props;
  const gridRows = data.pages[page].grid.rows;
  const gridColumns = data.pages[page].grid.columns;
  const image = data.pages[page].images?.find(
    (image) => image.imageId == cubeId
  );

  const style = {
    gallery: {
      display: "grid",
      gridTemplateRows: `repeat(${gridRows || 8}, 5vw)`,
      gridTemplateColumns: `repeat(${gridColumns || 8}, 1fr)`,
      gridGap: "15px",
      margin: "15px 0px",
    },
  };

  return (
    <div style={style.gallery}>
      {image && page !== "home"
        ? data.cubes.map(
            (cube) =>
              cubeId == cube.id && (
                <figure
                  style={{
                    cursor: "default",
                    gridRowStart: image.rowStart || 1,
                    gridRowEnd: image.rowEnd,
                    gridColumnStart: image.columnStart,
                    gridColumnEnd: image.columnEnd,
                  }}
                >
                  <img src={cube.image} alt={cube.name} />
                </figure>
              )
          )
        : page === "home" &&
          data.cubes.map((cube) => <Image key={cube.id} {...cube} />)}
    </div>
  );
};

export default Grid;
