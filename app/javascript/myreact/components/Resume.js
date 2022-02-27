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
        my resume
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
                  <h5 className="card-title">
                    <u>one-liner summary of my resume:</u>
                    <br /> I am a <strong>Communications major</strong> with a specialization in research and have published two papers, interned at a start up in NYC as a <strong>data analyst</strong> for a year, and then jumped wholeheartedly into the exciting world of <strong>web development</strong>
                  </h5>
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
