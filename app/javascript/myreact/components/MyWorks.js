import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

function MyWorks() {
  return (
    <div className="container-fluid container-myworks">
      <div className="row text-center">
        <div className="col-12">
          <h2 className="my-4">my works</h2>
        </div>
      </div>

      <div className="row text-center justify-content-center">
        <ProjectCard image="synclogo.png" name="sync" desc="ruby on rails, stimulus" />
        <ProjectCard image="bestgamerlogo.png" name="best gamer" />
        <ProjectCard image="helalogo.png" name="hela talk" desc="ruby on rails, reactJS" />
      </div>
    </div>
  );
}

export default MyWorks;
