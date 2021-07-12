import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./Projects";
import Header from "./components/Header";
import ContactMe from "./components/ContactMe";
import Intro from "./components/Intro";
import { MuiThemeProvider } from '@material-ui/core';
import theme from './themes/theme'
import './App.css';


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Intro />
            <div className="section colored">
              <div className="section-container">
                <AboutMe />
              </div>
            </div>
            <div className="section dark">
              <div className="section-container">
                <ContactMe/>
              </div>
            </div>
          </Route>
          <div className="section normal">
          <div className="section">
          <Route exact path="/projects" component={Projects} />
          </div>
          </div>
          </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
