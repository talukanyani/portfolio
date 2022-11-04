import styles from './App.module.css'

import Home from './components/Home';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className={styles.app_overlay}>
      <div className={styles.app}>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
