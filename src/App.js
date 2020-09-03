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
import Testimonials from './components/testimonials'



//?Import Img in Portal
import graphicalAbstract from './components/img/graphical-abstract.jpg'
import organoid from './components/img/organoids-shapes.jpg'
import cell from './components/img/the-cell.png'

//?publshi img
import quiroga2018 from './components/img/Quiroga-Cáceres2018.png'
import sosa2016 from './components/img/sosa2016.jpg'
import oksdath2016 from './components/img/Oksdath2016.jpg'
import oksdath2018 from './components/img/Oksdath2018.png'
import ebert2020 from './components/img/Ebert2020.jpg'
import perrin2018 from './components/img/Perrin2018.jpg'

function App() {
  return (
    <Router>
      <Navigation />

      <Route exact path="/">
        <Home />
      </Route>

<div className="container" style={{flexWrap: "wrap"}}>
      <Route path="/porfolio">
        <Porfolio
          photo={graphicalAbstract}/>
        <Porfolio
          photo={organoid} />
        <Porfolio
          photo={cell} />
        <Porfolio
          photo={oksdath2016} />
        <Porfolio
          photo={sosa2016} />
        <Porfolio
          photo={oksdath2018} />
        <Porfolio
          photo={quiroga2018} />
        <Porfolio
          photo={perrin2018} />
        <Porfolio
          photo={ebert2020} />
      </Route>
</div>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/testimonials">
        <Testimonials />
      </Route>

      <Footer />
    </Router>


  );
}

export default App;
