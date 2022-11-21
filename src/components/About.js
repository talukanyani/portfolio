import React from 'react';
import styles from './About.module.css'

import about_illustration from '../assets/portfolio_logo.png'

export default function About() {
    return (
        <div className={styles.about} id='about'>
            <div className={styles.about_content}>
                <h1>About Me</h1>
                <p>
                    I'm a Full Stack Web Developer working with Javascript
                    and other web technologies to develop web apps.
                </p>
                <p>
                    My journey started in university when I was introduced to
                    programming with C and Octave GNU. I got more interested
                    in that and I wanted to build something cool that runs
                    using code<br />
                    ...and here I'm, programming and developing{' '}
                    <a href='/#projects'>something cool</a>, my aim is to
                    build something big!!
                </p>
            </div>
            <div className={styles.about_image}>
                <img src={about_illustration} alt='illustration' />
            </div>
        </div>
    )
}