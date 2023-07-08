import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PDF from '../images/Resume.pdf'
function Resume() {
  return <div className="pageLayout">
  <Nav/>
  <div className="content">  
    <embed class="resume" type="application/pdf" src={PDF} />
  </div>
  <Footer/>  
</div>;
}

export default Resume