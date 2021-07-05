import React, { Component } from 'react';
import './style.css';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../themes/theme';
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
      <ThemeProvider>
      <div className="header-wrapper" style={{ "height": this.state.height }}>
        <div className="header">
          <h3>My name is Belle Duran</h3>
          <h6>I am a software developer</h6>
        </div>
        <div className="scroll-down-btn">
          <Fab mini={true} onClick={this.onScrollToIntro.bind(this)}>
            <KeyboardArrowDownIcon  />
          </Fab>
        </div>

      </div>
      </ThemeProvider>
    );
  }
}

export default HeaderComponent;

