import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavbarT from './components/Navbar.js';
import Footer from './components/Footer.js';
import Cards from './components/Cards';
import Contact from './components/contact.js';

function App() {
  return (
    <Router>
    <div className="App">
    <NavbarT />
     <Switch>
    <Route exact path="/" component={Cards}/>
      <Route path="/Contact" component={Contact}/>
      </Switch>
     <Footer />
   </div>
    </Router>
  );
}

export default App;