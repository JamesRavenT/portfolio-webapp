import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './main.css'


//MAIN


//JSX
createRoot(document.getElementById('root')).render(
  <StrictMode> 
      <App />
  </StrictMode>
)
