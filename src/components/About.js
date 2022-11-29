import React from 'react';
import styles from './About.module.css'

import about_illustration from '../assets/about_illustration.png'

export default function About() {
    const scrollTo = (id) => {
        var element = document.getElementById(id)
        var position = element.getBoundingClientRect().top

        var offset = position + window.scrollY

        window.scrollTo(0, offset)
    }

    return (
        <div className={styles.about} id='about'>
            <div className={styles.about_content}>
                <h1>About Me</h1>
                <p>
                    I'm a Software Developer working with Javascript, Dart, and <span onClick={() => scrollTo('stack')}>other technologies</span> to develop <span onClick={() => scrollTo('stack')}>web and mobile apps</span>.
                </p>
                <p>
                    My journey in tech started in University of Johannesburg while studying Mechanical Engineering. I was introduced to programming with C and Octave GNU, I got more interested and started learning more technologies by myself.
                </p>
                <p>
                    I have gained experience in both frontend and backend development. I'm open to use my existing skills and eager to learn more.
                </p>
            </div>
            <div className={styles.about_image}>
                <img src={about_illustration} alt='illustration' />
            </div>
        </div>
    )
}