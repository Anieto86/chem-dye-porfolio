import React from 'react'

import './App.css';


//Router 
import {BrowserRouter as Router} from 'react-router-dom'


// Components
import Navigation from './components/navigation'


function App() {
  return (
    <Router>

  <Navigation/>
  </Router>
  );
}

export default App;
