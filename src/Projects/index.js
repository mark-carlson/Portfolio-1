import React from 'react';
import Container from '@material-ui/core/Container';
import ProjectCard from "./ProjectCards";
import Projectlayout from './layout'

import './style.css';

function Projects() {

  return (
    <Container >
      <h1 className="project-heading">
        Projects 
      </h1>
      <Projectlayout>
        <ProjectCard image='book_club2.gif'/>
        <ProjectCard image='WeatherApp.gif'/>
      </Projectlayout>
    </Container>
  );
};

export default Projects;