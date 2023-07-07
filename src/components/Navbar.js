import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ currentComp }) {
    const scrollto = (id) => {
        var element = document.getElementById(id)
        var position = element.getBoundingClientRect().top

        var offset = position + window.scrollY

        window.scrollTo(0, offset)
    }

    return (
        <nav className={styles.navbar}>
            <section>
                <a href='/portfolio'>Talu</a>
            </section>
            <ul>
                <li
                    className={currentComp === 1 ? styles.current : undefined}
                    onClick={() => scrollto('overview')}
                >
                    Overview
                </li>
                <li
                    className={(currentComp > 1 && currentComp < 4) ? styles.current : undefined}
                    onClick={() => scrollto('projects')}
                >
                    Projects
                    <input
                        type='radio'
                        name='projects'
                        checked={currentComp === 2}
                        onChange={() => scrollto('sc')}
                    />
                    <input
                        type='radio'
                        name='projects'
                        checked={currentComp === 3}
                        onChange={() => scrollto('muts')}
                    />
                </li>
                <li
                    className={currentComp === 4 ? styles.current : undefined}
                    onClick={() => scrollto('contact')}
                >
                    Contact
                </li>
            </ul>
        </nav>
    )
}
