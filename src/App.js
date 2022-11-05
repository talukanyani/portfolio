import styles from './App.module.css'

import Home from './components/Home';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Eductation from './components/Education';

function App() {
  return (
    <div className={styles.app_overlay}>
      <div className={styles.app}>
        <Navbar />
        {/* <Home /> */}
        {/* <Skills /> */}
        {/* <Contact /> */}
        {/* <Projects /> */}
        <Eductation />
      </div>
    </div>
  );
}

export default App;
