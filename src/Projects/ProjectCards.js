import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';

import './style.css';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '50%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function ProjectCard(props) {
  console.log(props)
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.expand}>
        <CardMedia
          className={classes.media}
          style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
          }}
          title="Project"
        />
        <CardContent>
          <Typography className="project-heading">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             {props.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton >
            <Link href={props.link} color="inherit">
              <GitHubIcon />
            </Link>
          </IconButton>
          <IconButton>

          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
