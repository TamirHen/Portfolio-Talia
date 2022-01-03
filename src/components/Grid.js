/* eslint-disable eqeqeq */
import React from "react";
import { useMediaQuery } from "react-responsive";
import uuid from "react-uuid";

import Image from "./Image";

const Grid = (props) => {
  const { data, page } = props;
  const { mobile, tablet } = data.breakPoints;
  const {grid} = page;
  const isTablet = useMediaQuery({
    query: `(max-width: ${tablet || "1200px"})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobile || "600px"})`,
  });
  const gridRows = isTablet
    ? isMobile
      ? grid.mobile?.rows
      : grid.tablet?.rows
    : grid.desktop?.rows
  const gridColumns = isTablet
    ? isMobile
      ? grid.mobile?.columns
      : grid.tablet?.columns
    : grid.desktop?.columns
  const images = page?.images;

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
     return images?.map(
          (image) =>
            data.cubes.find((cube) => cube.id == image.cubeId) && (
              <Image
                key={uuid()}
                {...image}
                {...((isMobile && image.mobile) || (isTablet && image.tablet))}
                {...data.cubes.find((cube) => cube.id == image.cubeId)}
                page={page}
              />
            )
        );
    }

  return <div style={style.gallery}>{pageRender()}</div>;
};

export default Grid;
