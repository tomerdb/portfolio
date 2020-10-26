import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import "../css/NavBar.css";

function NavBar() {
    const navLinks2 = document.querySelectorAll(".nav-link");;
  // console.log(nav);
  // useEffect(() => {

  //   console.log("works");

  // }, [section])

  const handleHamburger = () => {
    const navLinks = document.querySelector(".nav-links");
    // const links = document.querySelectorAll(".nav-links li");
    // links.forEach
    navLinks.classList.toggle("open");
      }

  const closeHamburger = (e) => {
      const hamburgerLinks = document.querySelector(".nav-links");
      hamburgerLinks.classList.toggle("open");
  }
  return (
    <nav>
      <div onClick={handleHamburger} className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="nav-links">
        <li><Link onClick={closeHamburger} className="nav-link" to="/">HOME</Link></li>
        <li><Link onClick={closeHamburger} className="nav-link" to="/about">ABOUT</Link></li>
        <li><Link onClick={closeHamburger} className="nav-link" to="/resume">RESUME</Link></li>
        <li><Link onClick={closeHamburger} className="nav-link" to="/projects">PROJECTS</Link></li>
        <li><Link onClick={closeHamburger} className="nav-link" to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
