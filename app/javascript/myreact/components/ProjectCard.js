import React, { useEffect } from "react";

function ProjectCard(props) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 project-card">
      <img src={props.image} className="card-img" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
