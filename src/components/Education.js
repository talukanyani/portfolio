import styles from './Education.module.css'

import c from '../assets/c_logo.svg'
import octave from '../assets/octave_logo.svg'
import html from '../assets/html_logo.svg'
import css from '../assets/css_logo.svg'
import javascript from '../assets/javascript_logo.svg'
import nodejs from '../assets/nodejs_logo.svg'
import express from '../assets/express_logo.svg'
import react from '../assets/react_logo.svg'
import mysql from '../assets/mysql_logo.svg'

export default function Eductation() {
    return (
        <div className={styles.education}>
            <h1>Education</h1>
            <div className={styles.school}>
                <section>
                    <h2>Luphai Secondary School</h2>
                    <time datetime="2019-01-28">2014 - 2018</time>
                </section>
                <p>National Senior Certificate</p>
            </div>
            <div className={styles.school}>
                <section>
                    <h2>University of Johannesburg</h2>
                    <time datetime="2019-01-28">2019 - 2022</time>
                </section>
                <p>Bachelor of Engineering [BEng] - Mechanical Engineering</p>
            </div>
            <div>
                <h3>Technologies Studied from Varsity</h3>
                <ul>
                    <li>
                        <img src={c} alt='c icon' />
                        C Programming Language
                    </li>
                    <li>
                        <img src={octave} alt='octave icon' />
                        GNU Octave Scientific Programming Language
                    </li>
                </ul>

                <h3>Technologies Studied by Myself</h3>
                <ul>
                    <li>
                        <img src={javascript} alt='javascript icon' />
                        JavaScript Programming Language
                    </li>
                    <li>
                        <img src={html} alt='html icon' />
                        HyperText Markup Language
                    </li>
                    <li>
                        <img src={css} alt='css icon' />
                        Cascading Style Sheets
                    </li>
                    <li>
                        <img src={react} alt='react icon' />
                        React JavaScript Library
                    </li>
                    <li>
                        <img src={nodejs} alt='node.js icon' />
                        Node.js JavaScript Environment Runtime
                    </li>
                    <li>
                        <img src={express} alt='express icon' />
                        Express Node.js Framework
                    </li>
                    <li>
                        <img src={mysql} alt='mysql icon' />
                        MySQL Database Management System
                    </li>
                </ul>
            </div>
        </div >
    )
}