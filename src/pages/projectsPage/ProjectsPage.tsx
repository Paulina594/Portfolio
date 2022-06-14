import React from "react";

import { ProjectCard } from "../../components/projectCard/ProjectCard";

import portfolioCover from "../../assets/images/projects-img/portfolio/portfolio-cover.png";
import portfolioScreenshot1 from "../../assets/images/projects-img/portfolio/portfolio-screenshot1.png";
import portfolioScreenshot2 from "../../assets/images/projects-img/portfolio/portfolio-screenshot2.png";
import portfolioScreenshot2a from "../../assets/images/projects-img/portfolio/portfolio-screenshot2a.png";
import portfolioScreenshot3 from "../../assets/images/projects-img/portfolio/portfolio-screenshot3.png";
import portfolioScreenshot4 from "../../assets/images/projects-img/portfolio/portfolio-screenshot4.png";
import portfolioScreenshot5 from "../../assets/images/projects-img/portfolio/portfolio-screenshot5.png";

import advisorCover from "../../assets/images/projects-img/advisor/advisor-cover.png";
import advisorScreenshot from "../../assets/images/projects-img/advisor/advisor-screenshot.png";

import stoperCover from "../../assets/images/projects-img/stoper/stoper-cover.png";
import stoperScreenshot from "../../assets/images/projects-img/stoper/stoper-screenshot.png";

import htmlIcon from "../../assets/images/tech-icons/html5.svg";
import cssIcon from "../../assets/images/tech-icons/css3.svg";
import sassIcon from "../../assets/images/tech-icons/sass.svg";
import jsIcon from "../../assets/images/tech-icons/javascript.svg";
import tsIcon from "../../assets/images/tech-icons/typescript.svg";
import reactIcon from "../../assets/images/tech-icons/react.svg";

import "./ProjectsPage.scss";

const projects = [
  {
    id: 1,
    name: "Portfolio",
    image: portfolioCover,
    description: {
      text: "",
      technologies: [
        {
          id: 1,
          ico: reactIcon,
          tech: "React",
        },
        {
          id: 2,
          ico: sassIcon,
          tech: "Sass",
        },
        {
          id: 3,
          ico: tsIcon,
          tech: "Typescript",
        },
      ],
      preview: "https://www.paulina.drozdz.me",
      github: "https://www.github.com/Paulina594/Portfolio",
      screenshots: [
        portfolioScreenshot1,
        portfolioScreenshot2,
        portfolioScreenshot2a,
        portfolioScreenshot3,
        portfolioScreenshot4,
        portfolioScreenshot5,
      ],
      other: [
        "FontAmesome",
        "SVGator",
        "Awwwards",
        "iStock",
        "Animista",
        "Al Color Generator",
        "Pixlr",
        "Seeklogo",
        "Postimages",
      ],
    },
  },
  {
    id: 2,
    name: "Magic ball - Your personal advisor",
    image: advisorCover,
    description: {
      text: "",
      technologies: [
        {
          id: 1,
          ico: reactIcon,
          tech: "React",
        },
        {
          id: 2,
          ico: sassIcon,
          tech: "Sass",
        },
        {
          id: 3,
          ico: tsIcon,
          tech: "Typescript",
        },
      ],
      preview: "https://www.advisor.paulina.drozdz.me/",
      github: "https://github.com/Paulina594/Advisor",
      screenshots: [advisorScreenshot],
      other: [
        "FontAmesome",
        "Animista",
        "Al Color Generator",
        "Canva",
        "Seeklogo",
        "Postimages",
      ],
    },
  },
  {
    id: 3,
    name: "Stoper",
    image: stoperCover,
    description: {
      text: "",
      technologies: [
        {
          id: 1,
          ico: htmlIcon,
          tech: "HTML",
        },
        {
          id: 2,
          ico: cssIcon,
          tech: "CSS",
        },
        {
          id: 3,
          ico: jsIcon,
          tech: "Javascript",
        },
      ],
      preview: "https://www.stoper.paulina.drozdz.me/",
      github: "https://github.com/Paulina594/stoper",
      screenshots: [stoperScreenshot],
      other: ["FontAmesome", "Pixabay", "Seeklogo"],
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
    <>
      <div className="title-wrapper">
        <h1 className="gradient-text slide-in-left">Projects</h1>
      </div>
      <div className="container">
        <div className="row projects">{projectsList}</div>
      </div>
    </>
  );
};
