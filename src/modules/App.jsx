import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Navbar from './navbar/Navbar';

export default function App() {
  const [section, setSection] = useState('');

  return (
    <Router>
      <Routes>
        <Route element={<Navbar section={section} />}>
          <Route path="/" element={<Home section={section} setSection={setSection} />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}
