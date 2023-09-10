import React, { useEffect } from 'react'
import styles from './Modal.module.css'

import closeIcon from '../../../assets/icons/close.svg'

export default function Modal({ title, children, isOpen, close }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, [isOpen])

    return (
        <div
            onClick={close}
            className={[
                styles.modal,
                isOpen ? styles.visible : undefined,
            ].join(' ')}
        >
            <div
                onClick={event => event.stopPropagation()}
                className={[
                    styles.content,
                    isOpen ? styles.content_visible : undefined
                ].join(' ')}
            >
                <img src={closeIcon} alt='Close button' onClick={close} />
                <section className={styles.top_bar}>
                    <h3>{title}</h3>
                </section>
                {children}
            </div>
        </div>
    )
}
