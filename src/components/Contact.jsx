import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import '../css/Footer.css';
import "../css/Contact.css";
function Contact({handleNextPager}) {
    useEffect(() => {
    document.querySelector(".nav-links").classList.remove("resume-nav");
    const navLinks = document.querySelectorAll(".nav-link");
      for (const link of navLinks) {
        link.classList.remove("nav-selected")
      }
      navLinks[4].classList.add("nav-selected");
  }, [])

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("tomerdb@gmail.com");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
  };
  return (
    <div>
      <section id="contact">
        <div className="contact__container">
          <div className="contact__title">
            <i className="far fa-envelope"></i>
          </div>
          <form id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={name}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={email}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  value={subject}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="5"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button type="submit" onClick={handleClick} className="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
          <div className="text__container" style={{paddingRight:"100px"}}>
            <div className="text__title">Address and phone</div>
            <div className="text__secendery" style={{width:"auto"}}>
              <div className="name">Tomer Harari</div>
              <div className="city">Tel aviv-Yafo</div>
              <div className="addres">Merkaz Baalei Melacha 4</div>
              <div className="phone">+972-52-6477-102</div>
            </div>
          </div>
        </div>
      </section>
      <Footer handleNextPager={handleNextPager}/>
    </div>
  );
}

export default Contact;
