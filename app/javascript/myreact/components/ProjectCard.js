import React, { useEffect } from "react";

function ProjectCard(props) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3 project-card">
      <div className="img-container">
        <img src={props.image} className="card-img" alt="..." />
        <button type="button" class="btn btn-dark button-card w-100 align-items-center">
          <h3 className="m-0">TAKE A LOOK</h3>
        </button>
      </div>
      <div className="card-body p-0 my-4">
        <a>
          <h2>
            <span className="card-title">{props.name}</span>
          </h2>
        </a>
        <p className="card-text">{props.desc}</p>
        <p className="card-text">
          <strong>
            Tech involved:
            <br />
            {props.tech}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
