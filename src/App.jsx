import React, { useRef } from 'react';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import BackToTopBtn from './Components/BackToTop';

function App() {
  const footerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRefs = useRef({ aboutRef, projectsRef });
  return (
    <div className='App'>
      <Header footerRef={footerRef} homeRefs={homeRefs} />

      {/* <Home ref={homeRefs}  /> */}
      <Home ref={homeRefs} />
      <Footer ref={footerRef} />
      <BackToTopBtn aboutRef={aboutRef} />
    </div>
  );
}

export default App;
