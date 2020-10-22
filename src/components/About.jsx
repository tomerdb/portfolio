import React from "react";
import "../css/About.css";
import profilePicture from "../assets/img/about/profile3.jpeg"
import { Link } from 'react-router-dom';
function About() {

  return (
    <div>
      <section id="about">
        <div className="about__wrapper">
          <div className="about__container">
            <div data-aos="slide-right" className="profile__container">
              <div className="picture">
                <img src={profilePicture} alt="profile_pic"/>
              </div>
            </div>
            <div className="text__container">
              <div data-aos="fade-left" className="text__title">About Me</div>
              <div data-aos="fade-right" className="text__secendery">
              My name is Tomer, I'm a Front-End ReactJS Developer. Recently finished Coding boot-camp at Sv-College highly motivated new developer.
              </div>
              <div data-aos="fade-right" className="text__title">Contact Details</div>
              <div data-aos="fade-left" className="text__secendery">
                <div className="name">Tomer Harari</div>
                <div className="city">Tel aviv-Yafo</div>
                <div className="addres">Merkaz Baalei Melacha 4</div>
                <div className="phone">+972-52-6477-102</div>
                <div className="mail">Tomerdb@gmail.com</div>
              </div>
            </div>
            <div data-aos="fade-right" className="resume__container">
              <a href="">

              <div className="icon">
                <i className="fas fa-file-download"></i>
              </div>
              <div  className="resume__text">Download Resume</div>
              </a>
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
            {/* <a href="#resume"> */}
              <Link to="/resume" data-aos="fade-zoom-in" data-aos-anchor=".resume__container" className="next__pagerLink">
              <i style={{boxShadow:"5px 0px 15px 15px rgb(0, 0, 0,0.2)"}} className="fas fa-arrow-circle-down"></i>
              </Link>
            {/* </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
