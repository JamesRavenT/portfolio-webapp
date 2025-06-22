import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Projects from '../pages/projects/projects'
import Navbar from './navbar/Navbar'
import SplashScreen from '../pages/splashscreen/SplashScreen'

export default function App() {  
  const [section, setSection] = useState('Home');
  const [isIntroDone, setState] = useState(false)
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
        {!isIntroDone ? (
          <Route path='/' element={<SplashScreen onDone={() => setState(true)} />} />
        ) : (
          <Route element={<Navbar theme={theme} toggle={toggle} section={section}/>}>
            <Route path='/home' element={<Home theme={theme} setSection={setSection}/>} />
            <Route path='/projects' element={<Projects theme={theme} />} />
          </Route>
        )}
      </Routes>
    </Router>
  )
}