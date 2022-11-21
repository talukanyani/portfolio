import React, { useEffect, useState } from 'react'
import styles from './Projects.module.css'

import tmlab_img from '../assets/tmlab_web_image.png'
import portfolio_img from '../assets/portfolio_web_image.png'
import sc_img from '../assets/sc_app_image.png'
import globe_icon from '../assets/icon_globe.svg'
import code_icon from '../assets/icon_code.svg'
import download_icon from '../assets/icon_download.svg'
import { Portfolio, SC, Tmlab } from './ProjectsList'

export default function Projects() {
    const [isTmlab, setIsTmlab] = useState(false)
    const [isPortfolio, setIsPortfolio] = useState(false)
    const [isSC, setIsSC] = useState(false)

    useEffect(() => {
        if (isTmlab || isPortfolio || isSC) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [isTmlab, isPortfolio, isSC])

    return (
        <div className={styles.projects} id='projects'>
            <h1>My Projects</h1>

            <div>
                <div className={styles.card}>
                    <img src={tmlab_img} alt='tmlab website' />
                    <h2>Tmlab Website</h2>
                    <section>
                        <button onClick={() => setIsTmlab(true)}>
                            Show more
                        </button>
                        <button>
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                href='https://github.com/Talukanyani/tmlab-website-client'
                            >
                                <img
                                    src={code_icon}
                                    alt='code icon'
                                />
                            </a>
                        </button>
                        <button>
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                href='https://tmlab.tech'
                            >
                                <img
                                    src={globe_icon}
                                    alt='web icon'
                                />
                            </a>
                        </button>
                    </section>
                </div>

                <div className={styles.card}>
                    <img src={portfolio_img} alt='portfolio website' />
                    <h2>Portfolio Website</h2>
                    <section>
                        <button onClick={() => setIsPortfolio(true)}>
                            Show more
                        </button>
                        <button>
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                href='https://github.com/Talukanyani/portfolio'
                            >
                                <img
                                    src={code_icon}
                                    alt='code icon'
                                />
                            </a>
                        </button>
                        <button>
                            <a
                                rel='noreferrer noopener'
                                href='/portfolio'
                            >
                                <img
                                    src={globe_icon}
                                    alt='web icon'
                                />
                            </a>
                        </button>
                    </section>
                </div>

                <div className={styles.card}>
                    <img src={sc_img} alt='sc app' />
                    <h2>SC App</h2>
                    <section>
                        <button onClick={() => setIsSC(true)}>
                            Show more
                        </button>
                        <button>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://github.com/Talukanyani/sc_app'
                            >
                                <img
                                    src={code_icon}
                                    alt='code icon'
                                />
                            </a>
                        </button>
                        <button title='Download App'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://tmlab.tech/apps#sc'
                            >
                                <img
                                    src={download_icon}
                                    alt='download icon'
                                />
                            </a>
                        </button>
                    </section>
                </div>

                <Tmlab
                    open={isTmlab}
                    close={() => setIsTmlab(false)}
                />
                <Portfolio
                    open={isPortfolio}
                    close={() => setIsPortfolio(false)}
                />
                <SC
                    open={isSC}
                    close={() => setIsSC(false)}
                />
            </div>
        </div>
    )
}