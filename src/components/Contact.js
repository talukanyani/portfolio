import styles from './Contact.module.css'

import email from '../assets/icon_email.svg'
import call from '../assets/icon_call.svg'
import message from '../assets/icon_message.svg'

function Contact() {
    return (
        <div className={styles.contact}>
            <h1>Contact Me</h1>
            <nav>
                <ul>
                    <li>
                        <img src={email} alt='icon' />
                        Email
                    </li>
                    <li>
                        <img src={call} alt='icon' />
                        Call
                    </li>
                </ul>
            </nav>
            <main>
                {/* <Email /> */}
                <Call />
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

export default Contact;