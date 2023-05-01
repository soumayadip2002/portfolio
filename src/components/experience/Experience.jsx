import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>my skills</h2>

      <div className="container experience_container">
        <div className="frontend">
          <h3>frontend developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">
                Experience
                </small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Css</h4>
                <small className="text-light">
                Experience
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">
                  beginner
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className="backend">
          <h3>backend developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>C</h4>
                <small className="text-light">
                  Experienced
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">
                Experienced
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Mysql</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Php</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
