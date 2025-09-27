import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './navbar/Navbar';
import PageNotFound from './pages/_null/PageNotFound';

export default function App() {
  const [section, setSection] = useState('');

  return (
    <Router>
      <Routes>
        <Route element={<Navbar section={section} />}>
          <Route
            path="/"
            element={<Home section={section} setSection={setSection} />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
