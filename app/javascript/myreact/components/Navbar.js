import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-background border border-3 px-3 border-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home">
          <h2>sher</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="nav navbar-nav">
            <li>
              <Link className="nav-item nav-item-custom me-3" activeclass="active" to="home" spy={true} smooth={true} offset={-70} duration={300} href="#home">
                <span>home</span>
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-item-custom me-3" activeclass="active" to="myworks" spy={true} smooth={true} offset={-70} duration={300} href="#myworks">
                <span>my works</span>
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-item-custom me-3" activeclass="active" to="contact" spy={true} smooth={true} offset={-70} duration={300} href="#contact">
                <span>contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/* /* <nav className="navbar navbar-expand-lg navbar-light navbar-background border border-3 px-3 border-dark sticky-top">
<div className="container-fluid">
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
