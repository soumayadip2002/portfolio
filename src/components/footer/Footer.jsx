/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className="up">
        <a href="#">
          <BsFillArrowUpCircleFill />
        </a>
      </div>
      <a href="#" className="footer-logo">
        soumya
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#project">project</a>
        </li>
        <li>
          <a href="#service">service</a>
        </li>
        <li>
          <a href="#testimonals">testimonials</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer_social">
        <a href="https://www.facebook.com/soumyadip.saha.775" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/soumyadip8052/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/SoumayadipS" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; soumayadip saha. all rights revserved</small>
      </div>
    </footer>
  );
};

export default Footer;
