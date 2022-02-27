import React, { useEffect } from "react";

function Home() {
  return (
    <div id="home">
      <div className="container-fluid container-home">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-lg-5 ps-4 pt-3">
            <div className="d-flex text-pink">
              <div className="text">
                <h1>hi, I am Shermaine</h1>
                <p>I am an innovative full stack developer, with experience in building products that solve problems creatively. </p>
                <p>On a journey of self-improvement and continuous learning and reflection, striving to be a better coder than I was yesterday</p>
                <p>I am passionate about joining companies to create products that inspire positive change and improvements in society.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 text-center">
            <img className="mypic" src="mypic.jpg" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
