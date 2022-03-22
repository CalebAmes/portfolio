import React from "react";
import "./ProjectHolder.css";

interface ProjectDetails {
  name: string;
  details: string;
  image: string;
  count: number;
  github: string;
  live: string;
}

const ProjectHolder: React.FC<ProjectDetails> = props => {
  const animationDelay = {
    animationDelay: `${props.count}00ms`
  };

  return (
    <div className="projectCard" style={animationDelay}>
      <div className="projectCard__image">
        <img
          className="projectCard__image-image"
          src={process.env.PUBLIC_URL + props.image}
          alt=""
        />
      </div>
      <div className="projectCard__info">
        <h1 className="projectCard__info-name">{props.name}</h1>
        <p className="projectCard__info-details">{props.details}</p>
        <div className="buttonGroup groupProjectButton">
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="styled_button"
          >
            <i className="fa-brands fa-github-square" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectHolder;
