import React from 'react'
import { createPortal } from 'react-dom'
import styles from './Project.module.css'

import { useHandlePortal } from '../hooks/useHandlePortal'
import Modal from './Modal'

import muts_home from '../assets/images/muts_home_page.png'
import github_icon from '../assets/icons/github.svg'

export default function Muts() {
    const [
        isPortal,
        isModal,
        openModal,
        closeModal,
    ] = useHandlePortal()

    const clientRepoLink = 'https://github.com/talukanyani/muts_website_client'
    const serverRepoLink = 'https://github.com/talukanyani/muts_website_server'
    const mutsLink = 'https://muts.dev'

    return (
        <>
            <div id='muts' className={styles.muts}>
                <h2>Muts Website</h2>
                <div>
                    <section className={styles.picture}>
                        <img src={muts_home} alt='Muts home page' />
                    </section>
                    <div>
                        <p className={styles.description}>
                            A website that elagantly showcases Student Calendar app.
                        </p>
                        <button className={styles.case_study_btn} onClick={() => openModal()}>
                            Case Study
                        </button>
                        <section className={styles.product_btns}>
                            <a target='_blank' rel='noreferrer' href={mutsLink}>
                                {mutsLink}
                            </a>
                        </section>
                        <section className={styles.code_btns}>
                            <button>
                                <a target='_blank' rel='noreferrer' href={clientRepoLink}>
                                    <img src={github_icon} alt='GitHub icon' />
                                    Repository (frontend)
                                </a>
                            </button>
                            <button>
                                <a target='_blank' rel='noreferrer' href={serverRepoLink}>
                                    <img src={github_icon} alt='GitHub icon' />
                                    Repository (backend)
                                </a>
                            </button>
                        </section>
                        <div className={styles.tools}>
                            <section>
                                <p>Technologies used:</p>
                                <p>
                                    HTML, CSS, JavaScript, React,
                                    Node.js, PostgreSQL, AWS
                                </p>
                            </section>
                            <section>
                                <p>Tools used:</p>
                                <p>
                                    VS Code, Browser DevTools, Postman,
                                    Jira, Git, GitHub
                                </p>
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
                <h3>Muts Website</h3>

                <p>
                    This website aimed to showcase my app Student Calendar. Additionally,
                    it required seamless integration with backend system and database to
                    handle other users's request such as sending messages.
                </p>

                <p>
                    I developed this website before developing Student Calendar,
                    the main idea was to utilise my skills in programming with JavaScript
                    and in web development.
                    I decided to brand this website using the first four letters of my last name.
                    If you don't like short cuts, you can read "muts.dev" as "Mutshaeni Developer".
                </p>

                <span>I developed this website focusing on:</span>
                <ul>
                    <li>Creating visually appealing user interface.</li>
                    <li>Writing clean, maintanable, and scalable code.</li>
                    <li>Ensuring smooth and responsive website's performance.</li>
                    <li>Designing responsive pages that adapts to various screen sizes and devices.</li>
                </ul>

                <p>
                    As the app is not yet available on App Store, this website promts iOS users
                    to leave their email to get notified when it is available on App Store.
                    Implementing feature like this needed integration with backend system and database.
                    I selected Node.js as backend stack beacause I was already fluent in JavaScript.
                    I selected PostgreSQL database because I always wanted to learn ralational database.
                    I deployed the website on AWS, using Eleastick BeanStalk, RDS, and Route53 services.
                </p>

                <p>
                    The success of this project helped me understand the full structure of a website
                    and has strengthened my programming, web and software development skills.
                </p>
            </div>
        </Modal>
    )
}
