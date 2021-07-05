import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./pages/Projects";
import Header from "./components/Header"
import Container from "./components/Container"
import Intro from "./components/Intro"
import { Button } from 'reactstrap';
import { ThemeProvider } from '@material-ui/core';
import theme from './themes/theme'
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Intro />
          <div className="section colored">
          <div className="section-container">
              <Route exact path="/" component={AboutMe} />
            </div>
          </div>
          {/* <Route exact path="/" />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/projects" component={Projects} /> */}
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
