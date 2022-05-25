import React from "react";

import jsIcon from "../../assets/images/tech-icons/javascript.svg";
import tsIcon from "../../assets/images/tech-icons/typescript.svg";
import htmlIcon from "../../assets/images/tech-icons/html5.svg";
import cssIcon from "../../assets/images/tech-icons/css3.svg";
import sassIcon from "../../assets/images/tech-icons/sass.svg";
import nodeIcon from "../../assets/images/tech-icons/node.svg";
import reactIcon from "../../assets/images/tech-icons/react.svg";
import githubIcon from "../../assets/images/tech-icons/github.svg";
import jiraIcon from "../../assets/images/tech-icons/jira.svg";

import bootstrapIcon from "../../assets/images/tech-icons/bootstrap.svg";
import jqueryIcon from "../../assets/images/tech-icons/jquery.svg";
import prestashopIcon from "../../assets/images/tech-icons/prestashop.svg";

import "./TechnologiesPage.scss";

const tools = [
  { id: 1, tool: "HTML5", icon: htmlIcon },
  { id: 2, tool: "CSS3", icon: cssIcon },
  { id: 3, tool: "SASS", icon: sassIcon },
  { id: 4, tool: "JAVASCRIPT ES6", icon: jsIcon },
  { id: 5, tool: "TYPESCRIPT", icon: tsIcon },
  { id: 6, tool: "REACT", icon: reactIcon },
  { id: 7, tool: "GITHUB", icon: githubIcon },
  { id: 8, tool: "NODE.JS", icon: nodeIcon },
  { id: 9, tool: "JIRA", icon: jiraIcon },
];

const otherTools = [
  { id: 1, tool: "PRESTASHOP", icon: prestashopIcon },
  { id: 2, tool: "JQUERY", icon: jqueryIcon },
  { id: 3, tool: "BOOTSTRAP", icon: bootstrapIcon },
];

export const TechnologiesPage = () => {
  const toolsList = tools.map((tool) => (
    <div className="tech" key={tool.id}>
      <img className="tech-icon" src={tool.icon} alt={`${tool.tool} icon`} />
      <p>{tool.tool}</p>
    </div>
  ));

  const otherToolsList = otherTools.map((tool) => (
    <div className="tech" key={tool.id}>
      <img className="tech-icon" src={tool.icon} alt={`${tool.tool} icon`} />
      <p>{tool.tool}</p>
    </div>
  ));

  return (
    <>
      <div className="title-wrapper">
        <h1 className="gradient-text slide-in-left">Technologies</h1>
      </div>
      <div className="container">
        <div className="row tech-description slide-in-fwd-center">
          Tools I am currently working/playing with:{" "}
        </div>
        <div className="row technologies slide-in-fwd-center">{toolsList}</div>
        <div className="row tech-description slide-in-fwd-center">
          Other solutions I am familiar with:{" "}
        </div>
        <div className="row technologies slide-in-fwd-center">
          {otherToolsList}
        </div>
      </div>
    </>
  );
};
