/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BsPersonWorkspace} from 'react-icons/bs';
import {BiMessageRoundedDetail} from 'react-icons/bi';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href="#project" onClick={()=>setActiveNav('#project')} className={activeNav==='#project'?'active':''}><BsPersonWorkspace/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav