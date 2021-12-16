/* eslint-disable eqeqeq */
import React from "react";
import { useMediaQuery } from "react-responsive";
import uuid from "react-uuid";

import Image from "./Image";

const Grid = (props) => {
  const { data, page, cubeId } = props;
  const { mobile, tablet } = data.breakPoints;
  const isTablet = useMediaQuery({
    query: `(max-width: ${tablet || "1200px"})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobile || "600px"})`,
  });
  const gridRows = isTablet
    ? isMobile
      ? data.pages[page]?.grid.mobile?.rows
      : data.pages[page]?.grid.tablet?.rows
    : data.pages[page]?.grid.rows
  const gridColumns = isTablet
    ? isMobile
      ? data.pages[page]?.grid.mobile?.columns
      : data.pages[page]?.grid.tablet?.columns
    : data.pages[page]?.grid.columns
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
