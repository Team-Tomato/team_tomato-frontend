import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarT from './components/Navbar.js';
import Footer from './components/Footer.js';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <NavbarT />
      <h1 class="heading">Projects</h1>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;