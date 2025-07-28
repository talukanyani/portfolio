import styles from './Skills.module.css';

import html_icon from '../assets/tech_icons/html.svg';
import css_icon from '../assets/tech_icons/css.svg';
import javascript_icon from '../assets/tech_icons/javascript.svg';
import typescript_icon from '../assets/tech_icons/typescript.svg';
import angular_icon from '../assets/tech_icons/angular.svg';
import react_icon from '../assets/tech_icons/react.svg';
import dart_icon from '../assets/tech_icons/dart.svg';
import flutter_icon from '../assets/tech_icons/flutter.svg';
import firebase_icon from '../assets/tech_icons/firebase.svg';
import nodejs_icon from '../assets/tech_icons/nodejs.svg';
import mysql_icon from '../assets/tech_icons/mysql.svg';
import git_icon from '../assets/tech_icons/git.svg';
import github_icon from '../assets/tech_icons/github.svg';
import chrome_icon from '../assets/tech_icons/chrome.svg';
import postman_icon from '../assets/tech_icons/postman.svg';

export default function Skills() {
  return (
    <div id='skills' className={styles.skills}>
      <h2>My Tech Skills</h2>

      <h3>Front-End Development</h3>
      <p>
        Experienced in building responsive, interactive, and accessible
        user interfaces using modern web technologies and frameworks.
        I focus on delivering clean UI and smooth user experiences
        across devices and screen sizes.
      </p>
      <ul>
        <li>
          <img src={html_icon} alt='HTML icon' />
          HTML
        </li>
        <li>
          <img src={css_icon} alt='CSS icon' />
          CSS
        </li>
        <li>
          <img src={javascript_icon} alt='JavaScript icon' />
          JavaScript
        </li>
        <li>
          <img src={typescript_icon} alt='TypeScript icon' />
          TypeScript
        </li>
        <li>
          <img src={angular_icon} alt='Angular icon' />
          Angular
        </li>
        <li>
          <img src={react_icon} alt='React icon' />
          React
        </li>
      </ul>

      <h3>Cross-Platform Development</h3>
      <p>
        Skilled in developing software applications that run seamlessly on
        multiple operating systems.
      </p>
      <ul>
        <li>
          <img src={dart_icon} alt='Dart icon' />
          Dart
        </li>
        <li>
          <img src={flutter_icon} alt='Flutter icon' />
          Flutter
        </li>
      </ul>

      <h3>Back-End Development</h3>
      <p>
        Proficient in building scalable and secure RESTful APIs.
        I focus on building clean, modular backend architectures that
        support robust front-end applications, user authentication,
        and real-time data.
      </p>
      <ul>
        <li>
          <img src={nodejs_icon} alt='Node.js icon' />
          Node.js
        </li>
      </ul>

      <h3>Database</h3>
      <p>
        Experienced with both SQL and NoSQL/document databases.
        I design efficient, normalized schemas and manage data integrity
        across platforms.
      </p>
      <ul>
        <li>
          <img src={mysql_icon} alt='MySQL icon' />
          MySQL
        </li>
        <li>
          <img src={firebase_icon} alt='Firebase icon' />
          Cloud Firestore
        </li>
      </ul>

      <h3>Tools and DevOps</h3>
      <p>
        Familiar with essential development, testing, and deployment tools.
      </p>
      <ul>
        <li>
          <img src={git_icon} alt='Git icon' />
          Git
        </li>
        <li>
          <img src={github_icon} alt='GitHub icon' />
          GitHub
        </li>
        <li>
          <img src={chrome_icon} alt='Google Chrome icon' />
          Browser Dev Tools
        </li>
        <li>
          <img src={postman_icon} alt='Postman icon' />
          Postman
        </li>
      </ul>
    </div>
  );
}