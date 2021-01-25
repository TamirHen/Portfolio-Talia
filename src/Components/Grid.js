/* eslint-disable eqeqeq */
import React from "react";

import Image from "./Image";

const Grid = (props) => {
  const { data, page, cubeId, hlink } = props;
  const gridRows = data.pages[page]?.grid.rows || hlink?.grid.rows;
  const gridColumns = data.pages[page]?.grid.columns || hlink?.grid.columns;
  const images = data.pages[page]?.images;

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
    switch (page) {
      case "hlink":
        return hlink.images?.map(
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
        return images.map(
          (image) =>
            image.cubeId == cubeId && (
              <Image
                key={image.cubeId}
                {...image}
                {...data.cubes.find((cube) => cube.id == image.cubeId)}
                page={page}
              />
            )
        );

      default:
        //Homepage
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
    }
  };

  return <div style={style.gallery}>{pageRender()}</div>;
};

export default Grid;
