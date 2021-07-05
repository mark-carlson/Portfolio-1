import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import './style.css';
import pic from '../../images/avatar.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(20),
            height: theme.spacing(25),
        },
    },
}));

function AboutMe(props) {
    const classes = useStyles();
    return (
        <Container className="introduction" style={{ height: '40vh' }}>
            <div className={classes.root}>
                <Avatar alt="Belle" src={pic} />
            </div>
            <p className="introduction-text">
                Loves cats, gardening, and authentic Mexican cuisine.
                My grandma's tamales can throw down with Bobby Flay and Gordon Ramsay.
            </p>
        </Container>
    )
};

export default AboutMe;