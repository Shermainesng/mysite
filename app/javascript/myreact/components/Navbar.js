import React, { useEffect } from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-background border border-3 px-3 border-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          sher
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <span>about</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>my works</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>blog</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/* /* <nav class="navbar navbar-expand-lg navbar-light navbar-background border border-3 px-3 border-dark sticky-top">
<div class="container-fluid">
  <a class="navbar-brand" href="#">
    sher
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse navbar-cats" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          <span>about</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span>my works</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span>blog</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span>contact</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>; */

export default Navbar;
