import React from 'react'
import styles from './Overview.module.css'
import useTypingEffect from '../hooks/useTypingEffect'

export default function Overview({ isVisible }) {
    const texts = [
        'FullStack Developer',
        'Mobile Developer',
        'Web Developer',
        'JavaScript Developer',
        'Flutter Developer',
    ]

    const chars = useTypingEffect(texts)

    return (
        <div
            id='overview'
            className={[
                styles.overview,
                isVisible ? styles.visible : undefined,
            ].join(' ')}
        >
            <div>
                <h1>Talukanyani Mutshaeni</h1>
                <h2>
                    {chars}
                    <span>&#95;</span>
                </h2>
                <p>
                    I am a passionate software developer with experience in developing mobile and web applications.
                    I have gained valuable insights into the full software development lifecycle.
                    I believe in the power of effective communication and teamwork.
                    I thrive on transforming ideas into robust and scalable software applications.
                </p>
            </div>
            <div></div>
        </div>
    )
}
