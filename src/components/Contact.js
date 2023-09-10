import React from 'react'
import styles from './Contact.module.css'

import github_icon from '../assets/icons/github.svg'
import linkedin_icon from '../assets/icons/linkedin.svg'
import twitter_icon from '../assets/icons/twitter.svg'
import instagram_icon from '../assets/icons/instagram.svg'
import email_icon from '../assets/icons/email.svg'
import out_arrow_icon from '../assets/icons/out_arrow.svg'

export default function Contact() {
    const gitHubLink = 'https://github.com/talukanyani';
    const linkedInLink = 'https://www.linkedin.com/in/talukanyani/';
    const instagramLink = 'https://www.instagram.com/talu_mut/';
    const twitterLink = 'https://twitter.com/talu_mut';
    const email = 'tmutshaeni@hotmail.com';

    return (
        <div id='contact' className={styles.contact}>
            <h2>Contact</h2>
            <p>
                If you have any query, feel free to email me.
                You can also follow me on GitHub.
            </p>
            <div>
                <a href={`mailto:${email}`}>
                    <span>
                        <img src={email_icon} alt='Email icon' />
                        Email
                    </span>
                    <img src={out_arrow_icon} alt='Out arrow' />
                </a>
                <a target='_blank' rel='noreferrer noopener' href={gitHubLink}>
                    <span>
                        <img src={github_icon} alt='GitHub icon' />
                        GitHub
                    </span>
                    <img src={out_arrow_icon} alt='Out arrow' />
                </a>
                <a target='_blank' rel='noreferrer noopener' href={linkedInLink}>
                    <span>
                        <img src={linkedin_icon} alt='LinkedIn icon' />
                        LinkedIn
                    </span>
                    <img src={out_arrow_icon} alt='Out arrow' />
                </a>
                <a target='_blank' rel='noreferrer noopener' href={twitterLink}>
                    <span>
                        <img src={twitter_icon} alt='Twitter icon' />
                        Twitter
                    </span>
                    <img src={out_arrow_icon} alt='Out arrow' />
                </a>
                <a target='_blank' rel='noreferrer noopener' href={instagramLink}>
                    <span>
                        <img src={instagram_icon} alt='Instagram icon' />
                        Instagram
                    </span>
                    <img src={out_arrow_icon} alt='Out arrow' />
                </a>
            </div>
        </div>
    )
}
