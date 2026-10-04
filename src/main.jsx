import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { startSmoothScroll } from './lib/smoothScroll.js'

// Boot Lenis before first paint so every scroll (wheel, touch, anchors)
// glides through the whole single-page site.
startSmoothScroll()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
