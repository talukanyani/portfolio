import React from 'react';
import styles from './App.module.css'

import Navbar from './components/Navbar'
import Home from './components/Home';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Skills from './components/Skills';
// import Eductation from './components/Education';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app_content}>
        <Navbar />
        <Home />
        {/* <Eductation /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </div>
    </div>
  );
}