import React from "react";

import Image from "./Image";
import "./Body.css";

const Body = () => {
  const DUMMY_DATA = {
    cubes: [
      {
        rowStart: 1,
        rowEnd: 3,
        columnStart: 1,
        columnEnd: 3,
        name: "Gravity Falls",
        image:
          "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2015%2F08%2FGravity-Falls.jpg",
      },
      {
        rowStart: 3,
        rowEnd: 6,
        columnStart: 1,
        columnEnd: 3,
        name: "Gravity Falls",
        image:
          "https://d23.com/app/uploads/2016/02/1180-x-600-021616_gravity-falls-press-event-recap-780x440-1455236757.jpg",
      },
      // {
      // rowStart: 1,
      // rowEnd: 3,
      // columnStart: 1,
      // columnEnd: 3,
      //   name: "Gravity Falls",
      //   image:
      //     "https://149455152.v2.pressablecdn.com/wp-content/uploads/2018/07/gravity-falls-complete-feature.png",
      // },
      // {
      // rowStart: 1,
      // rowEnd: 3,
      // columnStart: 1,
      // columnEnd: 3,
      //   name: "Gravity Falls",
      //   image:
      //     "https://www.themarysue.com/wp-content/uploads/2014/08/cf5fffdd-8793-4f3d-9f66-d7c1f6032bda.jpg",
      // },
      // {
      // rowStart: 1,
      // rowEnd: 3,
      // columnStart: 1,
      // columnEnd: 3,
      //   name: "Gravity Falls",
      //   image: "https://miro.medium.com/max/1100/0*chhQu6AxnCDmEhfS.jpg",
      // },
    ],
  };

  return (
    <div className="gallery">
      {DUMMY_DATA.cubes.map((cube) => (
        <Image size={cube.size} image={cube.image} name={cube.name} />
      ))}
    </div>
  );
};

export default Body;
