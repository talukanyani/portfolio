import { useState } from 'react'
import styles from './Contact.module.css'

import email from '../assets/icons/email.svg'

export default function Contact() {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div id='contact' className={styles.contact}>
            <h1>Contact Me</h1>
            <nav>
                <ul>
                    <li
                        onClick={() => setCurrentTab(0)}
                        className={
                            currentTab === 0
                                ? styles.email_li
                                : undefined
                        }
                    >
                        <img src={email} alt='icon' />
                        Email
                    </li>
                    <li
                        onClick={() => setCurrentTab(1)}
                        className={
                            currentTab === 1
                                ? styles.call_li
                                : undefined
                        }
                    >
                        Call
                    </li>
                </ul>
            </nav>
            <main>
                {currentTab === 0 &&
                    <Email />
                }
                {currentTab === 1 &&
                    <Call />
                }
            </main>
        </div>
    )
}

function Email() {
    return (
        <div>
            <h2>Email</h2>
            <a href='mailto:tmutshaeni@hotmail.com'>
                tmutshaeni@hotmail.com
            </a>
        </div>
    )
}

function Call() {
    return (
        <div>
            <h2>Call</h2>
            <a href='tel:+27635365870'>063 536 5870</a>
        </div>
    )
}