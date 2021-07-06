import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Project from "./Projects";
import Header from "./components/Header";
import ContactMe from "./components/ContactMe";
import Container from "./components/Container";
import Intro from "./components/Intro";
import { Button } from 'reactstrap';
import { ThemeProvider } from '@material-ui/core';
import theme from './themes/theme'
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
        <Switch>
          <Header />
            <Intro />
            <div className="section colored">
              <div className="section-container">
                <Route exact path="/" component={AboutMe} />
              </div>
            </div>
            <div className="section dark">
              <div className="section-container">
                <Route exact path="/" component={ContactMe} />
              </div>
            </div>
            </Switch>
            <Route >
              <Route theme={theme} exact path="/projects" component={Project} />
            </Route>
            {/* <Footer /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
