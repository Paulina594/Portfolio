import React from "react";

import me10 from "../../assets/images/me10.png";

import "./AboutMePage.scss";

export const AboutMePage = () => {
  return (
    <>
      {" "}
      <div className="title-wrapper">
        <h1 className="gradient-text slide-in-left">About me</h1>
      </div>
      <div className="container">
        <div className="row-about intro">
          <div className="col-left about fade-in">
            <div className="image-wrapper">
              <img src={me10} alt="Paulina Drożdż" />
            </div>
          </div>

          <div className="col-right about slide-in-fwd-center">
            <p>
              My name is Paulina Drożdż and I am a freelance front-end
              developer.
            </p>
            <p>
              You are welcome to my online portfolio, where I showcase some of
              my most challenging projects and how I have applied my knowledge
              of front-end web development to build functional websites and web
              scripts for individuals and firms.
            </p>
          </div>
        </div>
        <div className="row-about slide-in-fwd-center">
          <h3>💪 Strong points:</h3>
          <p>
            My greatest asset, is persistence in pursuing a goal, responsibility
            for entrusted duties and always doing my best. I am great with
            problem solving and finding optimal solutions, although I do not
            shun from asking for help.
          </p>
          <p>
            Building websites is a mix of passion and excitement for me. I have
            a flair for creativity, and find it an oddly satisfying experience
            when my designs come alive.
          </p>
          <p>
            Responsive design principle is at the heart of all my projects. As
            you would see from the projects in my portfolio, I am well-versed in
            some of the most effective and current trends in web development. My
            skillset includes HTML, Sass, Javascript, React, Typescript and
            Node.js.
          </p>
          <h3>📈 Development plan:</h3>
          <p>
            I am currently working to master React framework. However in the
            nearest future I am planning to learn React Native and back-end
            technologies to become a full-stack developer.
          </p>
          <h3>🌎 Learning and language skills:</h3>
          <p>
            Through new learning and by trying new things, I am constantly
            building my knowledge base, and this has helped me improve my coding
            techniques. While I am originally Polish, I lived in Great Britan
            for a couple of years what helped me to become fluent in English
            language.
          </p>
          <h3>🤹‍♀️ Other interests:</h3>
          <p>
            When I am not coding, I am invested in beauty. I particularly have a
            fine flair for Korean beauty products which I have sold through my
            website in the recent past.
          </p>
          <p>
            My other interests are psychology and self-improvement. I believe in
            the principle that working on self-improvement is hard, but with a
            substantial dose of patience and consistency, everything is
            possible.
          </p>
          <p>
            Over and above that I am into DIY. When there is something what
            needs repairing, I am always first to try to fix it myself.
          </p>
          <div className="ending">
            I am always excited by new projects and would love to work with you.
            If you got any ideas for cooperation, do not hesitate to give me a
            shout.
          </div>
        </div>
      </div>
    </>
  );
};
