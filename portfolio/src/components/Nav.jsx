import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
function Nav() {
  return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Resume">Resume</Link>
    </div>
  )
}

export default Nav