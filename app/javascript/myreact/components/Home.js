import React, { useEffect } from "react";

function Home() {
  return (
    <div className="container-fluid container-home">
      <div className="row justify-content-center row-custom">
        <div className="col-lg-8 d-flex">
          <div className="d-flex text-white me-5">
            <div className="text align-self-center">
              <h1>hi, I am Shermaine</h1>
              <p>nice to meet you. i am an innovative full stack developer, with experience in building products that solve problems creatively. </p>
              <p>i am passionate about creating products that inspire positive change and continuous improvements in society.</p>
            </div>
          </div>
          <img className="mypic" src="mypic.jpg" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Home;
