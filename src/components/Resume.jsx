import React from "react";
import "../css/Resume.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
import fireBaseLogo from "../assets/icons/icons8-firebase.svg";
import mongodbLogo from "../assets/icons/icons8-mongodb.svg";
import { Link } from "react-router-dom";
function Resume() {
  return (
    <div>
      <section id="resume">
        <div className="resume__wrapper">
          <div className="education__container">
            <div className="resumeTitle__container">
              <div className="resume__title">
                <p>EDUCATION</p>
              </div>
            </div>
            <div className="school__container">
                <div className="school__title"><h3>Sv-College</h3></div>
                <div className="school__secondary">Front-End Course • 2020</div>
                <div className="school__third">Specialized in ReactJS</div>
            </div>
          </div>
          <div className="work__container">
            <div className="resumeTitle__container">
              <div className="resume__title">
                <p>WORK</p>
              </div>
            </div>
              <div className="school__container">
                <div className="school__title"><h3>Wild Dog</h3></div>
                <div className="school__secondary">COO • 2019 - now</div>
                <div className="school__third">• built buisness plan</div>
              </div>
          </div>
          <div className="skills__container">
            <div className="resumeTitle__container">
              <div className="resume__title">
                <p>SKILLS</p>
              </div>
            </div>
            <div className="skills__iconsContainer">
            <div className="skills__icons">
              <div data-aos="slide-right" className="skill__icon">
                <div className="skill__title">ReactJS</div>
                <div className="skill__iconContainer">
                 <i className="fab fa-react" style={{ color: "#4ED8FA" }}></i>
                </div>
              </div>
              <div className="skill__icon">
                <div className="skill__title">Javascript</div>
                <div className="skill__iconContainer">
                  <i className="fab fa-js-square" style={{ color: "#E4E426" }}></i> </div>
              </div>
              <div className="skill__icon">
                <div className="skill__title">Html5</div>
                <div className="skill__iconContainer">
                  <i className="fab fa-html5" style={{ color: "rgb(241, 101, 41)" }}></i> </div>
              </div>
              <div className="skill__icon">
                <div className="skill__title">Css3</div>
                <div className="skill__iconContainer">
                  <i className="fab fa-css3-alt" style={{ color: "#1C67BC" }}></i> </div>
              </div>
              </div>
              <div className="skills__icons">
                              <div className="skill__icon">
                <div className="skill__title">NodeJS</div>
                <div className="skill__iconContainer">
                        <i
          className="fab fa-node-js"
          style={{ color: "rgb(89, 151, 54)" }}
        ></i>
                </div>
              </div>
              <div className="skill__icon">
                <div className="skill__title">GitHub</div>
                <div className="skill__iconContainer">
                         <i className="fab fa-github"></i>
 </div>
              </div>
              <div className="skill__icon">
                <div className="skill__title">MongoDB</div>
                <div className="skill__iconContainer">
         <img src={mongodbLogo} alt="mongodbLogo"/>
</div>
              </div>
              <div className="skill__icon">
                <div className="skill__title">FireBase</div>
                <div className="skill__iconContainer">
                  
          <img src={fireBaseLogo} alt="firebaseLogo"/>
</div>
              </div>
              </div>
          </div>
          </div>
          <div
            className="next__pager"
            style={{
              position: "absolute",
              bottom: "0",
              paddingBottom: "20px",
            }}
            >
            {/* <a id="resume__nextPager" href="#projects"> */}
            <Link to="/projects" id="resume__nextPager" className="next__pagerLink">
              <i style={{boxShadow:"none"}} className="fas fa-arrow-circle-down"></i>
            </Link>
            {/* </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
