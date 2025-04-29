import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Services as ServicesSection } from './components/sections/Services';
import { About as AboutSection } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import Team from './components/sections/Team';

const HomePage = () => (
  <>
    <Hero />
    <ServicesSection />
    <AboutSection />
    <Contact />
  </>
);

const AboutPage = () => (
  <>
    <AboutSection />
    <Contact />
  </>
);

const ServicesPage = () => (
  <>
    <ServicesSection />
    <Contact />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
