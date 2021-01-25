/* eslint-disable eqeqeq */
import React from "react";

import Image from "./Image";

const Grid = (props) => {
  const { data, page } = props;
  const gridRows = data.pages[page].grid.rows;
  const gridColumns = data.pages[page].grid.columns;
  const images = data.pages[page].images;
  // const image = images?.find((image) => image.cubeId == cubeId);

  const style = {
    gallery: {
      display: "grid",
      gridTemplateRows: `repeat(${gridRows || 8}, 5vw)`,
      gridTemplateColumns: `repeat(${gridColumns || 8}, 1fr)`,
      gridGap: "15px",
      margin: "15px 0px",
    },
  };

  const pageRender = () => {
    console.log(images);
    switch (page) {
      case "home":
        return images?.map(
          (image) =>
            data.cubes.find((cube) => cube.id == image.cubeId) && (
              <Image
                key={image.cubeId}
                {...image}
                {...data.cubes.find((cube) => cube.id == image.cubeId)}
                page={page}
              />
            )
        );

      case "project":
        return images.find(
          (image) =>
            image.cubeId === data.cubes.id && (
              <Image
                key={image.cubeId}
                {...image}
                {...data.cubes.find((cube) => cube.id == image.cubeId)}
                page={page}
              />
            )
        );

      default:
        break;
    }
  };

  return (
    <div style={style.gallery}>
      {pageRender()}
      {/* {image && page !== "home"
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
                  <img className="image" src={cube.image} alt={cube.name} />
                </figure>
              )
          )
        : page === "home" &&
          data.pages.map((cube) => <Image key={cube.id} {...cube} />)} */}
    </div>
  );
};

export default Grid;
