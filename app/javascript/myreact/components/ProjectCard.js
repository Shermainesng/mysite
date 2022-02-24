import React, { useEffect } from "react";

function ProjectCard(props) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3 project-card">
      <img src={props.image} className="card-img" alt="..." />
      <div className="card-body">
        <a>
          <span className="card-title">{props.name}</span>
        </a>
        <p className="card-text">{props.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
