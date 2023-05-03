import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  const frontend = [
    {
      id: 1,
      name: "HTML",
      level: "experienced",
    },
    {
      id: 2,
      name: "Css",
      level: "experienced",
    },
    {
      id: 3,
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      id: 4,
      name: "React Js",
      level: "Beginner",
    },
  ];

  const backend = [
    {
      id: 1,
      name: "C",
      level: "experienced",
    },
    {
      id: 2,
      name: "Java",
      level: "experienced",
    },
    {
      id: 3,
      name: "Python",
      level: "Intermediate",
    },
    {
      id: 4,
      name: "Mysql",
      level: "Intermediate",
    },

    {
      id: 5,
      name: "Django",
      level: "Intermediate",
    },

    {
      id: 6,
      name: "Php",
      level: "Intermediate",
    },
  ];
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>my skills</h2>

      <div className="container experience_container">
        <div className="frontend">
          <h3>frontend developement</h3>
          <div className="experience_content">
            {frontend.map(({ id, name, level }) => {
              return (
                <article key={id} className="experience_details">
                  <BsFillPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{name}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="backend">
          <h3>backend developement</h3>
          <div className="experience_content">
            {
              backend.map(({id, name, level})=>{
                return(
                  <article key={id} className="experience_details">
                  <BsFillPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{name}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
