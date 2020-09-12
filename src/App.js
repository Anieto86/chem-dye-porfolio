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
              title="Graphical Abstract"
              photo={graphicalAbstract}/>
            <Porfolio
              title="Scientific Journal Images"
              photo={ScientificJournal} />
            <Porfolio
              title="Infographics"
              photo={Infograph} />
            <Porfolio
              title="Grant Applications"
              photo={GrantApp} />
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
              <GraphAb
                photo={peralta}
                title=""
                text="" />
              <GraphAb
                photo={oksdath2017}
                title=""
                text="" />
              <GraphAb
                photo={Ebert2020}
                title=""
                text="" />
            </Route>
          </div>

          <div className="container jurnalC" >
            <Route path="/journal">
            <Buttons />
              <Journal
                photo={perrin2018a}
                title=""
                text="" />
              <Journal
                photo={perrin2018b}
                title=""
                text="" />
              <Journal
                photo={perrin2018c}
                title=""
                text="" />
              <Journal
                photo={sosa2017a}
                title=""
                text="" />
              <Journal
                photo={sosa2017b}
                title=""
                text="" />
              <Journal
                photo={sosa2017c}
                title=""
                text="" />
            </Route>
          </div>

          <div className="container jurnalC" >
            <Route path="/infographics">
            <Buttons />
              <Infographics />
            </Route>
          </div>

          <div className="container jurnalC" >
            <Route path="/gapplications">
            <Buttons />
              <GApplications />
            </Route>
          </div>
        </Router>
      </div>
      <Footer />
    </div>

  );
}

export default App;
