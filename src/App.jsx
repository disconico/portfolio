import React, { useRef } from 'react';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  const footerRef = useRef(null);
  return (
    <div className='App'>
      <Header footerRef={footerRef} />

      <Home />
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
