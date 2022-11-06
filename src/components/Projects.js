import { useState } from 'react'
import styles from './Projects.module.css'

import web_screenshoot from '../assets/tmlab_website_screenshoot.jpg'
import arrow_left from '../assets/icon_arrow_left.svg'
import arrow_right from '../assets/icon_arrow_right.svg'

export default function Projects() {
    const [currentTab, setCurrentTab] = useState(0)

    const handleLeftArrowClick = () => {
        if (currentTab >= 1 & currentTab <= 2) {
            setCurrentTab(currentTab - 1);
        }
    }

    const handleRightArrowClick = () => {
        if (currentTab >= 0 & currentTab <= 1) {
            setCurrentTab(currentTab + 1);
        }
    }

    return (
        <div className={styles.projects}>
            <h1>My Projects</h1>
            <nav>
                <button
                    onClick={handleLeftArrowClick}
                    disabled={currentTab === 0}
                >
                    <img src={arrow_left} alt='arrow button' />
                </button>
                <section>
                    <input
                        type='radio'
                        name='nav_pro'
                        readonly
                        checked={currentTab === 0}
                        onChange={() => setCurrentTab(0)}
                    />
                    <input
                        type='radio'
                        name='nav_pro'
                        readonly
                        checked={currentTab === 1}
                        onChange={() => setCurrentTab(1)}
                    />
                    <input
                        type='radio'
                        name='nav_pro'
                        readonly
                        checked={currentTab === 2}
                        onChange={() => setCurrentTab(2)}
                    />
                </section>
                <button
                    onClick={handleRightArrowClick}
                    disabled={currentTab === 2}
                >
                    <img src={arrow_right} alt='arrow button' />
                </button>
            </nav>
            {currentTab === 0 && <Project1 />}
            {currentTab === 1 && <Project2 />}
            {currentTab === 2 && <Project3 />}
        </div>
    )
}

function Project1() {
    return (
        <main>
            <h2>Tmlab Website</h2>

            <p>
                I developed a website to show my future apps. I branded it Tmlab which stands for Talukanyani Mutshaeni's Laboratry. Users can find links to download specific app in Play Store or App Store. Users can send messages to Tmlab and also subscribe to their newsletter.
            </p>

            <ul>
                <li>
                    I coded with <mark>HTML</mark> and <mark>CSS</mark> for structuring, positioning and styling. I also used CSS to make a website responsive to all screen sizes.
                </li>
                <li>
                    I programed with <mark>JavaScript</mark> and <mark>React</mark> for best user interface and user experience.
                </li>
                <li>
                    I created a server program using <mark>Node.js</mark>, <mark>Express</mark>, and <mark>JavaScript</mark> to serve web pages to the user's browser, and to handle other user's request such as sending message.
                </li>
                <li>
                    I integrated the server program with <mark>MySQL</mark> to store and retrive user's data.
                </li>
                <li>
                    I deployed on <mark>AWS</mark> cloud, computing with Elastic Beanstalk, Route53 and Amazon Relational Database.
                </li>
            </ul>

            <div className={styles.project_links}>
                <p>
                    You can find the code for this project from my{' '}
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Talukanyani'
                    >
                        GitHub account
                    </a>
                    {' '}or using links below.
                </p>
                <ul>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/Talukanyani/tmlab-website-client'
                        >
                            Tmlab Website Client Repository
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/Talukanyani/tmlab-website-server'
                        >
                            Tmlab Website Server Repository
                        </a>
                    </li>
                </ul>
                <p>
                    This project is available online at{' '}
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://tmlab.tech'
                    >
                        tmlab.tech
                    </a>
                </p>
            </div>

            {/* <section className={styles.project_picture}>
                <img src={web_screenshoot} alt='Tmlab Website' />
            </section> */}
        </main>

    )
}

function Project2() {
    return (
        <main>
            <h2>This Website</h2>

            <p>
                I designed and developed this website which is in your face right now.
            </p>

            <ul>
                <li>
                    I coded with <mark>HTML</mark> and <mark>CSS</mark> for structuring, positioning, styling, and for responsive design.
                </li>
                <li>
                    I programed with <mark>JavaScript</mark> and <mark>React</mark> for best functionalty and for all user iteractions.
                </li>
                <li>
                    I deployed this website on GitHub pages and used <mark>REST API</mark> to handle user's request such as sending message.
                </li>
            </ul>

            <div className={styles.project_links}>
                <p>
                    You can find the code for this project from my{' '}
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Talukanyani'
                    >
                        GitHub account
                    </a>
                    {' '}or using the link below.
                </p>
                <ul>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/Talukanyani/my_portfolio'
                        >
                            My Portfolio Repository
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}

function Project3() {
    return (
        <main>
            <h2>SC App</h2>
            <p>I'm developing a mobile app for students to manage their activity.</p>
            <ul>
                <li>
                    I'm programing with <mark>Dart</mark> and <mark>Flutter</mark> for best user interface and user experience.
                </li>
            </ul>
            <div className={styles.project_links}>
                <p>
                    You can find the code for this project from my{' '}
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Talukanyani'
                    >
                        GitHub account
                    </a>
                    {' '}or using the link below.
                </p>
                <ul>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/Talukanyani/sc_app'
                        >
                            SC App Repository
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}