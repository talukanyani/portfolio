import React from "react";
import styles from './Footer.module.css'

import icon_github from '../assets/icon_github.svg'
import icon_linkedin from '../assets/icon_linkedin.svg'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer noopener'
                        href='https://github.com/Talukanyani'
                    >
                        <img src={icon_github} alt='my github' />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer noopener'
                        href='https://www.linkedin.com/in/talukanyani-mutshaeni-a2a57a255/'
                    >
                        <img src={icon_linkedin} alt='my linkedin' />
                    </a>
                </li>
            </ul>
        </footer>
    )
}