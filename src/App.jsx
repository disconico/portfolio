import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
