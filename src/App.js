import React from "react";

import "./App.css";
//Router
import { BrowserRouter as Router, Route } from "react-router-dom";

//TODO   Components
import Navigation from "./components/navigation";
import Home from "./components/home";
import Porfolio from "./components/porfolio";
import About from "./components/about";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import GraphAb from "./components/graphAb";
import Journal from "./components/journal";
import Infographics from "./components/infographics";
import GApplications from "./components/gapplications";
import Buttons from "./components/buttons.js";
import Biorender from "./components/biorender.js";
import Drawings from "./components/drawinsg.js";
import Animations from "./components/animations.js";
import { Blog } from "./components/Blog";

//?Import Img in Portal
import graphicalAbstract from "./components/img/Graphical_Abstract_Monica_Garcia.png";
import ScientificJournal from "./components/img/Oksdath2018.png";
import Infograph from "./components/img/What-does-a-scientific-illustrator.png";
import GrantApp from "./components/img/the-cell.png";

//?import Grafical Abtract img
import peralta from "./components/img/Graphical Abstract_Mariana_Peralta.png";
import oksdath2017 from "./components/img/Oksdath2017.jpg";
import Ebert2020 from "./components/img/Ebert2020.jpg";

//?import Journal ImgStyled
import perrin2018a from "./components/img/Perrin2018a.jpg";
import perrin2018b from "./components/img/Perrin2018b.jpg";
import perrin2018c from "./components/img/Perrin2018c.jpg";
import sosa2017a from "./components/img/sosa2017a.jpg";
import sosa2017b from "./components/img/sosa2017b.jpg";
import sosa2017c from "./components/img/sosa2017c.jpg";

//?import  Infographic imgs
import inforbeuron from "./components/img/Oksdath-et-al-2016-V2.jpg";
import informarB from "./components/img/informarB.png";
import informarC from "./components/img/informarC.png";
import informarD from "./components/img/informarD.png";
import informarE from "./components/img/informarE.png";
import organoids from "./components/img/organoids-shapes.jpg";
import infoGlobalWarming from "./components/img/Inforgraphic_Global-warming.jpg";

//? Biorender img
import biorender1 from "./components/img/01_IN_UTERO_ELECTROPORATION_biorender.png";
import biorender2 from "./components/img/02_Primary_rat_hippocampal_cell_culturing_biorender.png";
import biorender3 from "./components/img/03_Brain_Tumour_Microenvironment_biorender.png";

//? line Drawins
import drawings1 from "./components/img/01_Muscles_drawins.png";
import drawings2 from "./components/img/02_Manos_Mariana_Oksdath_drawins.jpg";
import drawings3 from "./components/img/02_Pies_Mariana_Oksdath_drawins.jpg";

//?Animations
import animation1 from "./components/img/Animacion_Mariana_Oksdath.gif";

function App() {
  return (
    <div>
      <Router>
        <div className='row'>
          <div className='col-lg-12 col-md-8 col-sm-8'>
            <Navigation />
          </div>
        </div>

        <Route exact path='/'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-10'>
              <Home />
            </div>
          </div>
        </Route>

        <Route path='/porfolio'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-10'>
              <Porfolio photo={animation1} title='Animations' />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-6 col-sm-10'>
              <Buttons />
            </div>
          </div>
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/testimonials'>
          <Testimonials />
        </Route>

        
        <Route path='/blog'>
          <Blog />
        </Route>

        <div className='container jurnalC'>
          <Route path='/animations'>
            <Buttons />
            <Animations photo={animation1} />
          </Route>
        </div>

        <div className='container jurnalC'>
          <Route path='/biorender'>
            <Buttons />
            <Biorender photo={biorender1} />
            <Biorender photo={biorender2} />
            <Biorender photo={biorender3} />
          </Route>
        </div>

        <div className='container jurnalC'>
          <Route path='/journal'>
            <Buttons />
            <Journal photo={ScientificJournal} />
            <Journal photo={perrin2018a} />
            <Journal photo={perrin2018b} />
            <Journal photo={perrin2018c} />
            <Journal photo={sosa2017a} />
            <Journal photo={sosa2017b} />
            <Journal photo={sosa2017c} />
            <GraphAb photo={graphicalAbstract} />
            <GraphAb photo={peralta} />
            <GraphAb photo={oksdath2017} />
            <GraphAb photo={Ebert2020} />
            <GApplications photo={GrantApp} />
            <GApplications photo={organoids} />
          </Route>
        </div>

        <div className='container jurnalC'>
          <Route path='/infographics'>
            <Buttons />
            <Infographics photo={infoGlobalWarming} />
            <Infographics photo={inforbeuron} />
            <Infographics photo={Infograph} />
            <Infographics photo={informarB} />
            <Infographics photo={informarC} />
            <Infographics photo={informarD} />
            <Infographics photo={informarE} />
          </Route>
        </div>

        <div className='container jurnalC'>
          <Route path='/drawings'>
            <Buttons />
            <Drawings photo={drawings1} />
            <Drawings photo={drawings2} />
            <Drawings photo={drawings3} />
          </Route>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
