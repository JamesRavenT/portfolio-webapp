import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Projects from '../pages/projects/projects'
import Navbar from './navbar/Navbar'
import SplashScreen from '../pages/splashscreen/SplashScreen'

export default function App() {  
  const [section, setSection] = useState('');


  return (
      <Router>
      <Routes>
        <Route element={<Navbar section={section}/>}>
          <Route path='/' element={<Home  section={section} setSection={setSection}/>} />
          <Route path='/projects' element={<Projects  />} />
        </Route>
      </Routes>
    </Router>
    // <Router>
    //   <Routes>
    //     {!isIntroDone ? (
    //       <Route path='/' element={<SplashScreen onDone={() => setState(true)} />} />
    //     ) : (
    //       <Route element={<Navbar theme={theme} toggle={toggle} section={section}/>}>
    //         <Route path='/home' element={<Home theme={theme} setSection={setSection}/>} />
    //         <Route path='/projects' element={<Projects theme={theme} />} />
    //       </Route>
    //     )}
    //   </Routes>
    // </Router>
  )
}