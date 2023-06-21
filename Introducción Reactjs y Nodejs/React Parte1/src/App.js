import React from 'react';
import './styles/components/layout/Nav.css';
import './styles/components/layout/Contenedor.css';
import './styles/components/pages/HomePage.css';
import './App.css';

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">



      <Nav></Nav>


      <HomePage>

      </HomePage>



      <Footer></Footer>
    </div>
  );
}

export default App;
