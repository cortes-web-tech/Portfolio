import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import '../App.css'
function About() {
return <div className="pageLayout">
<Nav/>
<div className="content">  
<div className='aboutWrapper'>
  <h2>Florida based software engineer.</h2>
  <p>
    After studying computer science at UCF, I've been working with <a href="https://www.fulcraevents.com/" target='_blank'>Fulcra</a>.
    <br/> I've been producing live/hybrid events.
    <br />Now I'm seeking a software engineering role.
    <br />
  </p>    
  <p>
    Throughout the years I've built several applications. 
    <br/>Some of which you can view on my <Link to="/Portfolio">portfolio</Link>.
  </p>
</div>
</div>
<Footer/>  
</div>;
}

export default About