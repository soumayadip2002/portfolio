import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {TfiEmail} from 'react-icons/tfi';
const Social = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/soumayadip-saha-a839911b5" target='blank'><BsLinkedin/> </a>
        <a href="https://github.com/soumayadip2002" target='blank'><FaGithub/> </a>
        <a href="mailto:sinuroy696@gmail.com" target='blank'><TfiEmail/></a>
    </div>
  )
}

export default Social