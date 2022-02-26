import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

function MyWorks() {
  return (
    <div id="myworks">
      <div className="container-fluid container-myworks">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="my-4">my works</h1>
          </div>
        </div>

        <div className="row text-center justify-content-center pb-4">
          <ProjectCard image="synclogo.png" name="sync" tech="ruby on rails, stimulus" desc="an app that streamlines the collaboration processes between creators and brands" />
          <ProjectCard image="bestgamerlogo.png" name="best gamer" tech="ruby on rails" desc="a marketplace for gamers to search for coaches and book 1-on-1 slots with em" />
          <ProjectCard image="helalogo.png" name="hela talk" desc="my sexual wellness brand that serves as a safe space for all" tech="ruby on rails, reactJS" />
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
