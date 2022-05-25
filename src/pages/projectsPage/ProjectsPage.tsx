import React from "react";
// import { ProjectCard } from "../../components/projectCard/ProjectCard";

import img3 from "../../assets/images/under-construction.png";

import "./ProjectsPage.scss";

export const ProjectsPage = () => {
  return (
    <>
      <div className="title-wrapper">
        <h1 className="gradient-text slide-in-left">Projects</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-left slide-in-fwd-center">
            I'm sorry, this page is currently under development.{" "}
            <i className="fa-solid fa-person-digging" />
          </div>
          <div className="col-right fade-in">
            <img
              className="construction"
              src={img3}
              alt="building site flat design"
            />
          </div>
        </div>
      </div>
    </>
  );
};
