import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import "../styles/index.css";

const Header = () => {
  return (
    <div className='header flex bg-gray-200'>
      <h1 className='w-[30%]'>Title of the portfolio</h1>
      <nav className="w-[70%] menu">
        <ul>
          <li><Link to='/'>Top</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/skill'>Skill</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Header