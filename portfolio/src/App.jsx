import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './layout/Home'
import About from './layout/About'
import Portfolio from './layout/Portfolio'
import Resume from './layout/Resume'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Portfolio" element={<Portfolio />} />
      <Route path="Resume" element={<Resume />} />
      </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
