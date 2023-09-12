import React from "react";
import "./education.css";
import {MdSchool} from 'react-icons/md'
import {GiBriefcase} from 'react-icons/gi'
import {SlCalender} from 'react-icons/sl'
const Education = () => {
  const school = [
    {
      id: 1,
      school: "Tokipur Rajlakshmi High School",
      sub: "secondary",
      year: "2012-2018",
    },
    {
      id: 2,
      school: "Adasimla Deshapran Vidyapith",
      sub: "higher secondary",
      year: "2018-2020",
    },
    {
      id: 3,
      school: "Techno Engineering College Banipur",
      sub: "b.tech",
      year: "2020-present",
    },
  ];

  const exp = [
    {
      id: 1,
      school: "coursera",
      sub: "web development",
      year: "2021-2022",
    },
    {
      id: 2,
      school: "coursera",
      sub: "data analytics",
      year: "6+month",
    },
    {
      id:3,
      school:"Nptel",
      sub:"IOT",
      year:"01/2022-04/2022"
    }
  ];
  return (
    <section id="education">
      <h5>My Journey</h5>
      <h2>qualification</h2>

      <div className="container education_container">
        <div className="schooling">
          <h5 className="heading"><MdSchool className="schooling-icon"/> education</h5>
          {school.map(({ id, school, sub, year }) => {
            return (
              <div key={id} className="school">
                <div className="circle"></div>
                <h3>{school}</h3>
                <h4>{sub}</h4>
                <h5 className="year"><SlCalender className="year-icon"/>{year}</h5>
              </div>
            );
          })}
        </div>

        <div className="learning">
          <h5 className="heading"><GiBriefcase className="schooling-icon"/> Learning Experience</h5>
          {exp.map(({ id, school, sub, year }) => {
            return (
              <div key={id} className="learn">
                <div className="circle"></div>
                <h3>{school}</h3>
                <h4>{sub}</h4>
                <h5 className="year"><SlCalender className="year-icon"/>{year}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
