import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/inicio' element={<HomePage />} />
          <Route path='servicios' element={<Servicios />} />
    
            <Route path='nosotros' element={<Nosotros />} />
            <Route path='contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
