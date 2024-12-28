import { useState } from 'react'
import icetopbg from './assets/icetopbg.jpg'
import icebottombg from './assets/icebottombg.jpg'
import Hackstreet from './assets/Hackstreet.png'
import './App.css'

function App() {
  

  return (
    <div className='main'>
      <div className='toppart'></div>
      <h1 className='events-heading'><center>EVENTS</center></h1>
      
      <div className='content'>
        <div className='mainbox'>
          <div className=' box '>
            <img  className="poster" src={Hackstreet} alt="hackstreetimg"></img>
            <h2>HACKSTREET 2.0</h2>
            <h3>4th Feb 2025</h3>
          </div>

          <div className=' box '>eureka</div>
          <div className=' box '>eureka</div>
        </div>
      </div>

      <div className='bottompart'></div> 
     

    </div>
  )

}

export default App
