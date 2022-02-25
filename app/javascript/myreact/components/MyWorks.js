import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

function MyWorks() {
  return (
    <div className="container-fluid container-myworks">
      <div className="wrapper ">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="mt-5 mb-3">my works</h1>
          </div>

          <div className="row text-center justify-content-center">
            <ProjectCard image="synclogo.png" name="sync" tech="ruby on rails, stimulus" desc="an app that streamlines the collaboration processes between creators and brands" />
            <ProjectCard image="bestgamerlogo.png" name="best gamer" tech="ruby on rails" desc="a marketplace for gamers to search for coaches and book 1-on-1 slots with em" />
            <ProjectCard image="helalogo.png" name="hela talk" desc="my sexual wellness brand that serves as a safe space for all" tech="ruby on rails, reactJS" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
