import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h1>Title of the portfolio</h1>
      <nav className="menu">
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