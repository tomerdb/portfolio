import React from "react";
import { Link } from "react-router-dom";
import "../css/Projects.css";
function Projects() {
  return (
    <div>
      <section id="projects">
        <div className="projects__wrapper">
          <div className="projects__title">
            <p>Check out some of my works</p>
          </div>
          <div className="projects__container">
            <div className="project">
              <div className="project__box"></div>
              <div className="project__button">source</div>
            </div>
            <div className="project">
              <div className="project__box"></div>
              <div className="project__button">source</div>
            </div>
            <div className="project">
              <div className="project__box"></div>
              <div className="project__button">source</div>
            </div>
            <div className="project">
              <div className="project__box"></div>
              <div className="project__button">source</div>
            </div>
            <div className="project">
              <div className="project__box"></div>
              <div className="project__button">source</div>
            </div>
          </div>
          <div
            className="next__pager" id="projects__nextPager"
            style={{ bottom: 0, position: "absolute", paddingBottom: "20px" }}
          >
            {/* <a href="#contact"> */}
            <Link to="/contact" className="next__pagerLink">
              <i style={{boxShadow:"none"}} className="fas fa-arrow-circle-down"></i>
            </Link>
            {/* </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
