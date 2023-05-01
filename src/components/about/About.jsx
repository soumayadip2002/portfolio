import React from "react";
import "./about.css";
import passport from "../../img/passport.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>about me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={passport} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <RiAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>clients</h5>
              <small>200+worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>projects</h5>
              <small>10+ projects</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            aliquid cupiditate beatae. Est accusamus, beatae ullam iure quos
            aspernatur impedit ducimus obcaecati voluptas eum reprehenderit
            adipisci fugit consequatur ex consequuntur illum quod fugiat
            distinctio sed vero, nam magnam. Maiores, labore. Perspiciatis, at.
            Iste hic mollitia iure, sequi doloremque quidem nemo.
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
