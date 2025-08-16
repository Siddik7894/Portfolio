// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import './style.css';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    // Initialize ScrollReveal animations
    ScrollReveal().reveal('.navbar', {
      origin: 'top',
      distance: '20px',
      duration: 800,
      delay: 200,
      reset: false,
    });

    ScrollReveal().reveal('.hero-left', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 300,
      reset: false,
    });

    ScrollReveal().reveal('.hero-right', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 500,
      reset: false,
    });

    ScrollReveal().reveal('.about-img', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    ScrollReveal().reveal('.about-content', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 300,
      reset: false,
    });

    ScrollReveal().reveal('.contact-section', {
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 300,
      reset: false,
    });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
