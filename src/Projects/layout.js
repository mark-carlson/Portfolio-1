import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.secondary,
  },
}));

export default function Projectlayout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
            {props.children}
      </Grid>
    </div>
  );
}
