import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>soumya</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#project">project</a></li>
        <li><a href="#service">service</a></li>
        <li><a href="#testimonals">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com" target='_blank'><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; soumayadip saha. all rights revserved</small>
      </div>
    </footer>
  )
}

export default Footer