import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer({handleNextPager}) {
    return (
        <footer>
            <div className="icons__container">
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
            <div className="credits__container">
                <p>made with love by Tomer Harari <span aria-labelledby="heart" role="img">♥️</span></p>
            </div>
            <div id="go__top">
                <Link onClick={handleNextPager} to="/" title="Back to Top">
                    <i id="footer__i" className="fas fa-arrow-down fa-rotate-180"></i>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
