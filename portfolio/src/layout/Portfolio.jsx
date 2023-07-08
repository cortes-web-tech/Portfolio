import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function Portfolio() {
return <div className="pageLayout">
<Nav/>
<div className="content">  
  <div className='portfolio'>
    <div className='--portfolio'>    
      
      <a href='https://viewMyTravels.com' target='_blank'>
      <button className='app'>
      <div className="text">
        <h4>View My Travels</h4>    
        <small>A Data visualization app.</small>
      </div>
      </button>
      </a>
      <div className='appNotReady'>
      <div className="text">
        <h4>Data App</h4>
        <small>D3, Rechartjs, react-vis</small>              
      </div>
      </div>
    </div>

    <div className='--portfolio'>
      <a href="https://inSessionEvent.com" target='_blank'>
      <button className='app'>
      <div className="text">
        <h4>inSession</h4>    
        <small>CRUD, Databases</small>
      </div>
      </button>
      </a>

      <div className='appNotReady'>
      <div className="text">
          <h4>KnottyLevie</h4>
          <small>(eCommerce Site)</small>
        </div>
      </div>
      </div>
    </div>
  </div>
  <Footer/>  
</div>;
}

export default Portfolio