import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './style.css';


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
        <Container className="contact" style={{ height: '40vh' }}>
            <p className="contact-text">
               If you are interested in contacting me, 
               <br />
               reach out via: 
               <ul >
                   <ListItem>
                       <ListItemIcon>
                       <LinkedInIcon style={{ fontSize: 35, color: "white" }} />
                       </ListItemIcon>
                       <ListItemText primary="linkedin.com/in/belle-duran-127760204/" />
                   </ListItem>
                   <ListItem>
                       <ListItemIcon>
                       <MailOutlineIcon style={{ fontSize: 35, color: "white" }} />
                       </ListItemIcon>
                       <ListItemText primary="bduran04@gmail.com" />
                   </ListItem>
               </ul>
            </p>
        </Container>
    )
};

export default AboutMe;