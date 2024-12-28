import { useState } from 'react'
import icetopbg from './assets/icetopbg.jpg'
import icebottombg from './assets/icebottombg.jpg'
import './App.css'

function App() {
  

  return (
    <div className='main'>
      <img  className="icewidth"   src={icetopbg} alt="icetop"></img>
      <img   className="icewidth"   src={icebottombg} alt="icebottom"></img>
    </div>
  )

}

export default App
