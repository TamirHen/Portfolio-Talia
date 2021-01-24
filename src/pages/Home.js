import React from "react";

import Image from "../Components/Image";

const Home = (props) => {
  const style = {
    gallery: {
      display: "grid",
      gridTemplateColumns: `repeat(${props.data.grid.columns}, 1fr)`,
      gridTemplateRows: `repeat(${props.data.grid.rows}, 5vw)`,
      gridGap: "15px",
      margin: "15px 0px",
    },
  };

  return (
    <div style={style.gallery}>
      {props.data.cubes.map((cube) => (
        <Image {...cube} />
      ))}
    </div>
  );
};

export default Home;
