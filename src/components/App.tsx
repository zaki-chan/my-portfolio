import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Header from './Header'

// import pages
import Top from '../pages/top'
import Profile from '../pages/profile'
import Skill from '../pages/skill'
import Portfolio from '../pages/portfolio'
import Blog from '../pages/blog'
import Contact from '../pages/contact'

import "../styles/index.css";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <div className="font-bold underline">Hello World!</div>
    </>
  )
}

export default App