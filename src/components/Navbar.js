import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { positionOfComponentWithId, scrollToComponetWithId } from '../hooks/functions';

export default function Navbar() {
  const [currentComp, setCurrentComp] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll = () => {
    if (positionOfComponentWithId('overview').top < 240 && positionOfComponentWithId('overview').bottom > 240) {
      setCurrentComp(1);
      return;
    }

    if (positionOfComponentWithId('skills').top < 240 && positionOfComponentWithId('skills').bottom > 240) {
      setCurrentComp(2)
      return
    }

    if (positionOfComponentWithId('projects').top < 240 && positionOfComponentWithId('projects').bottom > 240) {
      setCurrentComp(3);
    }

    if (positionOfComponentWithId('contact').top < 240 && positionOfComponentWithId('contact').bottom > 240) {
      setCurrentComp(4);
    }
  }

  return (
    <nav className={styles.navbar}>
      <section className={styles.logo}>
        <a href='/portfolio'>Talu</a>
      </section>
      <ul className={styles.navigations}>
        <li
          className={currentComp === 1 ? styles.current : undefined}
          onClick={() => scrollToComponetWithId('overview')}
        >
          Overview
        </li>
        <li
          className={currentComp === 2 ? styles.current : undefined}
          onClick={() => scrollToComponetWithId('skills')}
        >
          Skills
        </li>
        <li
          className={(currentComp === 3) ? styles.current : undefined}
          onClick={() => scrollToComponetWithId('projects')}
        >
          Projects
        </li>
        <li
          className={(currentComp === 4) ? styles.current : undefined}
          onClick={() => scrollToComponetWithId('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  )
}
