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
        click for more + my resume
      </button>
      <div id="more" className="collapse">
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-sm-6 col-md-3">
              <h2>hello</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
