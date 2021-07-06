import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import ProjectCard from "./ProjectCards";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import styles from './style.css';
import image from '../images/BD_logo.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    boxShadow: 'none',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  button: {
    float: 'right',
  },
}));

function ChipsArray({ array }) {
  const classes = useStyles();

  let newArray = array;
  if (!newArray) {
    newArray = [{ key: 0, label: 'Fill In' }];
  }

  const [chipData] = React.useState(newArray);

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip label={data.label} className={classes.chip} clickable />
          </li>
        );
      })}
    </Paper>
  );
}

ChipsArray.propTypes = {
  array: PropTypes.array.isRequired,
};

function FancyHeaderCard({ name, date, description, array, github }) {
  const classes = useStyles();

  return (
    <Card className={styles.header}>
      <CardHeader
        className={styles.header_root}
        title={
          <div>
            {name}
            <Button
              variant="contained"
              color="primary-dark"
              className={classes.button}
              href={github}
              target="_blank"
            >
              Github
            </Button>
          </div>
        }
        subheader={date}
        classes={{
          title: styles.title,
          subheader: styles.subheader,
        }}
      />
      <CardContent>
        <div className={styles.inner}>
          <Typography>{description}</Typography>
          <br />
          <div className={styles.chips}>
            <ChipsArray array={array} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

FancyHeaderCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
  github: PropTypes.string.isRequired,
};

export default function Projects(props) {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Grid style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Grid md={4} className="project-card">
            <Card >
              <Card.Img variant="top" src={props.image} alt="card-img" />
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
          </Grid>

          <Grid md={4} className="project-card">
            {/* <ProjectCard
              imgPath={image}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            /> */}
          </Grid>

          <Grid md={4} className="project-card">
            {/* <ProjectCard
              imgPath={image}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            /> */}
          </Grid>

          <Grid md={4} className="project-card">
            {/* <ProjectCard
              imgPath={image}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            /> */}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};