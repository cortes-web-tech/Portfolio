import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Home() {
  return <div className="pageLayout">
  <Nav/>
  <div className="content">  
  <div className='aboutWrapper'>
    <h1>Alejandro Cortes</h1>
    <p>
        Software Developer<br />
        Data Analyst / Engineer<br />
        Live Event Producer ( AV / IT )
      </p>
      </div>
  </div>
  <Footer/>  
</div>;
}

export default Home