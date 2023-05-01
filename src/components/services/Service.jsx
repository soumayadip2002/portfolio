import React from "react";
import "./service.css";
import { FiCheck } from "react-icons/fi";
const Service = () => {
  return (
    <section id="service">
      <h5>what i offer</h5>
      <h2>services</h2>
      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX design</h3>
          </div>

          <ul className="service_list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>web development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
