import styles from './Navbar.module.css'

import talu_img from '../assets/talu_image96x96.jpg'
import home from '../assets/icon_home.svg'
import education from '../assets/icon_education.svg'
import skills from '../assets/icon_skills.svg'
import projects from '../assets/icon_projects.svg'
import contact from '../assets/icon_contact.svg'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Header />
            <Navigation />
        </div>
    )
}

function Header() {
    return (
        <header className={styles.header}>
            <img
                src={talu_img}
                alt="Talukanyani's avatar"
            />
            <section>
                <h1>Talukanyani Mutshaeni</h1>
                <p>Full Stack Web Developer</p>
            </section>
        </header>
    )
}

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <img src={home} alt='icon' />
                    Home
                </li>
                <li>
                    <img src={education} alt='icon' />
                    Education
                </li>
                <li>
                    <img src={skills} alt='icon' />
                    Skills
                </li>
                <li>
                    <img src={projects} alt='icon' />
                    Projects
                </li>
                <li>
                    <img src={contact} alt='icon' />
                    Contact
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;