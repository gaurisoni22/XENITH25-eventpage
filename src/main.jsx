import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Snowfall from 'react-snowfall'
import Confetti from 'react-confetti-boom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Snowfall
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  }}
/>
    <App />
    <Confetti mode="boom" particleCount={80} colors={['#ff577f', '#ff884b','#ffd384', '#fff9b0','#022d55','#223f65']} shapeSize={25} spreadDeg={50} />
  </StrictMode>,
)
