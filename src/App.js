import React from 'react';
import styles from './App.module.css'

import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app_content}>
        <Navbar />
        <Home />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}