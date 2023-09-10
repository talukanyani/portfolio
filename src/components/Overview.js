import React from 'react'
import styles from './Overview.module.css'
import useTypingEffect from '../hooks/useTypingEffect'

export default function Overview() {
    const chars = useTypingEffect('Software Developer');

    return (
        <div id='overview' className={styles.overview}>
            <div>
                <h1>Talukanyani Mutshaeni</h1>
                <h2>
                    {chars}
                    <span>&#95;</span>
                </h2>
                <p>
                    I'm a software developer living in Johannesburg, South Africa.
                    I'm proficient in a variety of programming languages and frameworks,
                    enabling me to create high-performing websites and mobile applications.
                    I enjoy turning ideas into robust and scalable software applications.
                </p>
            </div>
            <div></div>
        </div>
    )
}
