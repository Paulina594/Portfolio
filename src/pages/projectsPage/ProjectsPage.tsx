import React, { useState } from "react";

import { ProjectCard } from "../../components/projectCard/ProjectCard";

import "./ProjectsPage.scss";
import htmlIcon from "../../assets/images/tech-icons/html5.svg";
import cssIcon from "../../assets/images/tech-icons/css3.svg";
import sassIcon from "../../assets/images/tech-icons/sass.svg";
import jsIcon from "../../assets/images/tech-icons/javascript.svg";
import tsIcon from "../../assets/images/tech-icons/typescript.svg";
import reactIcon from "../../assets/images/tech-icons/react.svg";
import { ProjectDescriptionModal } from "../../components/projectDescriptionModal/ProjectDescriptionModal";

const projects = [
  {
    id: 1,
    name: "Portfolio",
    image: htmlIcon,
    description: {
      text: "",
      technologies: "",
      preview: "",
      github: "",
    },
  },
  {
    id: 2,
    name: "Magic ball - Your personal advisor",
    image: cssIcon,
    description: {
      text: "",
      technologies: "",
      preview: "",
      github: "",
    },
  },
  {
    id: 3,
    name: "Stoper",
    image: sassIcon,
    description: {
      text: "",
      technologies: "",
      preview: "",
      github: "",
    },
  },
  {
    id: 4,
    name: "Wheater App",
    image: jsIcon,
    description: {
      text: "",
      technologies: "",
      preview: "",
      github: "",
    },
  },
  {
    id: 5,
    name: "PESEL validator",
    image: tsIcon,
    description: {
      text: "",
      technologies: "",
      preview: "",
      github: "",
    },
  },
  {
    id: 6,
    name: "Form with validation",
    image: reactIcon,
    description: {
      text: "",
      technologies: "",
      preview: "",
      github: "",
    },
  },
];

export const ProjectsPage = () => {
  const projectsList = projects.map((project) => (
    <ProjectCard
      key={project.id}
      name={project.name}
      image={project.image}
      description={project.description}
    />
  ));
  return (
    <div className="all" style={{}}>
      <div className="title-wrapper">
        <h1 className="gradient-text slide-in-left">Projects</h1>
      </div>
      <div className="container">
        <div className="row projects">{projectsList}</div>
      </div>
    </div>
  );
};
