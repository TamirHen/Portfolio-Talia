import React from "react";
import Grid from "../Components/Grid";
import { useParams } from "react-router-dom";

const Project = (props) => {
  const { cubeId } = useParams();
  return <Grid page="project" cubeId={cubeId} {...props} />;
};

export default Project;
