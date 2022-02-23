import React, { useEffect } from "react";

function Home() {
  return (
    <div className="container-fluid container-home">
      <div className="row justify-content-center row-custom">
        <div className="col-md-6 col-lg-6 ps-5">
          <div className="d-flex text-white">
            <div className="text">
              <h1>hi, I am Shermaine</h1>
              <p>nice to meet you. i am an innovative full stack developer, with experience in building products that solve problems creatively. </p>
              <p>i am passionate about creating products that inspire positive change and continuous improvements in society.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 text-center">
          <img className="mypic" src="mypic.jpg" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Home;
