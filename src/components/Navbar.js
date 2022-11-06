import styles from './Navbar.module.css'

import talu_img from '../assets/talu_image96x96.jpg'
import home from '../assets/icon_home.svg'
import education from '../assets/icon_education.svg'
import skills from '../assets/icon_skills.svg'
import projects from '../assets/icon_projects.svg'
import contact from '../assets/icon_contact.svg'

export default function Navbar({
    currentTab,
    setToHome,
    setToEdu,
    setToSkills,
    setToProjects,
    setToContact
}) {
    return (
        <div className={styles.navbar}>
            <Header />
            <Navigation
                currentTab={currentTab}
                setToHome={setToHome}
                setToEdu={setToEdu}
                setToProjects={setToProjects}
                setToSkills={setToSkills}
                setToContact={setToContact}
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

function Navigation({
    currentTab,
    setToHome,
    setToEdu,
    setToSkills,
    setToProjects,
    setToContact
}) {

    return (
        <nav className={styles.navigation}>
            <ul>
                <li
                    onClick={setToHome}
                    className={
                        currentTab === 0
                            ? styles.home_li
                            : undefined
                    }
                >
                    <img src={home} alt='icon' />
                    Home
                </li>
                <li
                    onClick={setToEdu}
                    className={
                        currentTab === 1
                            ? styles.edu_li
                            : undefined
                    }
                >
                    <img src={education} alt='icon' />
                    Education
                </li>
                <li
                    onClick={setToSkills}
                    className={
                        currentTab === 2
                            ? styles.skills_li
                            : undefined
                    }
                >
                    <img src={skills} alt='icon' />
                    Skills
                </li>
                <li
                    onClick={setToProjects}
                    className={
                        currentTab === 3
                            ? styles.projects_li
                            : undefined
                    }
                >
                    <img src={projects} alt='icon' />
                    Projects
                </li>
                <li
                    onClick={setToContact}
                    className={
                        currentTab === 4
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