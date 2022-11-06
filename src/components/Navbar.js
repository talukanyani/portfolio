import styles from './Navbar.module.css'

import talu_img from '../assets/talu_image96x96.jpg'
import home from '../assets/icon_home.svg'
import education from '../assets/icon_education.svg'
import skills from '../assets/icon_skills.svg'
import projects from '../assets/icon_projects.svg'
import contact from '../assets/icon_contact.svg'

export default function Navbar(props) {
    return (
        <div className={styles.navbar}>
            <Header />
            <Navigation
                currentTab={props.currentTab}
                setToHome={props.setToHome}
                setToEdu={props.setToEdu}
                setToProjects={props.setToProjects}
                setToSkills={props.setToSkills}
                setToContact={props.setToContact}
            />
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

function Navigation(props) {
    var currentTab = props.currentTab

    return (
        <nav className={styles.navigation}>
            <ul>
                <li
                    onClick={props.setToHome}
                    className={
                        currentTab === 'home'
                            ? styles.home_li
                            : undefined
                    }
                >
                    <img src={home} alt='icon' />
                    Home
                </li>
                <li
                    onClick={props.setToEdu}
                    className={
                        currentTab === 'edu'
                            ? styles.edu_li
                            : undefined
                    }
                >
                    <img src={education} alt='icon' />
                    Education
                </li>
                <li
                    onClick={props.setToSkills}
                    className={
                        currentTab === 'skills'
                            ? styles.skills_li
                            : undefined
                    }
                >
                    <img src={skills} alt='icon' />
                    Skills
                </li>
                <li
                    onClick={props.setToProjects}
                    className={
                        currentTab === 'projects'
                            ? styles.projects_li
                            : undefined
                    }
                >
                    <img src={projects} alt='icon' />
                    Projects
                </li>
                <li
                    onClick={props.setToContact}
                    className={
                        currentTab === 'contact'
                            ? styles.contact_li
                            : undefined
                    }
                >
                    <img src={contact} alt='icon' />
                    Contact
                </li>
            </ul>
        </nav>
    )
}