import React, { useEffect } from "react";

import "./ProjectDescriptionModal.scss";

export const ProjectDescriptionModal = ({
  isModalOpen,
  setIsModalOpen,
}: any) => {
  const addBodyClass = (className: string) =>
    document.body.classList.add(className);
  const removeBodyClass = (className: string) =>
    document.body.classList.remove(className);

  useEffect(() => {
    isModalOpen && addBodyClass("overflowHidden");

    return () => {
      !isModalOpen && removeBodyClass("overflowHidden");
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;
  return (
    <>
      <div className="blur">
        <div className="modal-wrapper">
          <div className="modal">fdfdd</div>
        </div>
      </div>
    </>
  );
};
