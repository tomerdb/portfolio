import React, { useEffect } from "react";
import "../css/Resume.css";
import fireBaseLogo from "../assets/icons/icons8-firebase.svg";
import mongodbLogo from "../assets/icons/icons8-mongodb.svg";
import { Link } from "react-router-dom";
function Resume({handleNextPager}) {
  useEffect(() => {
    document.querySelector(".nav-links").classList.add("resume-nav");
    const navLinks = document.querySelectorAll(".nav-link");
      for (const link of navLinks) {
        link.classList.remove("nav-selected")
      }
      navLinks[2].classList.add("nav-selected");
  }, [])
  return (
    <div>
      <section id="resume">
        <div className="resume__wrapper">
          <div className="education__container">
            <div className="resumeTitle__container">
              <div data-aos="zoom-in" className="resume__title">
                <p>EDUCATION</p>
              </div>
            </div>
            <div className="school__wrapper">
            <div data-aos="fade-right" className="school__container">
                <div className="school__title"><h3>Sv-College</h3></div>
                <div className="school__secondary">Front-End Development Course • 2020</div>
                <div className="school__third">Specialized in ReactJS</div>
            </div>
            </div>
          </div>
          <div className="work__container">
            <div data-aos="zoom-in" className="resumeTitle__container">
              <div className="resume__title">
                <p>WORK</p>
              </div>
            </div>
              <div className="school__wrapper">
              <div data-aos="fade-right" className="school__container">
                <div className="school__title"><h3>Wild Dog Cold Brew (Start-Up)- Tel Aviv, Israel</h3></div>
                <div className="school__secondary">Operations Manager • 2019 - Present</div>
                <div className="school__third">• Assisted in development during early stages of cold <span id="resume__responsive6">brew start-up </span><br/><span>- Product production and marketing</span><br/><span>- Customer communication</span></div>
                <div className="school__third">• Developed business plan</div>
                <div className="school__third">• General business development; nurtured industry <span id="resume__responsive7">relationships <span id="resume__responsive5">with <span id="resume__responsive4">leading companies</span></span></span></div>
              </div>
              <div data-aos="fade-right" data-aos-anchor=".school__wrapper" className="school__container">
                <div className="school__title"><h3>American Embassy - Tel Aviv, Israel</h3></div>
                <div className="school__secondary">Security Team Shift Manager • 2017 - 2019</div>
                <div className="school__third">• Responsible for security team briefings</div>
                <div className="school__third">• Accountable for visitor and employee safety <br/><span>- Early promotion to Senior Guard</span><br/><span>- Exhibited excellence, motivation, and ability to <span id="resume__responsive8">perform under <span id="resume__responsive3">pressure <span id="resume__responsive2">while maintaining </span></span></span><span id="resume__responsive">professionalism</span></span></div>
              </div>
              <div data-aos="fade-right" data-aos-anchor=".school__wrapper" className="school__container">
                <div className="school__title"><h3>Abu Kayak</h3></div>
                <div className="school__secondary">Manager • 2015 - 2017</div>
                <div className="school__third">• Responsible for operations of kayak site <br/><span>- Manager of 40 employee</span><br/><span>- Responsible for managing work scheduling</span></div>
                <div className="school__third">• Managed safety briefings for visitors and employees<br/><span>- Responsible for safety and enjoyment of visitors</span></div>
              </div>
              </div>
          </div>
          <div className="skills__container">
            <div data-aos="zoom-in" className="resumeTitle__container">
              <div className="resume__title">
                <p>SKILLS</p>
              </div>
            </div>
            <div className="skills__iconsContainer">
            <div className="skills__icons">
              <div data-aos="fade-right" className="skill__icon">
                <div className="skill__title">ReactJS</div>
                <div className="skill__iconContainer">
                 <i className="fab fa-react" style={{ color: "#4ED8FA" }}></i>
                </div>
              </div>
              <div data-aos="fade-down" className="skill__icon">
                <div className="skill__title">Javascript</div>
                <div className="skill__iconContainer">
                  <i className="fab fa-js-square" style={{ color: "#E4E426" }}></i> </div>
              </div>
              <div data-aos="fade-down" className="skill__icon">
                <div className="skill__title">Html5</div>
                <div className="skill__iconContainer">
                  <i className="fab fa-html5" style={{ color: "rgb(241, 101, 41)" }}></i> </div>
              </div>
              <div data-aos="fade-left" className="skill__icon">
                <div className="skill__title">Css3</div>
                <div className="skill__iconContainer">
                  <i className="fab fa-css3-alt" style={{ color: "#1C67BC" }}></i> </div>
              </div>
              </div>
              <div data-aos="fade-left" data-aos-anchor=".skills__icons" className="skills__icons">
                              <div className="skill__icon">
                <div className="skill__title">NodeJS</div>
                <div className="skill__iconContainer">
                        <i
          className="fab fa-node-js"
          style={{ color: "rgb(89, 151, 54)" }}
        ></i>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-anchor=".skills__icons" className="skill__icon">
                <div className="skill__title">GitHub</div>
                <div className="skill__iconContainer">
                         <i className="fab fa-github"></i>
 </div>
              </div>
              <div data-aos="fade-up" data-aos-anchor=".skills__icons" className="skill__icon">
                <div className="skill__title">MongoDB</div>
                <div className="skill__iconContainer">
         <img src={mongodbLogo} alt="mongodbLogo"/>
</div>
              </div>
              <div data-aos="fade-left" data-aos-anchor=".skills__icons" className="skill__icon">
                <div className="skill__title">FireBase</div>
                <div className="skill__iconContainer">
                  
          <img src={fireBaseLogo} alt="firebaseLogo"/>
</div>
              </div>
              </div>
          </div>
          </div>
          <div
            data-aos="zoom-in" data-aos-anchor=".fa-github"
            className="next__pager"
            style={{
              position: "absolute",
              bottom: "0",
              paddingBottom: "20px",
            }}
            >
            <Link onClick={handleNextPager} to="/projects" id="resume__nextPager" className="next__pagerLink">
              <i id="resume__i" className="fas fa-arrow-circle-down"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
