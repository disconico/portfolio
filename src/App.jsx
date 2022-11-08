import React, { useRef } from 'react';
import './App.css';

import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import BackToTopBtn from './Components/BackToTop';

const App = () => {
  const footerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRefs = useRef({ aboutRef, projectsRef });
  return (
    <div className='App'>
      <Header footerRef={footerRef} homeRefs={homeRefs} />
      <Home ref={homeRefs} />
      <Footer ref={footerRef} />
      <BackToTopBtn aboutRef={aboutRef} />
    </div>
  );
};

export default App;
