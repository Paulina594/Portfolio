import React, { useState } from "react";

import "./ProjectCard.scss";

export const ProjectCard = (props: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-wrapper project slide-in-fwd-center">
      <div
        className={expanded ? "card card-expanded" : "card"}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="column-left image">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="column-right title">{props.name}</div>
      </div>
    </div>
  );
};
