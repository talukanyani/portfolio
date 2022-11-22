import React, { useState } from 'react'
import styles from './Contact.module.css'

import email from '../assets/icon_email.svg'
import message from '../assets/icon_message.svg'

export default function Contact() {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div className={styles.contact} id='contact'>
            <h1>Contact Me</h1>
            <div>
                <nav>
                    <section
                        onClick={() => setCurrentTab(0)}
                        className={
                            currentTab === 0
                                ? styles.message_selected
                                : undefined
                        }
                    >
                        <img src={message} alt='message icon button' />
                        Message
                    </section>
                    <section
                        onClick={() => setCurrentTab(1)}
                        className={
                            currentTab === 1
                                ? styles.email_selected
                                : undefined
                        }
                    >
                        <img src={email} alt='icon' />
                        Email
                    </section>
                </nav>
                <div className={styles.contact_main}>
                    <Message currentTab={currentTab} />
                    <Email currentTab={currentTab} />
                </div>
            </div>
        </div>
    )
}

function Email({ currentTab }) {
    return (
        <div
            className={[
                styles.email,
                currentTab === 0
                    ? styles.email_hide
                    : undefined
            ].join(' ')}
        >
            <a href='mailto:tmutshaeni@hotmail.com'>
                tmutshaeni@hotmail.com
            </a>
        </div>
    )
}

function Message({ currentTab }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [nameError, setNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [messageError, setMessageError] = useState(null)

    const validateName = value => {
        var nameRegEx = /^[a-zA-Z]{2,20}(\s[a-zA-Z]{2,20})?$/
        return nameRegEx.test(value)
    }

    const validateEmail = value => {
        var emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/
        return emailRegEx.test(value)
    }

    const validateMessage = value => {
        var messageRegEx = /^.{30,250}$/
        return messageRegEx.test(value)
    }

    const handleNameBlur = () => {
        var value = name.trim()
        setName(value)
        if (validateName(value)) return;
        if (value.length !== 0) showNameError(value)
    }

    const handleEmailBlur = () => {
        var value = email.trim()
        setEmail(value)
        if (validateEmail(value)) return;
        if (value.length !== 0) showEmailError(value)
    }

    const handleMessageBlur = () => {
        var value = message.trim()
        setMessage(value)
        if (validateMessage(value)) return;
        if (value.length !== 0) showMessageError(value)
    }

    const showNameError = value => {
        if (/^$/.test(value)) {
            setNameError('Name is required!')
        } else if (value.split(' ').length > 2) {
            setNameError('Enter one or two names!')
        } else {
            setNameError('Enter a valid name!')
        }
    }

    const showEmailError = value => {
        if (/^$/.test(value)) {
            setEmailError('Email is required!')
        } else {
            setEmailError('Enter a valid email!')
        }
    }

    const showMessageError = value => {
        if (/^$/.test(value)) {
            setMessageError('Enter a message!')
        } else if (value.length < 30) {
            setMessageError('Message is too short.')
        } else if (value.length > 250) {
            setMessageError('Keep your message short.')
        } else {
            setMessageError('Enter a valid text!')
        }
    }

    return (
        <form
            className={[
                styles.message,
                currentTab === 1
                    ? styles.message_hide
                    : undefined
            ].join(' ')}
        >
            <section>
                <input
                    type='text'
                    id='name'
                    placeholder=' '
                    className={
                        nameError !== null
                            ? styles.input_error
                            : undefined
                    }
                    value={name}
                    onChange={event => setName(event.target.value)}
                    onFocus={() => setNameError(null)}
                    onBlur={handleNameBlur}
                />
                <label htmlFor='names'>Name</label>
                <p>{nameError}</p>
            </section>
            <section>
                <input
                    type='email'
                    id='email'
                    placeholder=' '
                    className={
                        emailError !== null
                            ? styles.input_error
                            : undefined
                    }
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    onFocus={() => setEmailError(null)}
                    onBlur={handleEmailBlur}
                />
                <label htmlFor='email'>Email</label>
                <p>{emailError}</p>
            </section>
            <section>
                <textarea
                    id='message'
                    rows='6'
                    placeholder=' '
                    className={
                        messageError !== null
                            ? styles.input_error
                            : undefined
                    }
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    onFocus={() => setMessageError(null)}
                    onBlur={handleMessageBlur}
                ></textarea>
                <label
                    htmlFor='message'
                    className={[
                        styles.textarea_label,
                        message.length > 250
                            ? styles.textarea_label_error
                            : undefined
                    ].join(' ')}
                >
                    Message
                    {message.length !== 0 &&
                        <span>{message.length} / 250</span>
                    }
                </label>
                <p>{messageError}</p>
            </section>
            <input
                type='submit'
                value='Send'
            />
        </form>
    )
}