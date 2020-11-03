import React, { useEffect } from "react";
import "../css/About.css";
import profilePicture from "../assets/img/about/profile3.jpeg"
import { Link } from 'react-router-dom';
function About({handleNextPager}) {
  useEffect(() => {
    document.querySelector(".nav-links").classList.remove("resume-nav");
    const navLinks = document.querySelectorAll(".nav-link");
      for (const link of navLinks) {
        link.classList.remove("nav-selected")
      }
      navLinks[1].classList.add("nav-selected");
  }, [])
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
              Hi, i'm Tomer, I'm a Front-End ReactJS Developer who recently finished Coding boot-camp at Sv-College highly motivated new developer.
              </div>
              <div data-aos="fade-right" className="text__title">Contact Details</div>
              <div data-aos="fade-left" className="text__secendery">
                <div className="name">Tomer Harari</div>
                <div className="addres">4 Merkaz Baalei Melacha</div>
                <div className="city">Tel Aviv-Yafo, Israel</div>
                <div className="phone">+972 52-647-7102</div>
                <div className="mail">Tomerdb@gmail.com</div>
              </div>
            </div>
            <div data-aos="fade-right" className="resume__container">
              <a href="https://drive.google.com/file/d/1neXl-9iOyN0nsS274ZBtl9ost-f5Zgv1/view">

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
              <Link onClick={handleNextPager} to="/resume" data-aos="fade-zoom-in" data-aos-anchor=".resume__container" className="next__pagerLink">
              <i id="about__i" style={{boxShadow:"5px 0px 15px 15px rgb(0, 0, 0,0.2)"}} className="fas fa-arrow-circle-down"></i>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
