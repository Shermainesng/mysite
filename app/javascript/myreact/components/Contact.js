import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="contact">
      <div className="container-fluid container-contact">
        <div className="row justify-content-between align-items-center row-custom-contact">
          <div className="social col-xs-12 col-lg-4">
            <ul className="d-flex flex-row m-0 justify-content-evenly p-0">
              <li>
                <a target="_blank" href="https://linkedin.com/in/shermainesng005">
                  <span className="media-link">LinkedIn</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/Shermainesng">
                  <span className="media-link">Github</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://medium.com/@shermainesng">
                  <span className="media-link">Medium</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="mailto:sngshermaine98@gmail.com?subject=Let's Talk">
                  <FontAwesomeIcon className="envelope" icon={faEnvelopeOpen} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
