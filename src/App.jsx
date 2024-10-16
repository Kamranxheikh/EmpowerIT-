
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Services from './pages/services';
import About from './pages/About';
import Webdev from './pages/Webdev';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/webdev" element={<Webdev />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
