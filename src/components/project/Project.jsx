import React from "react";
import "./project.css";
import IMG1 from "../../img/blog.jpg";
import IMG2 from "../../img/calculator.jpg";
import IMG3 from "../../img/e-commerce.png";
import IMG4 from "../../img/Beige minimalist photo collage.png";
import IMG5 from "../../img/Green natural waterfall photo collage.png";
import IMG6 from "../../img/RSP Confarence Hub Publication C.jpg";
import IMG7 from "../../img/divorce_page-0001.jpg";
import IMG8 from "../../img/port.png";
import IMG9 from "../../img/spotify.webp";
import IMG10 from "../../img/tourist.png";

const project_data = [
  {
    id: 1,
    image: IMG1,
    title: "Content Management System",
    github: "https://github.com/soumayadip2002/Blog",
    demo: "https://thethoughtbox.000webhostapp.com/",
  },

  {
    id: 2,
    image: IMG2,
    title: "calculator",
    github: "https://github.com/soumayadip2002/Calculator",
    demo: "https://soumayadip2002.github.io/Calculator/",
  },

  {
    id: 3,
    image: IMG3,
    title: "e commerce website",
    github: "https://github.com/soumayadip2002/E-Commerce",
    demo: "https://soumayadip2002.github.io/E-Commerce/",
  },

  {
    id: 4,
    image: IMG4,
    title: "food shop",
    github: "https://github.com/soumayadip2002/Online-Food-Shop",
    demo: "https://soumayadip2002.github.io/Online-Food-Shop/",
  },

  {
    id: 5,
    image: IMG5,
    title: "Grocery Shop",
    github: "https://github.com/soumayadip2002/Grocery-Shop-2.0",
    demo: "https://soumayadip2002.github.io/Grocery-Shop-2.0/",
  },

  {
    id: 6,
    image: IMG6,
    title: "crime rate prediction",
    github: "https://ijarcce.com/wp-content/uploads/2022/05/IJARCCE.2022.114100.pdf",
    demo: "https://ijarcce.com/wp-content/uploads/2022/05/IJARCCE.2022.114100.pdf",
  },

  {
    id: 7,
    image: IMG7,
    title: "divorce rate prediction",
    github: "https://ijetms.in/Vol-7-issue-2/Vol-7-Issue-2-24.html",
    demo: "https://ijetms.in/Vol-7-issue-2/Vol-7-Issue-2-24.html",
  },

  {
    id: 8,
    image: IMG8,
    title: "portfolio",
    github: "https://github.com/soumayadip2002/Personal-Portfolio",
    demo: "https://soumya-woad.vercel.app/",
  },

  {
    id: 9,
    image: IMG9,
    title: "Music website",
    github: "https://github.com/soumayadip2002/Soumya-",
    demo: "https://soumayadip2002.github.io/Soumya-/",
  },

  {
    id: 10,
    image: IMG10,
    title: "Tourist guide",
    github: "https://github.com/soumayadip2002/Tourist",
    demo: "https://soumayadip2002.github.io/Tourist/",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h5>my recent work</h5>
      <h2>projects</h2>

      <div className="container project_container">
        {project_data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
