import React from "react";
import { ProjectCard } from "../../components/projectCard/ProjectCard";

export const ProjectsPage = () => {
  return (
    <>
      <h1 className="gradient-text">My work</h1>
      <div className="page-content projects">
        {<ProjectCard name="Metronom" />}
        {<ProjectCard name="Dzienniczek treningowy" />}
        {<ProjectCard name="ToDo Lista" />}
      </div>
    </>
  );
};
