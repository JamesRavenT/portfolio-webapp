import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/homepage/homepage'
import Projects from './pages/projects/projects'
import './main.css'

//MAIN

//JSX
createRoot(document.getElementById('root')).render(
  <StrictMode> 
      <Router>
        <Routes>
            <Route element={<Navbar />}>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            </Route>
        </Routes>
      </Router>
  </StrictMode>,
)
