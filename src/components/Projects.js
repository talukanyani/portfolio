import styles from './Projects.module.css'

import web_screenshoot from '../assets/tmlab_website_screenshoot.jpg'

export default function Projects() {
    return (
        <main className={styles.projects}>
            <h1>My Projects</h1>
            <Project1 />
            {/* <Project2 /> */}
            {/* <Project3 /> */}
        </main>
    )
}

function Project1() {
    return (
        <main>
            <h2>Tmlab Website</h2>
            <p>
                I have developed a website to show my future apps. I branded it Tmlab which stands for Talukanyani Mutshaeni's Laboratry.
            </p>

            <ul>
                <li>
                    I coded with <mark>HTML</mark> and <mark>CSS</mark> for structuring, positioning and styling. I also used CSS to make a website responsive to all screen sizes.
                </li>
                <li>
                    I programed with <mark>JavaScript</mark> and <mark>React</mark> for best functionality and for all user iteractions.
                </li>
                <li>
                    I created a server program using <mark>Node.js</mark>, <mark>Express</mark>, and <mark>JavaScript</mark> to serve web pages to the user's browser, and to handle other user's request such as sending message. The program send back the response using REST API.
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
                    You can find the code for this project from my <a href='https://github.com/Talukanyani'>GitHub account</a> or using links below.
                </p>
                <ul>
                    <li>
                        <a href='https://github.com/Talukanyani/tmlab-website-client'>
                            Tmlab Website Client Repository
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/Talukanyani/tmlab-website-server'>
                            Tmlab Website Server Repository
                        </a>
                    </li>
                </ul>

                <p>
                    This project is available online at <a href='https://tmlab.tech'>tmlab.tech</a>
                </p>
                <section>
                    <img src={web_screenshoot} alt='Tmlab Website' />
                </section>
            </div>
        </main>

    )
}

function Project2() {
    return (
        <main>
            <h2>This Website</h2>
            <p>
                I developed this website to show my skills, creativity, and projects.
            </p>
            <ul>
                <li>
                    I hard coded with <mark>HTML</mark> and <mark>CSS</mark> for structuring, positioning and styling. I also used CSS to make a website responsive to screen sizes of 480px and below.
                </li>
                <li>
                    I programed with <mark>JavaScript</mark> and <mark>React</mark> for best functionality and for all user iteractions. For example, the iteractions you have made to land on this page was made possible by my JavaScript and React code.
                </li>
                <li>
                    I used <mark>REST API</mark> for user's resquest. When you send message from this website, your request will be resolved by tmlab server program.
                </li>
            </ul>
            <div className={styles.project_links}>
                <p>
                    You can find the code for this project from my <a href='https://github.com/Talukanyani'>GitHub account</a> or using the link below.
                </p>
                <ul>
                    <li>
                        <a href='https://github.com/Talukanyani/my_portfolio'>
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
                    You can find the code for this project from my <a href='https://github.com/Talukanyani'>GitHub account</a> or using the link below.
                </p>
                <ul>
                    <li>
                        <a href='https://github.com/Talukanyani/sc_app'>
                            SC APP Repository
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}