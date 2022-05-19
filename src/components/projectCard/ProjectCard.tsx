import React from "react";

export const ProjectCard = (props: any) => {

  return (
    <div className="card-wrapper">
      <div className="image"></div>
      <div className="title">{props.name}</div>
    </div>
  )
}