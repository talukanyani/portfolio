import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

import logo_img from '../assets/portfolio_logo.png'
import home_icon from '../assets/icon_home.svg'
import about_icon from '../assets/icon_about.svg'
import stack_icon from '../assets/icon_stack.svg'
import projects_icon from '../assets/icon_projects.svg'
import contact_icon from '../assets/icon_contact.svg'

export default function Navbar({ currentComp }) {
    return (
        <header className={styles.navbar}>
            <div className={styles.navbar_content}>
                <div className={styles.logo}>
                    <img src={logo_img} alt="logo" />
                </div>
                <Navigation currentComp={currentComp} />
            </div>
        </header>
    )
}

function Navigation({ currentComp }) {
    const scrollTo = (id) => {
        var element = document.getElementById(id)
        var position = element.getBoundingClientRect().top

        var offset = position + window.scrollY

        window.scrollTo(0, offset)
    }

    return (
        <nav className={styles.navigation}>
            <ul>
                <li
                    className={
                        currentComp === 0 ? styles.home_li : undefined
                    }
                    onClick={() => scrollTo('home')}
                >
                    <img src={home_icon} alt='icon' />
                    Home
                </li>
                <li
                    className={
                        currentComp === 1 ? styles.about_li : undefined
                    }
                    onClick={() => scrollTo('about')}
                >
                    <img src={about_icon} alt='icon' />
                    About
                </li>
                <li
                    className={
                        currentComp === 2 ? styles.stack_li : undefined
                    }
                    onClick={() => scrollTo('stack')}
                >
                    <img src={stack_icon} alt='icon' />
                    Stack
                </li>
                <li
                    className={
                        currentComp === 3 ? styles.projects_li : undefined
                    }
                    onClick={() => scrollTo('projects')}
                >
                    <img src={projects_icon} alt='icon' />
                    Projects
                </li>
                <li
                    className={
                        currentComp === 4 ? styles.contact_li : undefined
                    }
                    onClick={() => scrollTo('contact')}
                >
                    <img src={contact_icon} alt='icon' />
                    Contact
                </li>
            </ul>
        </nav>
    )
}