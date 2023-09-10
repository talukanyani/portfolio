import React from 'react'
import styles from './ProjectCaseStudies.module.css'
import Modal from './components/Modal'

export default function MutsWebCaseStudy({ isOpen, close }) {
    return (
        <Modal title='Muts Website' isOpen={isOpen} close={close}>
            <div className={styles.case_study}>
                <h4>Overview</h4>
                <p>
                    Muts is a website designed and developed to showcase Student Calendar
                    app and other apps that I'm going to build in the future.
                </p>

                <h4>Technical Details</h4>
                <ul>
                    <li>Developed using HTML, CSS, JavaScript, and React.</li>
                    <li>Utilised React Router for seamless navigation between pages.</li>
                    <li>
                        Implemented responsive design to ensure compatibility with
                        various devices and screen sizes.
                    </li>
                </ul>

                <h4>Development Process</h4>
                <ul>
                    <li>Followed component-based architecture for modularity and maintanability.</li>
                    <li>Utilised React state and props for managing data and component behavior.</li>
                    <li>
                        Wrote clean, readable, and scalable code.
                        Ensuring smooth and responsive website's performance.
                    </li>
                    <li>
                        Used VS Code and browser DevTools for debugging and testing.

                    </li>
                    <li>Used Git version control and hosted the code on GitHub.</li>
                </ul>

                <h4>Features and Functionality</h4>
                <ul>
                    <li>Interactive, visually appealing, and user-friendly pages.</li>
                    <li>Link to download Student Calendar Android version on Play Store.</li>
                    <li>
                        Email submision form for iOS users who wish to get notified when
                        the app becomes available on App Store.
                    </li>
                    <li>
                        Contact form for user inquiries and support requests.
                        With data validation and submission to a backend service.
                    </li>
                </ul>

                <h4>Conclusion</h4>
                <p>
                    Muts website has effectively introduced the Student Calendar mobile app to a wider audience.
                    This project allowed me to demonstrate my programming and web development skills
                    while creating an engaging and informative platform for promoting my app.
                </p>
            </div>
        </Modal>
    )
}
