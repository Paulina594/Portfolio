import React, { useEffect } from "react";

import "./Preloader.scss";

export const Preloader = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="loader-wrapper">
        <div className="loader">
          {/*<div className="pd-logo">*/}
          <object
            id="logo-animation"
            type="image/svg+xml"
            data={process.env.PUBLIC_URL + "/pd2.svg"}
            aria-label="pd logo"
          />
          {/*</div>*/}

          <div className="logo-wrapper">
            <div className="first-name">
              <div className="name-token first-initial">p</div>
              <div className="name-token name-token-anim">
                <div className="name-token-anim-inner">aulina</div>
              </div>
            </div>

            <div className="last-name">
              <div className="name-token second-initial">d</div>
              <div className="name-token name-token-anim">
                <div className="name-token-anim-inner">rożdż</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
