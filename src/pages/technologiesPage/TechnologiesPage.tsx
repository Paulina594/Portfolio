import React from "react";

import "./TechnologiesPage.scss";

export const TechnologiesPage = () => {
  return (
    <>
      <div className="title-wrapper">
        <h1 className="gradient-text">Technologies</h1>
      </div>
      <div className="container">
        <div className="row tech-description">
          Tools I am currently working/playing with:{" "}
        </div>
        <div className="row technologies"></div>
      </div>
    </>
  );
};
