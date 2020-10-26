import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Projects.css";
import img from '../assets/img/projects/twitter-clone.png';
import img2 from '../assets/img/projects/google-store-loactor-clone.png';
import img3 from '../assets/img/projects/amazon-clone.png';
function Projects({handleNextPager}) {
    useEffect(() => {
    document.querySelector(".nav-links").classList.add("resume-nav");
    const navLinks = document.querySelectorAll(".nav-link");
      for (const link of navLinks) {
        link.classList.remove("nav-selected")
      }
      navLinks[3].classList.add("nav-selected");
  }, [])
  return (
    <div>
      <section id="projects">
        <div className="projects__wrapper">
          <div data-aos="zoom-in" className="projects__title">
            <p>Check out some of my works</p>
          </div>
          <div className="projects__container">
            <div data-aos="fade-right" className="project">
              <div className="project__box">
                <a href="https://zen-hopper-a64855.netlify.app">
                <img src={img} alt="twitter-clone"/>
                <div className="overlay">
                  <div className="overlay__text">
                  <h5>twitter-clone</h5>
                  <p>Express, NodeJS, HTML, CSS</p>
                  </div>
                  <div className="overlay__icon">
                     <i className="fa fa-link"></i>
                  </div>
                </div>
                </a>
              </div>
              <div className="project__button">
                <a href="https://github.com/tomerdb/twitter-clone">
                source
                </a>
                </div>
            </div>
             <div data-aos="fade-up" className="project">
              <div className="project__box">
                <a href="https://compassionate-banach-b560bd.netlify.app">
                <img src={img2} alt="Google-store-locator"/>
                <div className="overlay">
                  <div className="overlay__text">
                  <h5>Google-store-locator</h5>
                  <p>MongoDB, Express, NodeJS, Html, CSS</p>
                  </div>
                  <div className="overlay__icon">
                     <i className="fa fa-link"></i>
                  </div>
                </div>
                </a>
              </div>
              <div className="project__button">
                <a href="https://github.com/tomerdb/google-store-locator-clone">
                source
                </a>
                </div>
            </div>
             <div data-aos="fade-left" className="project">
              <div className="project__box">
                <a href="https://clone-5a923.web.app">
                <img src={img3} alt="amazon-clone"/>
                <div className="overlay">
                  <div className="overlay__text">
                  <h5>amazon-clone</h5>
                  <p>FireBase, Express, React, NodeJS</p>
                  </div>
                  <div className="overlay__icon">
                     <i className="fa fa-link"></i>
                  </div>
                </div>
                </a>
              </div>
              <div className="project__button">
                <a href="https://github.com/tomerdb/amazon-clone">
                source
                </a>
                </div>
            </div>
                        <div data-aos="fade-right" className="project">
              <div className="project__box">
                <a href="https://zen-hopper-a64855.netlify.app">
                <img src={img} alt="twitter-clone"/>
                <div className="overlay">
                  <div className="overlay__text">
                  <h5>twitter-clone</h5>
                  <p>Express, NodeJS, HTML, CSS</p>
                  </div>
                  <div className="overlay__icon">
                     <i className="fa fa-link"></i>
                  </div>
                </div>
                </a>
              </div>
              <div className="project__button">
                <a href="https://github.com/tomerdb/twitter-clone">
                source
                </a>
                </div>
            </div>
                        <div data-aos="fade-right" className="project">
              <div className="project__box">
                <a href="https://zen-hopper-a64855.netlify.app">
                <img src={img} alt="twitter-clone"/>
                <div className="overlay">
                  <div className="overlay__text">
                  <h5>twitter-clone</h5>
                  <p>Express, NodeJS, HTML, CSS</p>
                  </div>
                  <div className="overlay__icon">
                     <i className="fa fa-link"></i>
                  </div>
                </div>
                </a>
              </div>
              <div className="project__button">
                <a href="https://github.com/tomerdb/twitter-clone">
                source
                </a>
                </div>
            </div>
          </div>
          <div
            data-aos="zoom-in" data-aos-anchor=".project" className="next__pager" id="projects__nextPager"
            style={{ bottom: 0, position: "absolute", paddingBottom: "20px" }}
          >
            <Link onClick={handleNextPager} to="/contact" className="next__pagerLink">
              <i id="projects__i" style={{boxShadow:"none"}} className="fas fa-arrow-circle-down"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
