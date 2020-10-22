import React from "react";
import "../css/Header.css";
import { Link } from 'react-router-dom';
// import NavBar from "./NavBar";

function Header() {
  return (
    <div>
      <section id="home">
        <div className="header__container">
          {/* <div className="navBar__container">
            <NavBar />
          </div> */}
          <div className="title__container">
            <div data-aos="flip-right" className="title">
              <h1>Hi I'm Tomer</h1>
            </div>
            <div data-aos="zoom-in" className="title__secendery">
              <h4>I'm Tel-Aviv Based <span>ReactJS Developer</span> Front-End React Developer</h4>
            </div>
            <div data-aos="zoom-in" className="header__links">
              <a href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div
            className="next__pager"
            style={{ bottom: 0, position: "absolute", paddingBottom: "20px" }}
          >
            {/* <a href="#about"> */}
              <Link to="/about" data-aos="fade-zoom-in" data-aos-anchor=".title" className="next__pagerLink">
              <i className="fas fa-arrow-circle-down"></i>
              </Link>
            {/* </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
