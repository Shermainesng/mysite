import React, { useEffect } from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-background border border-3 border-dark px-3">
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
                about
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                my works
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
