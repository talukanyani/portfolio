import React, { useEffect, useRef } from 'react';
import { scrollTO } from './hooks/functions';

import Navbar from './components/Navbar'
import Overview from './components/Overview';
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
    urlHash = urlHash.substring(1);

    setTimeout(() => {
      scrollTO(urlHash);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={mainRef}>
        <Overview />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
