/* eslint-disable eqeqeq */
import React from "react";
import Grid from "../Components/Grid";
import { useParams } from "react-router-dom";

const Project = (props) => {
  const { cubeId } = useParams();
  const { data } = props;
  const cube = data.cubes.find((cube) => cube.id == cubeId);

  return (
    <>
      <Grid page="project" cubeId={cubeId} {...props} />
      <div className="project-page-text" style={{ margin: "50px 0px" }}>
        <div className="text-title">
          <h4>{cube.name}</h4>
          <p style={{ fontSize: "16px" }}>{cube.genre}</p>
        </div>
        <div
          className="text-body"
          style={{ fontSize: "15px", marginTop: "30px" }}
        >
          {cube.description.split("\n").map((line) => (
            <p className="text-line">{line}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
