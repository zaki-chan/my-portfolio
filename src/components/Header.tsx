import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h1>Title of the portfolio</h1>
      <nav className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Skill</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header