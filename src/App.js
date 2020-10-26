import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const handleNextPager = (e) => {
    const navLinks = document.querySelectorAll(".nav-link");
    if (e.target.id === "home__i") {
      navLinks[0].classList.remove("nav-selected");
      navLinks[1].classList.add("nav-selected");
    } else if (e.target.id === "about__i") {
      navLinks[1].classList.remove("nav-selected");
      navLinks[2].classList.add("nav-selected");
    } else if (e.target.id === "resume__i") {
      navLinks[2].classList.remove("nav-selected");
      navLinks[3].classList.add("nav-selected");
    } else if (e.target.id === "projects__i") {
      navLinks[3].classList.remove("nav-selected");
      navLinks[4].classList.add("nav-selected");
    } else if (e.target.id === "footer__i") {
      navLinks[4].classList.remove("nav-selected");
      navLinks[0].classList.add("nav-selected");
    }
  };
  return (
    <div id="app">
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <Home handleNextPager={handleNextPager} />;
            }}
          />
          <Route
            exact
            path="/about"
            component={() => {
              return <About handleNextPager={handleNextPager} />;
            }}
          />
          <Route
            exact
            path="/resume"
            component={() => {
              return <Resume handleNextPager={handleNextPager} />;
            }}
          />
          <Route
            exact
            path="/projects"
            component={() => {
              return <Projects handleNextPager={handleNextPager} />;
            }}
          />
          <Route
            exact
            path="/contact"
            component={() => {
              return <Contact handleNextPager={handleNextPager} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
