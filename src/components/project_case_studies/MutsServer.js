import React from 'react'
import styles from './ProjectCaseStudies.module.css'
import Modal from './components/Modal'

export default function MutsServerCaseStudy({ isOpen, close }) {
  return (
    <Modal title='Muts Server' isOpen={isOpen} close={close}>
      <div className={styles.case_study}>
        <h4>Overview</h4>
        <p>
          Muts Server is a backend program developed to handle
          user inquiries and feedbacks from Muts website and Student Calendar app.
          This program efficiently stores and processes incoming requests,
          ensuring that user inquiries and feedback are appropriately addressed.
        </p>

        <h4>Technical Details</h4>
        <ul>
          <li>Developed using Node.js and Express for the API endpoints.</li>
          <li>
            Utilised Firestore, a NoSQL/document database, for data storage and streaming.
          </li>
        </ul>

        <h4>Development Process</h4>
        <ul>
          <li>Designed RESTful API endpoints for receiving and processing data.</li>
          <li>
            Integrated Firestore as the data storage and retrieval system.
            I choose Firestore database because its effective,
            its free for program with few requests like this one,
            and I can securely stream the data.
          </li>
          <li>Utilised middlewares for request validation and error handling.</li>
          <li>Used VS Code for writing and debugging code.</li>
          <li>Postman for API endpoints testing.</li>
          <li>Git and GitHub for version control and code hosting.</li>
        </ul>

        <h4>Features and Functionality</h4>
        <ul>
          <li>API endpoints to receive and process user inquiries and feedback submissions.</li>
          <li>Firestore collections to organise and store user inquiries and feedback data.</li>
          <li>Error handling and validation to ensure data integrity.</li>
        </ul>

        <h4>Deployment</h4>
        <p>Deployed this program on Azure cloud, using App Service.</p>

        <h4>Conclusion</h4>
        <p>
          Muts Server ensured efficient handling of user inquiries and feedback
          from both Muts website and the Student Calendar app.
          This project has provided a secure and scalable solution for managing user interactions
          and has strenghthen my programming and backend development skills.
        </p>
      </div>
    </Modal>
  )
}
