import React, { useState } from "react";

import { ProjectDescriptionModal } from "../projectDescriptionModal/ProjectDescriptionModal";

import "./ProjectCard.scss";

export const ProjectCard = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <ProjectDescriptionModal
          isModalOpen={isModalOpen}
          setIsModalOpen={() => setIsModalOpen(false)}
        />
      )}
      <div className="card-wrapper project slide-in-fwd-center">
        <div className="card" onClick={() => setIsModalOpen(true)}>
          <div className="column-left image">
            <img src={props.image} alt={props.alt} />
          </div>
          <div className="column-right title">{props.name}</div>
        </div>
      </div>
    </>
  );
};
