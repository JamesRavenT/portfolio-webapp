

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sample from './components/Sample'
import './main.css'

//MAIN
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Sample />
  </StrictMode>,
)
