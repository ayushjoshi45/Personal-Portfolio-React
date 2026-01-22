/**
 * Main App Component
 */

import React from 'react';
import { ErrorBoundary } from './components/common';
import MainLayout from './layouts/MainLayout';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <ErrorBoundary>
      <MainLayout>
        <section id="project">
          <Project />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </MainLayout>
    </ErrorBoundary>
  );
}

export default App;