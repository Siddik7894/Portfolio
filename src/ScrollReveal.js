// src/hooks/useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
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
};

export default useScrollReveal;
