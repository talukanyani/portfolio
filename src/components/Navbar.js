import React from 'react'
import styles from './Navbar.module.css'

import logo_img from '../assets/portfolio_logo.png'
import home_icon from '../assets/icon_home.svg'
import about_icon from '../assets/icon_about.svg'
import stack_icon from '../assets/icon_stack.svg'
import projects_icon from '../assets/icon_projects.svg'
import contact_icon from '../assets/icon_contact.svg'

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.navbar_content}>
                <div className={styles.logo}>
                    <img src={logo_img} alt="logo" />
                </div>
                <Navigation />
            </div>
        </header>
    )
}

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <a href='/#'>
                        <img src={home_icon} alt='icon' />
                        Home
                    </a>
                </li>
                <li>
                    <a href='/#about'>
                        <img src={about_icon} alt='icon' />
                        About
                    </a>
                </li>
                <li>
                    <a href='/#Stack'>
                        <img src={stack_icon} alt='icon' />
                        Stack
                    </a>
                </li>
                <li>
                    <a href='/#projects'>
                        <img src={projects_icon} alt='icon' />
                        Projects
                    </a>
                </li>
                <li>
                    <a href='/#contact'>
                        <img src={contact_icon} alt='icon' />
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}