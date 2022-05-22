import React from "react";
import { ProjectCard } from "../../components/projectCard/ProjectCard";

import "./ProjectsPage.scss";

export const ProjectsPage = () => {
  return (
    <>
      <div className="title-wrapper">
        <h1 className="gradient-text">Projects</h1>
      </div>
      <div className="container">
        <div className="row projects-description"></div>
        <div className="row projects">
          {<ProjectCard name="Metronom" />}
          {<ProjectCard name="Dzienniczek treningowy" />}
          {<ProjectCard name="ToDo Lista" />}
        </div>
      </div>
    </>
  );
};
