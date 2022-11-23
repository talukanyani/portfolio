import React from 'react'
import styles from './Home.module.css'

import down_icon from '../assets/icon_down_arrow.svg'

export default function Home() {
    return (
        <div className={styles.home} id='home'>
            <h1>
                <span>Hi, my name is</span><br />
                <span>Talukanyani Mutshaeni</span>
            </h1>
            <h2>Welcome to my <b>portfolio.</b></h2>
            <button onClick={() => window.scrollBy(0, 400)}>
                <img src={down_icon} alt='down icon button' />
            </button>
        </div>
    )
}