import React from 'react'

import './App.css';
//Router 
import { BrowserRouter as Router, Route } from 'react-router-dom'

//TODO   Components
import Navigation from './components/navigation'
import Home from './components/home'
import Porfolio from './components/porfolio'
import About from './components/about'
import Footer from './components/footer'
import Testimonials from './components/testimonials'
import GraphAb from './components/graphAb'
import Journal from './components/journal'
import Infographics from './components/infographics'
import GApplications from './components/gapplications'
import Buttons from "./components/buttons.js"

//?Import Img in Portal
import graphicalAbstract from './components/img/Graphical_Abstract_Monica_Garcia.png'
import ScientificJournal from './components/img/Oksdath2018.png'
import Infograph from './components/img/What-does-a-scientific-illustrator.png'
import GrantApp from './components/img/the-cell.png'


//?import Grafical Abtract img 
import peralta from './components/img/Graphical Abstract_Mariana_Peralta.png'
import oksdath2017 from './components/img/Oksdath2017.jpg'
import Ebert2020 from './components/img/Ebert2020.jpg'

//?import Journal ImgStyled
import perrin2018a from './components/img/Perrin2018a.jpg'
import perrin2018b from './components/img/Perrin2018b.jpg'
import perrin2018c from './components/img/Perrin2018c.jpg'
import sosa2017a from './components/img/sosa2017a.jpg'
import sosa2017b from './components/img/sosa2017b.jpg'
import sosa2017c from './components/img/sosa2017c.jpg'

//?import  Infographic imgs
import informarB from './components/img/informarB.png'
import informarC from './components/img/informarC.png'
import informarD from './components/img/informarD.png'
import informarE from './components/img/informarE.png'
import organoids from './components/img/organoids-shapes.jpg'


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navigation />
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/porfolio">
            <Buttons />
            <Porfolio
              photo={graphicalAbstract} 
              title= "Graphical Abstract"/>
            <Porfolio
              photo={ScientificJournal}
              title= "Scientific Journal" />
            <Porfolio
              photo={Infograph} 
              title= "infographics"/>
            <Porfolio
              photo={GrantApp} 
              title= "Grants Applications"/>
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/testimonials">
            <Testimonials />
          </Route>

          <div className="container jurnalC" >
            <Route path="/graphAb">
              <Buttons />
              <GraphAb photo={peralta} />
              <GraphAb photo={oksdath2017} />
              <GraphAb photo={Ebert2020} />
            </Route>
          </div>

          <div className="container jurnalC" >
            <Route path="/journal">
              <Buttons />
              <Journal photo={perrin2018a} />
              <Journal photo={perrin2018b} />
              <Journal photo={perrin2018c} />
              <Journal photo={sosa2017a} />
              <Journal photo={sosa2017b} />
              <Journal photo={sosa2017c} />
            </Route>
          </div>

          <div className="container jurnalC" >
            <Route path="/infographics">
              <Buttons />
              <Infographics photo={informarB} />
              <Infographics photo={informarC} />
              <Infographics photo={informarD} />
              <Infographics photo={informarE} />
            </Route>
          </div>

          <div className="container jurnalC" >
            <Route path="/gapplications">
              <Buttons />
              <GApplications  photo={organoids} />
            </Route>
          </div>
        </Router>
      </div>
      <Footer />
    </div>

  );
}

export default App;
