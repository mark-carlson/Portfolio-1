import React from "react";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

function ProjectCards(props) {
  return (
      <div>
    <Card >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <Link /> 
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ProjectCards;