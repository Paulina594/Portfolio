import React, { useEffect, useRef } from "react";

import "./ProjectDescriptionModal.scss";

export const ProjectDescriptionModal = ({
  isModalOpen,
  setIsModalOpen,
  project,
}: any) => {
  const techList = project.description.technologies.map((tech: any) => (
    <div className="modal-tech" key={tech.id}>
      <img
        className="modal-tech-icon"
        src={tech.ico}
        alt={`${tech.tech} icon`}
      />
      <div>{tech.tech}</div>
    </div>
  ));

  const modal: { current: any } = useRef(null);

  console.log(modal);

  const handleClickOutside = (event: MouseEvent) => {
    if (modal.current && !modal.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  const escKeyCheck = (e: any) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keyup", escKeyCheck);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("keyup", escKeyCheck);
    };
  });

  if (!isModalOpen) return null;
  return (
    <>
      <div className="blur">
        <div className="modal-wrapper">
          <div className="modal scale-in-center-modal" ref={modal}>
            <button className="exit" onClick={setIsModalOpen}>
              <i className="fa-solid fa-xmark" />
            </button>
            <h2 className="gradient-text">{project.name}</h2>
            <div className="modal-row summary">
              <div className="image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-description">
                <p>{project.description.text}</p>
              </div>
            </div>
            <div className="modal-row project-technologies">
              <h3>Project based on:</h3>
              {techList}
            </div>
            <div className="modal-row preview">
              <h3>Take a look at the project:</h3>
              <a
                href={project.description.preview}
                target="_blank"
                rel="noreferrer"
                className="button2"
              >
                <span />
                <span />
                <span />
                <span />
                <i className="fa-regular fa-eye" /> Demo
              </a>

              <a
                href={project.description.github}
                target="_blank"
                rel="noreferrer"
                className="button2"
              >
                <span />
                <span />
                <span />
                <span />
                <i className="fa-brands fa-github" /> GitHub
              </a>
            </div>
            <div className="modal-row screenshots">
              <h3>Screenshots:</h3>
            </div>
            <div className="modal-row other-tools">
              <h3>Other tools used:</h3>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
