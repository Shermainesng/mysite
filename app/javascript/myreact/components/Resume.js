import React, { useEffect } from "react";

function Resume() {
  function handleClick(e) {
    e.target.style.backgroundColor = "black";
    e.target.style.borderColor = "white";
    e.target.style.color = "white";
  }

  return (
    <div className="d-grid">
      <button onClick={handleClick} className="btn btn-primary button-long btn shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#more">
        click for my resume!
      </button>
      <div id="more" className="collapse">
        <div className="container-fluid container-resume">
          <div className="row justify-content-center flex-row">
            <div className="col-xs-10 col-sm-6 col-md-6 skill-card">
              <div className="card text-center card-custom my-4">
                <div className="card-header header-custom">
                  <h2 className="m-0">Technical Skills</h2>
                </div>
                <div className="card-body">
                  <h5 className="card-title">I love coding!</h5>
                  <a href="shermaine.pdf" target="_blank" class="btn btn-dark btn-custom">
                    <h3 className="m-0">my resume</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
