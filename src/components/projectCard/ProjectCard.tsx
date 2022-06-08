import React, { useEffect, useState } from "react";

import { ProjectDescriptionModal } from "../projectDescriptionModal/ProjectDescriptionModal";

import "./ProjectCard.scss";

export const ProjectCard = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addBodyClass = (className: string) =>
    document.body.classList.add(className);
  const removeBodyClass = (className: string) =>
    document.body.classList.remove(className);

  useEffect(() => {
    isModalOpen
      ? addBodyClass("overflowHidden")
      : removeBodyClass("overflowHidden");
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <ProjectDescriptionModal
          isModalOpen={isModalOpen}
          setIsModalOpen={() => setIsModalOpen(false)}
          project={props}
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
