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
  return (
    <div id="app">
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <Home />;
            }}
          />
          {/* <Header /> */}
          <Route
            exact
            path="/about"
            component={() => {
              return <About />;
            }}
          />
          {/* <About /> */}
          <Route
            exact
            path="/resume"
            component={() => {
              return <Resume />;
            }}
          />
          {/* <Resume /> */}
          <Route
            exact
            path="/projects"
            component={() => {
              return <Projects />;
            }}
          />
          {/* <Projects /> */}
          <Route
            exact
            path="/contact"
            component={() => {
              return <Contact />;
            }}
          />
          {/* <Contact /> */}
          {/* <Footer /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
