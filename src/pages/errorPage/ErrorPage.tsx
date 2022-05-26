import React from "react";

import "./ErrorPage.scss";

import errorImg from "../../assets/images/error404.png";

export const ErrorPage = () => {
  return (
    <>
      <div className="title-wrapper">
        <h1 className="gradient-text slide-in-left">Error 404</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-left slide-in-fwd-center">
            Oops! We can't seem to find the page you're looking for.
          </div>
          <div className="col-right fade-in">
            <img className="error" src={errorImg} alt="laptop with error 404" />
          </div>
        </div>
      </div>
    </>
  );
};
