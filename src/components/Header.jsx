import React, { useEffect } from "react";
import "../css/Header.css";
import { Link } from 'react-router-dom';

function Header({handleNextPager}) {
  useEffect(() => {
    document.querySelector(".nav-links").classList.remove("resume-nav");
    const navLinks = document.querySelectorAll(".nav-link");
      for (const link of navLinks) {
        link.classList.remove("nav-selected")
      }
      navLinks[0].classList.add("nav-selected");
  }, [])


  return (
    <div>
      <section id="home">
        <div className="header__container">
          <div className="title__container">
            <div data-aos="flip-right" className="title">
              <h1>Hi I'm Tomer</h1>
            </div>
            <div data-aos="zoom-in" className="title__secendery">
              <h4>I'm Tel-Aviv Based <span>ReactJS Developer</span> Front-End React Developer</h4>
            </div>
            <div data-aos="zoom-in" className="header__links">
              <a href="https://www.facebook.com/tomer.harari.3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/in/tomer-harari-268928168/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="http://github.com/tomerdb">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div
            className="next__pager"
            style={{ bottom: 0, position: "absolute", paddingBottom: "20px" }}
          >
              <Link onClick={handleNextPager} to="/about" data-aos="zoom-in" data-aos-anchor=".title" className="next__pagerLink">
              <i id="home__i" className="fas fa-arrow-circle-down"></i>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
