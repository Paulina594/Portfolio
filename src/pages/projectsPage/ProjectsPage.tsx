import React from "react";

import { ProjectCard } from "../../components/projectCard/ProjectCard";

// import img3 from "../../assets/images/under-construction.png";
import "./ProjectsPage.scss";
import htmlIcon from "../../assets/images/tech-icons/html5.svg";
import cssIcon from "../../assets/images/tech-icons/css3.svg";
import sassIcon from "../../assets/images/tech-icons/sass.svg";
import jsIcon from "../../assets/images/tech-icons/javascript.svg";
import tsIcon from "../../assets/images/tech-icons/typescript.svg";
import reactIcon from "../../assets/images/tech-icons/react.svg";

const projects = [
  { id: 1, name: "Portfolio", image: htmlIcon, description: "" },
  {
    id: 2,
    name: "Magic ball - Your personal advisor",
    image: cssIcon,
    description: "",
  },
  { id: 3, name: "Stoper", image: sassIcon, description: "" },
  { id: 4, name: "Wheater App", image: jsIcon, description: "" },
  { id: 5, name: "PESEL validator", image: tsIcon, description: "" },
  { id: 6, name: "Form with validation", image: reactIcon, description: "" },
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
    <>
      <div className="title-wrapper">
        <h1 className="gradient-text slide-in-left">Projects</h1>
      </div>
      <div className="container">
        <div className="row projects">
          {projectsList}
          {/*<div className="col-left slide-in-fwd-center">*/}
          {/*  I'm sorry, this page is currently under development.{" "}*/}
          {/*  <i className="fa-solid fa-person-digging" />*/}
          {/*</div>*/}
          {/*<div className="col-right fade-in">*/}
          {/*  <img*/}
          {/*    className="construction"*/}
          {/*    src={img3}*/}
          {/*    alt="building site flat design"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};
