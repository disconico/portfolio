import React, { useRef } from 'react';
import { initializeApp } from 'firebase/app';
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

const firebaseConfig = {
  apiKey: 'AIzaSyBSzrsyuRgIEYQ4FeMn-FF-XJda1NOMyLA',
  authDomain: 'portfolio-d52b7.firebaseapp.com',
  projectId: 'portfolio-d52b7',
  storageBucket: 'portfolio-d52b7.appspot.com',
  messagingSenderId: '145346749853',
  appId: '1:145346749853:web:ef2423692062a5fc907b74',
  measurementId: 'G-D7B87KZQ0L',
};

initializeApp(firebaseConfig);

export default App;
