import React from 'react'
import { createPortal } from 'react-dom'
import styles from './Project.module.css'

import { useHandlePortal } from '../hooks/useHandlePortal'
import Modal from './Modal'

import sc_home from '../assets/images/sc_home_screen.png'
import play_store_icon from '../assets/icons/play_store.svg'
import github_icon from '../assets/icons/github.svg'



export default function StudentCalendar() {
    const [
        isPortal,
        isModal,
        openModal,
        closeModal,
    ] = useHandlePortal()

    const repoLink = 'https://github.com/talukanyani/student_calendar_app'
    const playStoreLink = (
        'https://play.google.com/store/apps/details?id=com.muts.studentcalendar'
    )

    return (
        <>
            <div id='sc' className={styles.sc}>
                <h2>Student Calendar App</h2>
                <div>
                    <section className={styles.picture}>
                        <img src={sc_home} alt='Student Calendar home screen' />
                    </section>
                    <div>
                        <p className={styles.description}>
                            An Android and iOS mobile app for students to easily manage
                            their academic activities.
                        </p>
                        <button className={styles.case_study_btn} onClick={() => openModal()}>
                            Case Study
                        </button>
                        <section className={styles.product_btns}>
                            <button>
                                <a target='_blank' rel='noreferrer' href={playStoreLink}>
                                    <img src={play_store_icon} alt='Play Store icon buttton' />
                                </a>
                            </button>
                        </section>
                        <section className={styles.code_btns}>
                            <button>
                                <a target='_blank' rel='noreferrer' href={repoLink}>
                                    <img src={github_icon} alt='GitHub icon' />
                                    Repository
                                </a>
                            </button>
                        </section>
                        <div className={styles.tools}>
                            <section>
                                <p>Technologies used:</p>
                                <p>Dart, Flutter, Firebase, Flutter Riverpod</p>
                            </section>
                            <section>
                                <p>Tools used:</p>
                                <p>Android Studio, Jira, Git, GitHub</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            {isPortal && createPortal(
                <CaseStudyModal isOpen={isModal} close={closeModal} />,
                document.body,
            )}
        </>
    )
}

function CaseStudyModal({ isOpen, close }) {
    return (
        <Modal isOpen={isOpen} close={close}>
            <div className={styles.case_study}>
                <h3>Student Calendar</h3>

                <p>
                    An Android and iOS mobile app for students to easily manage
                    their academic activities.
                    <br />
                    The app aimed to provide a centralized platform for students
                    to efficiently manage and track their assessments, exams,
                    project due dates, and extracurricular activities.
                </p>

                <p>
                    My biggest aim on this project was not just getting things done,
                    I focused more on learning and writing clean and readable code,
                    ensuring maintanability and scalability of code base and also
                    ensuring the app's performance remains smooth and responsive.
                </p>

                <p>Here are key features I have implemented:</p>
                <ul>
                    <li>Adding, editing, and deleting subjects/modules.</li>
                    <li>Adding, editing, deleting, and rescheduling activities.</li>
                    <li>Tables</li>
                    <ul>
                        <li>Users can visualise their schedule in table format.</li>
                    </ul>
                    <li>Calendar</li>
                    <ul>
                        <li>
                            Users can visualise their schedule in calendar view.
                            With dynamic dates, the date becomes green when there is activity
                            on that date and more greener when there are more activities.
                            Users can also press on a day to see activities on specific date.
                        </li>
                    </ul>
                    <li>Caching</li>
                    <ul>
                        <li>
                            Data such as activities and settings are stored
                            and retrieved from app storage.
                        </li>
                    </ul>
                    <li>Syncing</li>
                    <ul>
                        <li>
                            Data such as activities are stored and retrieved from
                            cloud database.
                        </li>
                    </ul>
                    <li>Authentication</li>
                    <ul>
                        <li>
                            Secure user authentication mechanisms where users can
                            log in and access their synced data.
                        </li>
                    </ul>
                    <li>Messaging</li>
                    <ul>
                        <li>Users can send me feedback and bug reports through the app.</li>
                    </ul>
                </ul>

                <p>
                    I published the app on Play Store.
                    I haven't publish the app on App Store yet
                    because I don't have iOS testing tools and publishing fee.
                    <br />
                    The success of this project has strengthened my
                    programming, mobile and software development skills.
                </p>
            </div>
        </Modal>
    )
}
