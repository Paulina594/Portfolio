import React from "react";

import "./ProjectCard.scss";

export const ProjectCard = (props: any) => {
  return (
    <div className="card-wrapper project slide-in-fwd-center">
      <div className="card">
        <div className="column-left image">
          <img src={props.image} alt="" />
        </div>
        <div className="column-right title">{props.name}</div>
      </div>
    </div>
  );
};
