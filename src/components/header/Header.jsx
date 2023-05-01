import React from "react";
import "./header.css";
import CTA from './CTA';
import bio from '../../img/bio.png';
import Social from "./Social";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Soumayadip Saha</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA></CTA>
        <Social></Social>

        <div className="me">
          <img src={bio} alt="" />
        </div>

        <a href="#contact" className="scroll_down">scroll down</a>
      </div>
    </header>
  );
};

export default Header;
