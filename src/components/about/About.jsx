import React from "react";
import "./about.css";
import passport from "../../img/passport.jpg";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>about me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={passport} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            {/* <article className="about_card">
              <RiAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article> */}

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>projects</h5>
              <small>10+ projects</small>
            </article>
          </div>

          <p>
            Hi, I'm Soumayadip Saha, a 3rd-year CSE student at Techno
            Engineering College Banipur. I'm passionate about learning and
            interested in web development and data analytics. I have experience
            in developing websites using HTML, CSS, JavaScript, php, MySQL. I'm
            also proficient in data cleaning, visualization, and analysis using
            Python libraries like Pandas and NumPy.
          </p>

          <a href="#contact" className="btn btn-primary">
            let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
