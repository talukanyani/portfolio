import React, { useState, useEffect } from 'react';
import styles from './App.module.css'

import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentComp, setCurrentComp] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll = () => {
    if (position('home').top < 300 & position('home').bottom > 300) {
      setCurrentComp(0)
    }

    if (position('about').top < 300 & position('about').bottom > 300) {
      setCurrentComp(1)
    }

    if (position('stack').top < 300 & position('stack').bottom > 300) {
      setCurrentComp(2)
    }

    if (position('projects').top < 300 & position('projects').bottom > 300) {
      setCurrentComp(3)
    }

    if (position('contact').top < 300 & position('contact').bottom > 300) {
      setCurrentComp(4)
    }
  }

  const position = (id) => {
    var element = document.getElementById(id)
    return element.getBoundingClientRect()
  }

  return (
    <div className={styles.app}>
      <div className={styles.app_content}>
        <Navbar currentComp={currentComp} />
        <Home />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}