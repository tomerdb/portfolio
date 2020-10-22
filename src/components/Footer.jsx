import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="icons__container">
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
            <div className="credits__container">
                <p>made with love by Tomer Harari ♥️</p>
            </div>
            <div id="go__top">
                {/* <a title="Back to Top" href="#home"> */}
                <Link to="/" title="Back to Top">
                    <i className="fas fa-arrow-down fa-rotate-180"></i>
                </Link>
                    {/* <i className="far fa-arrow-alt-circle-down fa-rotate-180"></i> */}
                {/* </a> */}
            </div>
        </footer>
    )
}

export default Footer
