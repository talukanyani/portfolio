import React, { useState } from 'react'
import styles from './Contact.module.css'

import usePost from '../hooks/usePost'
import {
    useValidateName,
    useValidateEmail,
    useValidateMessage,
} from '../hooks/useFormValidations'

import email_icon from '../assets/icons/email.svg'
import location_icon from '../assets/icons/location.svg'
import github_icon from '../assets/icons/github.svg'
import linkedin_icon from '../assets/icons/linkedin.svg'
import done_icon from '../assets/icons/done.svg'
import error_icon from '../assets/icons/error.svg'

export default function Contact() {
    return (
        <div id='contact' className={styles.contact}>
            <h2>Contact Me</h2>
            <div>
                <ContactInfo />
                <Message />
            </div >
            <Socials />
        </div>
    )
}

function ContactInfo() {
    return (
        <div className={styles.contact_info}>
            <div>
                <img alt='Email icon' src={email_icon} />
                <section>
                    <h3>Email</h3>
                    <a href='mailto:tmutshaeni@hotmail.com'>
                        tmutshaeni@hotmail.com
                    </a>
                </section>
            </div>
            <div>
                <img alt='Location icon' src={location_icon} />
                <section>
                    <h3>Address</h3>
                    <address>Johannesburg, 2109</address>
                </section>
            </div>
        </div>
    )
}

function Socials() {
    const gitHubLink = 'https://github.com/talukanyani'
    const linkedInLink = 'https://www.linkedin.com/in/talukanyani/'

    return (
        <section className={styles.socials}>
            <a target='_blank' rel='noreferrer noopener' href={gitHubLink}>
                <img src={github_icon} alt='GitHub icon button' />
            </a>
            <a target='_blank' rel='noreferrer noopener' href={linkedInLink}>
                <img src={linkedin_icon} alt='LinkedIn icon button' />
            </a>
        </section>
    )
}

function Sent() {
    return (
        <div className={styles.sent}>
            <span>
                <img alt='success icon' src={done_icon} />
            </span>
            <h3>Successfully Sent</h3>
            <p>I received your message, I'll get back to you shortly.</p>
        </div>
    )
}

function Error() {
    return (
        <div className={styles.error}>
            <span>
                <img alt='error icon' src={error_icon} />
            </span>
            <h3>Something Went Wrong</h3>
            <p>An error occured while sending your message.</p>
            <button onClick={() => window.location.reload()}>
                Try Again
            </button>
        </div>
    )
}

function Message() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [isValidName, nameError, validateName, resetNameError] = useValidateName()
    const [isValidEmail, emailError, validateEmail, resetEmailError] = useValidateEmail()
    const [isValidMessage, messageError, validateMessage, resetMessageError] = useValidateMessage()

    const [submit, isLoading, isSent, isError] = usePost()

    const handleSubmit = event => {
        event.preventDefault()

        validateName(name)
        validateEmail(email)
        validateMessage(message)

        if (isValidName && isValidEmail && isValidMessage) {
            submit(
                'https://muts.dev/api/talukanyani/portfolio/contact',
                { name, email, message },
            )
        }
    }

    return (
        <div className={styles.message}>
            <h3>Message</h3>
            {isSent ? <Sent />
                : isError ? <Error />
                    : <form onSubmit={handleSubmit}>
                        <section>
                            <input
                                type='text'
                                name='name'
                                placeholder=' '
                                id='name'
                                className={nameError ? styles.input_error : undefined}
                                maxLength={30}
                                onChange={event => setName((event.target.value).trim().replace(/[ ]{2,}/g, ' '))}
                                onFocus={resetNameError}
                                onBlur={() => { if (name) validateName(name) }}
                            />
                            <label htmlFor='name'>Name</label>
                            <span>{nameError}</span>
                        </section>
                        <section>
                            <input
                                type='email'
                                name='email'
                                placeholder=' '
                                id='email'
                                className={emailError ? styles.input_error : undefined}
                                maxLength={50}
                                onChange={event => setEmail((event.target.value).trim())}
                                onFocus={resetEmailError}
                                onBlur={() => { if (email) validateEmail(email) }}
                            />
                            <label htmlFor='email'>Email</label>
                            <span>{emailError}</span>
                        </section>
                        <section>
                            <textarea
                                name='message'
                                rows='6'
                                placeholder=' '
                                id='message'
                                className={messageError ? styles.input_error : undefined}
                                maxLength={250}
                                onChange={event => setMessage((event.target.value).trim())}
                                onFocus={resetMessageError}
                                onBlur={() => { if (message) validateMessage(message) }}
                            ></textarea>
                            <label htmlFor='message'>
                                Message
                                {message && <span>{message.length} / 250</span>}
                            </label>
                            <span>{messageError}</span>
                        </section>
                        <button type='submit' disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                    </form>
            }
        </div>
    )
}
