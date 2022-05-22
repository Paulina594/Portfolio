import React from "react";
// import { ProjectCard } from "../../components/projectCard/ProjectCard";

import img3 from "../../assets/images/construction.png";

import "./ProjectsPage.scss";

export const ProjectsPage = () => {
  return (
    <>
      <div className="title-wrapper">
        <h1 className="gradient-text">Projects</h1>
      </div>
      <div className="container">
        <img className="construction" src={img3} alt="" />
      </div>
    </>
  );
};
