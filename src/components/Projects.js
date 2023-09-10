import React from 'react';
import styles from './Projects.module.css';
import { createPortal } from 'react-dom';
import { useHandlePortal } from '../hooks/useHandlePortal';

import SCCaseStudy from './project_case_studies/SC';
import MutsWebCaseStudy from './project_case_studies/MutsWeb';
import MutsServerCaseStudy from './project_case_studies/MutsServer';

import sc_home_screen from '../assets/images/sc_home_screen.png';
import muts_sc_page from '../assets/images/muts_sc_page.png';

export default function Projects() {
  const [isSCPortal, isSCModal, openSCModal, closeSCModal] = useHandlePortal();
  const [isMWebPortal, isMWebModal, openMWebModal, closeMWebModal] = useHandlePortal();
  const [isMServerPortal, isMServerModal, openMServerModal, closeMServerModal] = useHandlePortal();

  return (
    <>
      <div id='projects' className={styles.projects}>
        <h2>Personal Projects</h2>
        <p>Here are real-world projects I have designed and developed for myselft.</p>
        <div id='sc' className={styles.sc}>
          <section>
            <img src={sc_home_screen} alt='Student Calendar home screen' />
          </section>
          <ProjectDetails
            title='Student Calendar'
            description='A mobile application that 
            helps students to manage their academic activities. 
            It is used by hundrends of users.'
            techs={
              ['Dart', 'Flutter', 'Firebase', 'Android']
            }
            productLink='https://muts.dev/student-calendar'
            repoLink='https://github.com/talukanyani/student-calendar'
            onReadMoreClick={openSCModal}
            isApp
          />
        </div>
        <div id='mweb' className={styles.mweb}>
          <section>
            <img src={muts_sc_page} alt="Muts website' Student Calendar page" />
          </section>
          <ProjectDetails
            title='Muts Website'
            description='A website that elagantly showcases Student Calendar app.'
            techs={
              ['HTML', 'CSS', 'JavaScript', 'React']
            }
            productLink='https://muts.dev'
            repoLink='https://github.com/talukanyani/muts-website'
            onReadMoreClick={openMWebModal}
          />
        </div>
        <div id='mserver' className={styles.mserver}>
          <ProjectDetails
            title='Muts Server'
            description="A backend program that handles user's request from 
            Muts website's contact page and feedbacks from Student Calendar app."
            techs={
              ['Node.js', 'NoSQL Database', 'RESTful API']
            }
            repoLink='https://github.com/talukanyani/muts-server-v1'
            onReadMoreClick={openMServerModal}
          />
        </div>
      </div>
      {isSCPortal && createPortal(
        <SCCaseStudy isOpen={isSCModal} close={closeSCModal} />,
        document.body,
      )}
      {isMWebPortal && createPortal(
        <MutsWebCaseStudy isOpen={isMWebModal} close={closeMWebModal} />,
        document.body,
      )}
      {isMServerPortal && createPortal(
        <MutsServerCaseStudy isOpen={isMServerModal} close={closeMServerModal} />,
        document.body,
      )}
    </>
  );
}

function ProjectDetails({
  title,
  description,
  techs,
  productLink,
  repoLink,
  onReadMoreClick,
  isApp,
}) {
  return (
    <div className={styles.project_details}>
      <h3>{title}</h3>
      <p>
        {description}{' '}
        <span onClick={onReadMoreClick}>..Read more</span>
      </p>
      <section>
        {productLink &&
          <button className={styles.product_btn}>
            <a target='_blank' rel='noreferrer' href={productLink}>
              {isApp ? 'View App' : 'View Web'}
            </a>
          </button>
        }
        <button className={styles.code_btn}>
          <a target='_blank' rel='noreferrer' href={repoLink}>
            View Code
          </a>
        </button>
      </section>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}