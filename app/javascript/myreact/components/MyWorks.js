import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

function MyWorks() {
  return (
    <div className="container-fluid container-myworks">
      <div className="row justify-content-center pt-4">
        <div className="col-8">
          <h1>my works</h1>
          <div className="card-container text-center">
            <ProjectCard image="sync_logo.png" name="sync" desc="ruby on rails, stimulus" />
            <ProjectCard image="best_gamer_logo.jpg" name="best gamer" />
            <ProjectCard image="HELA_logo.png" name="hela talk" desc="ruby on rails, reactJS" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
