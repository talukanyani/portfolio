import { useState } from 'react';
import styles from './App.module.css'

import Home from './components/Home';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Eductation from './components/Education';

function App() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div className={styles.app_overlay}>
      <div className={styles.app}>
        <Navbar
          currentTab={currentTab}
          setToHome={() => setCurrentTab(0)}
          setToEdu={() => setCurrentTab(1)}
          setToSkills={() => setCurrentTab(2)}
          setToProjects={() => setCurrentTab(3)}
          setToContact={() => setCurrentTab(4)}
        />
        {currentTab === 0 && <Home />}
        {currentTab === 1 && <Eductation />}
        {currentTab === 2 && <Skills />}
        {currentTab === 3 && <Projects />}
        {currentTab === 4 && <Contact />}
      </div>
    </div>
  );
}

export default App;
