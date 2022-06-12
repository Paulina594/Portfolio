import React from "react";

import { ProjectCard } from "../../components/projectCard/ProjectCard";

import portfolioCover from "../../assets/images/projects-img/portfolio/portfolio-cover.png";
import advisorCover from "../../assets/images/projects-img/advisor/advisor-cover.png";

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
          ico: htmlIcon,
          tech: "HTML",
        },
      ],
      preview: "https://www.paulina.drozdz.me",
      github: "https://www.github.com/Paulina594/Portfolio",
      screenshots: ["", "", ""],
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
          ico: "",
          tech: "",
        },
        {
          id: 2,
          ico: "",
          tech: "",
        },
        {
          id: 3,
          ico: "",
          tech: "",
        },
      ],
      preview: "",
      github: "",
      screenshots: ["", "", ""],
    },
  },
  {
    id: 3,
    name: "Stoper",
    image: sassIcon,
    description: {
      text: "iuuuuuu",
      technologies: [
        {
          id: 1,
          ico: "",
          tech: "",
        },
        {
          id: 2,
          ico: "",
          tech: "",
        },
        {
          id: 3,
          ico: "",
          tech: "",
        },
      ],
      preview: "",
      github: "",
      screenshots: ["", "", ""],
    },
  },
  {
    id: 4,
    name: "Wheater App",
    image: jsIcon,
    description: {
      text: "Quam viverra orci s donec ac eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed",
      technologies: [
        {
          id: 1,
          ico: "",
          tech: "",
        },
        {
          id: 2,
          ico: "",
          tech: "",
        },
        {
          id: 3,
          ico: "",
          tech: "",
        },
      ],
      preview: "",
      github: "",
      screenshots: ["", "", ""],
    },
  },
  {
    id: 5,
    name: "PESEL validator",
    image: tsIcon,
    description: {
      text: "Lorem",
      technologies: [
        {
          id: 1,
          ico: "",
          tech: "",
        },
        {
          id: 2,
          ico: "",
          tech: "",
        },
        {
          id: 3,
          ico: "",
          tech: "",
        },
      ],
      preview: "",
      github: "",
      screenshots: ["", "", ""],
    },
  },
  {
    id: 6,
    name: "Form with validation",
    image: reactIcon,
    description: {
      text: "Quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      technologies: [
        {
          id: 1,
          ico: reactIcon,
          tech: "React",
        },
        {
          id: 2,
          ico: reactIcon,
          tech: "Re",
        },
        {
          id: 3,
          ico: reactIcon,
          tech: "Act",
        },
      ],
      preview: "",
      github: "https://www.google.pl",
      screenshots: ["", "", ""],
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
