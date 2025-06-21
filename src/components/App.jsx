import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/homepage/homepage'
import Projects from '../pages/projects/projects'
import Navbar from './Navbar/Navbar'

export default function App() {
  const [theme, setTheme] = useState('Light')
  const toggle = () => {(theme == 'Dark') ? setTheme('Light') : setTheme('Dark') }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if(savedTheme === 'Dark' || savedTheme === 'Light'){
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'Dark' : 'Light')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Router>
      <Routes>
        <Route element={<Navbar theme={theme} toggle={toggle} />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  )
}