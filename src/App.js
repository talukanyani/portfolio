import { useEffect, useRef } from 'react';
import { scrollToComponetWithId } from './hooks/functions';

import Navbar from './components/Navbar'
import Overview from './components/Overview';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    var urlHash = window.location.hash;

    if (!urlHash) return;

    // If element with that urlHash does not exist, then stop.
    var mainElement = mainRef.current;
    var idElement = mainElement.querySelector(urlHash);
    if (!idElement) return;

    // Remove '#'
    var id = urlHash.substring(1)

    setTimeout(() => {
      scrollToComponetWithId(id);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={mainRef}>
        <Overview />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
