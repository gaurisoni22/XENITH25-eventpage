import { useState } from 'react'
import icetopbg from './assets/icetopbg.jpg'
import icebottombg from './assets/icebottombg.jpg'
import './App.css'

function App() {
  

  return (
    <div className='main'>
      <div className='toppart'>
        <img src={icetopbg} alt='icetopbg' className='icewidth' />
        <div className="text-overlay">EVENTS</div>
      </div>
      
      <div className='content'>
        <div className='mainbox'>
          <div className=' box '>eureka</div>
          <div className=' box '>eureka</div>
          <div className=' box '>eureka</div>
        </div>
      </div>

      <div className='bottompart'></div> 
     

    </div>
  )

}

export default App
