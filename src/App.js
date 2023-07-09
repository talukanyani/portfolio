import React, { useState, useEffect } from 'react';
import styles from './App.module.css'

import Navbar from './components/Navbar'
import Overview from './components/Overview';
import StudentCalendar from './components/StudentCalendar'
import Muts from './components/Muts'
import Contact from './components/Contact';

export default function App() {
  const [currentComp, setCurrentComp] = useState(1)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll = () => {
    if (position('overview').top < 300 && position('overview').bottom > 300) {
      setCurrentComp(1)
      return
    }

    if (position('sc').top < 300 && position('sc').bottom > 300) {
      setCurrentComp(2)
      return
    }

    if (position('muts').top < 300 && position('muts').bottom > 300) {
      setCurrentComp(3)
      return
    }

    if (position('contact').top < 300 && position('contact').bottom > 300) {
      setCurrentComp(4)
    }
  }

  const position = (id) => {
    var element = document.getElementById(id)
    return element.getBoundingClientRect()
  }

  return (
    <>
      <Navbar currentComp={currentComp} />
      <main className={styles.main}>
        <Overview />
        <StudentCalendar />
        <Muts />
        <Contact />
      </main>
    </>
  );
}
