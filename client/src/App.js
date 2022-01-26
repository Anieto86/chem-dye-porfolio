import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

//TODO   Components
import Navigation from "./components/navigation";
import Home from "./components/home";
import Service from "./components/Service";
import Porfolio from "./components/porfolio";
import About from "./components/about";
import Company from "./components/Company";
import Footer from "./components/footer";
import Infographics from "./components/infographics";
import Blog from "./components/Blog.js";
import Txtblog4 from "./components/Txtblog4.js";
import Txtblog3 from "./components/Txtblog3.js";
import Txtblog2 from "./components/Txtblog2.js";
import Txtblog1 from "./components/Txtblog1.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D4FE52",
      light: "#757ce8",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffc400",
      light: "#ff7961",
      dark: "#ba000d",
      // contrastText: "#000",
    },
  },
  background: {
    default: "#000",
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 16,
  },
  text: {
    primary: "#fff",
  },
});

function App() {
  return (
    <div className='bg'>
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation />
          <Route exact path='/'>
            <Home />
            <Service />
          </Route>
          <Route path='/porfolio'>
            <Porfolio title='Animations' />
            <Infographics />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/blog/txt4' component={Txtblog4} />
                <Route exact path='/blog/txt3' component={Txtblog3} />
                <Route exact path='/blog/txt2' component={Txtblog2} />
                <Route exact path='/blog/txt1' component={Txtblog1} />
              </div>
            </div>
          </div>
          <br />
          <Company />
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
