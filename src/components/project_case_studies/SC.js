import React from 'react'
import styles from './ProjectCaseStudies.module.css'
import Modal from './components/Modal'

export default function SCCaseStudy({ isOpen, close }) {
    return (
        <Modal title='Student Calendar' isOpen={isOpen} close={close}>
            <div className={styles.case_study}>
                <h4>Overview</h4>
                <p>
                    Student Calendar is an Android and iOS mobile app for students to
                    easily manage their academic activities.
                    The app aimed to provide a centralised platform for students
                    to efficiently manage and track their assessments, exams,
                    project due dates, and extracurricular activities.
                </p>

                <h4>Technical Details</h4>
                <ul>
                    <li>Developed using Dart programming language and Flutter framework.</li>
                    <li>Utilised the Flutter Riverpod package for state management.</li>
                    <li>Used Path Provider parkage for data caching.</li>
                    <li>Firebase Firestore for real-time data synchronization.</li>
                    <li>Firebase Authentication for user sign-up and sign-in.</li>
                </ul>

                <h4>Development Process</h4>
                <ul>
                    <li>
                        Followed the MVC architecture pattern for clean code separation.
                        Organized the codebase into separate folders for UI,
                        business logic, and data.
                    </li>
                    <li>
                        Wrote clean and readable code,
                        ensuring maintanability and scalability of code base,
                        and also ensuring the app's performance remains smooth and responsive.
                    </li>
                    <li>Used Git version control and hosted the code on GitHub.</li>
                </ul>

                <h4>Features and Functionality</h4>
                <ul>
                    <li>Adding, editing, and deleting subjects/modules.</li>
                    <li>Adding, editing, deleting, and rescheduling activities.</li>
                    <li>Tables</li>
                    <ul>
                        <li>Users can visualise their schedule in table format.</li>
                    </ul>
                    <li>List</li>
                    <ul>
                        <li>Users can visualise their schedule in a list view.</li>
                    </ul>
                    <li>Calendar</li>
                    <ul>
                        <li>
                            Users can visualise their schedule in calendar view.
                            With dynamic dates, the date becomes green when there is activity
                            on that date and more greener when there are more activities.
                            Users can also press on a day to see activities on that specific date.
                        </li>
                    </ul>
                    <li>Caching</li>
                    <ul>
                        <li>
                            Data such as activities and settings are cached
                            and retrieved from app storage.
                        </li>
                    </ul>
                    <li>Syncing</li>
                    <ul>
                        <li>
                            Data such as activities are synced and retrieved
                            from cloud database.
                        </li>
                    </ul>
                    <li>Authentication</li>
                    <ul>
                        <li>
                            Secure user authentication mechanisms where users can
                            sign-up and sign-in.
                        </li>
                    </ul>
                    <li>Sharing</li>
                    <ul>
                        <li>Users can share academic schedule with friends.</li>
                    </ul>
                    <li>Messaging</li>
                    <ul>
                        <li>
                            Users can send me feedbacks and bug reports through
                            in-app feedback forms.
                        </li>
                    </ul>
                    <li>Settings and dark mode.</li>
                </ul>

                <h4>Deployment</h4>
                <p>
                    Published the app on Play Store. Not yet published on App Store
                    due to lack of iOS testing tools and publishing fee.
                </p>

                <h4>Conclusion</h4>
                <p>
                    Student Calendar app was a challenging but rewarding project that allowed me
                    to showcase my programming and mobile development skills.
                    It has helped hundreds of students improve their productivity
                    and academic activities management.
                </p>
            </div>
        </Modal>
    )
}
