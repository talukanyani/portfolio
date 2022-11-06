import { useState } from 'react';
import styles from './App.module.css'

import Home from './components/Home';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Eductation from './components/Education';

function App() {
  const [currentTab, setCurrentTab] = useState('home')

  return (
    <div className={styles.app_overlay}>
      <div className={styles.app}>
        <Navbar
          currentTab={currentTab}
          setToHome={() => setCurrentTab('home')}
          setToEdu={() => setCurrentTab('edu')}
          setToProjects={() => setCurrentTab('projects')}
          setToSkills={() => setCurrentTab('skills')}
          setToContact={() => setCurrentTab('contact')}
        />
        {currentTab == 'home' && <Home />}
        {currentTab == 'edu' && <Eductation />}
        {currentTab == 'skills' && <Skills />}
        {currentTab == 'projects' && <Projects />}
        {currentTab == 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;
