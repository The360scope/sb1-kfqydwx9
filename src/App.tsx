import React, { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetEl = document.querySelector(href);
          targetEl?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;