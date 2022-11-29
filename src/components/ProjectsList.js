import React from "react"
import styles from './ProjectsList.module.css'

import Modal from './Modal'

import tmlab_img from '../assets/tmlab_web_image.png'
import portfolio_img from '../assets/portfolio_web_image.png'
import sc_img from '../assets/sc_app_image.png'
import globe_icon from '../assets/icon_globe.svg'
import code_icon from '../assets/icon_code.svg'
import download_icon from '../assets/icon_download.svg'
import close_icon from '../assets/icon_close.svg'

export function Tmlab(props) {
    return (
        <Modal open={props.open} close={props.close}>
            <div className={styles.project}>
                <img
                    className={styles.closingicon}
                    src={close_icon}
                    alt='closing icon button'
                    onClick={props.close}
                />
                <div className={styles.project_sidebar}>
                    <img src={tmlab_img} alt='tmlab website' />
                    <section>
                        <button>
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                href='https://github.com/Talukanyani/tmlab-website-client'
                            >
                                <img
                                    src={code_icon}
                                    alt='code icon'
                                />
                                Code Repo (frontend)
                            </a>
                        </button>
                        <button>
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                href='https://github.com/Talukanyani/tmlab-website-server'
                            >
                                <img
                                    src={code_icon}
                                    alt='code icon'
                                />
                                Code Repo (backend)
                            </a>
                        </button>
                        <button>
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                href='https://tmlab.tech'
                            >
                                <img
                                    src={globe_icon}
                                    alt='web icon'
                                />
                                Visit Website
                            </a>
                        </button>
                    </section>
                </div>
                <div className={styles.project_content}>
                    <h1>Tmlab Website</h1>

                    <p>
                        I developed a website to show my apps. I branded it Tmlab which stands for Talukanyani Mutshaeni's Laboratry. Users can find links to download specific app in Play Store or App Store. Users can send messages to Tmlab and also subscribe to their newsletter.
                    </p>

                    <ul>
                        <li>
                            I coded with <mark>HTML</mark> and <mark>CSS</mark> for layout and styling. I also used CSS to make the website responsive to all screen sizes.
                        </li>
                        <li>
                            I programed with <mark>JavaScript</mark> and <mark>React</mark> for all user interactions.
                        </li>
                        <li>
                            I created a server program using <mark>Node.js</mark>, <mark>Express</mark>, and <mark>JavaScript</mark> to serve web pages to the user's browser, and to handle other user's request such as sending message.
                        </li>
                        <li>
                            I integrated the server program with <mark>MySQL</mark> to store and retrive user's data such as newsletter emails.
                        </li>
                        <li>
                            I deployed on <mark>AWS</mark> cloud, computing with Elastic Beanstalk, Route53 and Amazon Relational Database.
                        </li>
                    </ul>
                </div>
            </div>
        </Modal>
    )
}

export function Portfolio(props) {
    return (
        <Modal open={props.open} close={props.close}>
            <div className={styles.project}>
                <img
                    className={styles.closingicon}
                    src={close_icon}
                    alt='closing icon button'
                    onClick={props.close}
                />
                <div className={styles.project_sidebar}>
                    <img src={portfolio_img} alt='portfolio website' />
                    <section>
                        <button>
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                href='https://github.com/Talukanyani/my_portfolio'
                            >
                                <img
                                    src={code_icon}
                                    alt='code icon'
                                />
                                Code Repository
                            </a>
                        </button>
                        <button>
                            <a href='/portfolio'>
                                <img
                                    src={globe_icon}
                                    alt='web icon'
                                />
                                Visit Website
                            </a>
                        </button>
                    </section>
                </div>
                <div className={styles.project_content}>
                    <h1>Portfolio Website</h1>

                    <p>
                        I designed and developed this website. Users can simply view my skills and projects. Users can be able to send messages to me.
                    </p>

                    <ul>
                        <li>
                            I coded with <mark>HTML</mark> and <mark>CSS</mark> for layout and styling. I also used CSS to make the website responsive to all screen sizes.
                        </li>
                        <li>
                            I programed with <mark>JavaScript</mark> and <mark>React</mark> for all user interactions.
                        </li>
                        <li>
                            I deployed this website on GitHub pages and connect to Tmlab server using <mark>REST API</mark> for handling user's request such as sending message.
                        </li>
                    </ul>
                </div>
            </div>
        </Modal>
    )
}

export function SC(props) {
    return (
        <Modal open={props.open} close={props.close}>
            <div className={styles.project}>
                <img
                    className={styles.closingicon}
                    src={close_icon}
                    alt='closing icon button'
                    onClick={props.close}
                />
                <div className={styles.project_sidebar}>
                    <img src={sc_img} alt='sc app' />
                    <section>
                        <button>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://github.com/Talukanyani/sc_app'
                            >
                                <img
                                    src={code_icon}
                                    alt='code icon'
                                />
                                Code Repository
                            </a>
                        </button>
                        <button title='Download App'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://tmlab.tech/apps#sc'
                            >
                                <img
                                    src={download_icon}
                                    alt='download icon'
                                />
                                Download App
                            </a>
                        </button>
                    </section>
                </div>
                <div className={styles.project_content}>
                    <h1>SC App</h1>
                    <p>I'm developing a mobile app for students to manage their activity.</p>
                    <ul>
                        <li>
                            I'm programing with <mark>Dart</mark> and <mark>Flutter</mark> for best user interface and user experience.
                        </li>
                    </ul>
                </div>
            </div>
        </Modal>
    )
}