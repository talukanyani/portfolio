import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { positionOF, scrollTO } from '../hooks/functions';

export default function Navbar() {
    const [currentComp, setCurrentComp] = useState(1);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleScroll = () => {
        if (positionOF('overview').top < 200 && positionOF('overview').bottom > 200) {
            setCurrentComp(1);
            return;
        }

        // if (positionOF('about').top < 200 && positionOF('about').bottom > 200) {
        //   setCurrentComp(2)
        //   return
        // }

        if (positionOF('projects').top < 200 && positionOF('projects').bottom > 200) {
            setCurrentComp(3);
        }

        if (positionOF('sc').top < 200 && positionOF('sc').bottom > 200) {
            setCurrentComp(31);
            return;
        }
        if (positionOF('mweb').top < 200 && positionOF('mweb').bottom > 200) {
            setCurrentComp(32);
            return;
        }
        if (positionOF('mserver').top < 200 && positionOF('mserver').bottom > 200) {
            setCurrentComp(33);
            return;
        }

        if (positionOF('contact').top < 200 && positionOF('contact').bottom > 200) {
            setCurrentComp(4);
        }
    }

    return (
        <nav className={styles.navbar}>
            <section>
                <a href='/portfolio'>Talu</a>
            </section>
            <ul>
                <li
                    className={currentComp === 1 ? styles.current : undefined}
                    onClick={() => scrollTO('overview')}
                >
                    Overview
                </li>
                {/* <li
                    className={currentComp === 2 ? styles.current : undefined}
                    onClick={() => scrollTO('About')}
                >
                    About
                </li> */}
                <li
                    className={
                        (currentComp === 3 || currentComp === 31 || currentComp === 32 || currentComp === 33)
                            ? styles.current
                            : undefined
                    }
                    onClick={() => scrollTO('projects')}
                >
                    Projects
                    <input
                        type='radio'
                        name='projects'
                        checked={currentComp === 31}
                        onChange={() => scrollTO('sc')}
                    />
                    <input
                        type='radio'
                        name='projects'
                        checked={currentComp === 32}
                        onChange={() => scrollTO('mweb')}
                    />
                    <input
                        type='radio'
                        name='projects'
                        checked={currentComp === 33}
                        onChange={() => scrollTO('mserver')}
                    />
                </li>
                <li
                    className={currentComp === 4 ? styles.current : undefined}
                    onClick={() => scrollTO('contact')}
                >
                    Contact
                </li>
            </ul>
        </nav>
    )
}
