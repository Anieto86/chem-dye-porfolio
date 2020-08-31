import React from 'react'

import './App.css';


//Router 
import { BrowserRouter as Router, Route } from 'react-router-dom'


// Components
import Navigation from './components/navigation'
import Home from './components/home'
import Porfolio from './components/porfolio/porfolio'
import About from './components/about'
// import Footer from './components/footer'
import Testimonials from './components/testimonials'
import Publish from './components/publish'

//?Import Img in Portal
import graphicalAbstract from './components/img/graphical-abstract.jpg'
import organoid from './components/img/organoids-shapes.jpg'
import cell from './components/img/the-cell.png'


function App() {
  return (
    <Router>
      <Navigation />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/porfolio">
        <Porfolio
          photo={graphicalAbstract}
        />
        <Porfolio
          photo={organoid}
        />
        <Porfolio
          photo={cell}
        />
        <Publish/>
      </Route>


      <Route path="/about">
        <About />
      </Route>

      <Route path="/testimonials">
        <Testimonials />
      </Route>
      {/* <Footer /> */}
    </Router>


  );
}

export default App;
