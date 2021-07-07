import React, { Component } from 'react';
import './style.css';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { IconButton } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const scrollTo = require('scroll-to');

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      scrollTo: props.height
    };
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight + 'px',
      scrollTo: window.innerHeight
    });
  }

  async componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  onScrollToIntro() {
    scrollTo(0, this.state.scrollTo, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="header-wrapper" style={{ "height": this.state.height }}>
        <div className="header">
          <h3>My name is Belle Duran</h3>
          <h6>I am a software developer</h6>
          <IconButton color="inherit">
          <Link href="https://github.com/bduran04" color="inherit">
            <GitHubIcon />
          </Link>
        </IconButton>
        <IconButton color="inherit">
                <Link href="https://www.linkedin.com/in/belle-duran-127760204/" color="inherit">
                  <LinkedInIcon />
                </Link>
              </IconButton>
        </div>
        <div className="scroll-down-btn">
          <Fab size='small' onClick={this.onScrollToIntro.bind(this)}>
            <KeyboardArrowDownIcon  />
          </Fab>
        </div>

      </div>
    );
  }
}

export default HeaderComponent;

