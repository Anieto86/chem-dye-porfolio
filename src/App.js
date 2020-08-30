import React from 'react'

import './App.css';


//Router 
import { BrowserRouter as Router, Route } from 'react-router-dom'


// Components
import Navigation from './components/navigation'
import Home from './components/home'
import Porfolio from './components/porfolio'
import About from './components/about'
import Footer from './components/footer'


function App() {
  return (
    <Router>
      <Navigation />
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/porfolio">
        <Porfolio />
      </Route>


      <Route path="/about">
        <About />
      </Route>

      <Footer />

    </Router>

  );
}

export default App;
