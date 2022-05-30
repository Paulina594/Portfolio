import React, { useEffect } from "react";

import "./Preloader.scss";

export const Preloader = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="loader-wrapper">
        <div className="loader">
          <div className="pd-logo">
            <object
              id="logo-animation"
              type="image/svg+xml"
              data={process.env.PUBLIC_URL + "/pd2.svg"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
